'use client';

import { useState, useEffect, useMemo } from 'react';
import { Star, Loader2, User, ArrowRight, X } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, Timestamp } from 'firebase/firestore';
import styles from './ReviewSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Reply {
    id: string;
    name: string;
    text: string;
    date: string;
    createdAt?: Timestamp;
}

interface Review {
    id: string;
    name: string;
    rating: number;
    text: string;
    date: string;
    createdAt?: Timestamp;
    replies?: Reply[];
}

export default function ReviewSection() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);

    // Form States
    const [newRating, setNewRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [newComment, setNewComment] = useState("");
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Reply States
    const [expandedReviewId, setExpandedReviewId] = useState<string | null>(null);

    // Email Validation Helper
    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    // 1. FETCH REVIEWS
    useEffect(() => {
        try {
            const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const fetchedReviews = snapshot.docs.map(doc => {
                    const data = doc.data();
                    // Process replies if they exist
                    const replies = (data.replies || []).map((r: Reply) => ({
                        ...r,
                        date: r.createdAt?.toDate ? r.createdAt.toDate().toLocaleDateString() : (r.date || "Just now")
                    }));

                    return {
                        id: doc.id,
                        name: data.name,
                        rating: data.rating,
                        text: data.text,
                        createdAt: data.createdAt,
                        date: data.createdAt?.toDate().toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        }) || "Just now",
                        replies: replies
                    } as Review;
                });
                setReviews(fetchedReviews);
                setLoading(false);
            }, (error) => {
                console.error("Error fetching reviews:", error);
                setLoading(false);
            });
            return () => unsubscribe();
        } catch (error) {
            console.error("Firebase init error:", error);
            setLoading(false);
        }
    }, []);

    // 2. AUTO-CALCULATION
    const { averageRating, totalReviews, distribution } = useMemo(() => {
        const total = reviews.length;
        if (total === 0) return { averageRating: "0.0", totalReviews: 0, distribution: {} as Record<number, number> };

        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        const avg = (sum / total).toFixed(1);

        const dist: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach((r) => {
            if (dist[r.rating] !== undefined) dist[r.rating]++;
        });

        return { averageRating: avg, totalReviews: total, distribution: dist };
    }, [reviews]);

    // 3. HANDLE SUBMIT
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setEmailError("");

        if (newRating === 0) {
            alert("Please select a star rating!");
            return;
        }
        if (!newEmail) {
            setEmailError("Email is required.");
            return;
        }
        if (!validateEmail(newEmail)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);

        try {
            // AUTOMATIC REPLY LOGIC
            // AUTOMATIC REPLY LOGIC
            const positiveReplies = [
                "Thank you so much for your kind review! It was a pleasure working with you.",
                "I'm thrilled to hear you had a great experience! Thanks for the feedback.",
                "Your words mean a lot! Looking forward to collaborating again.",
                "Thank you! It was an absolute joy to work on this project.",
                "I truly appreciate your feedback! Glad I could help.",
                "Thanks for the amazing review! It keeps me motivated.",
                "So happy to hear you're satisfied with the results! Thank you.",
                "It was great working with you! Thanks for the kind words.",
                "I really appreciate you taking the time to share your experience!",
                "Thank you! Your satisfaction is my top priority.",
                "This made my day! Thanks for being such a great client.",
                "I'm glad we achieved exactly what you were looking for! Thanks.",
                "Thank you for the support! It was a fantastic project.",
                "Really appreciate the positive feedback! Let's work together again soon.",
                "Thank you! I'm always here if you need anything else.",
                "So glad you liked the work! Thanks for the review.",
                "Your feedback encourages me to do even better! Thank you.",
                "Thanks a ton! It was a wonderful experience working with you.",
                "I'm honored by your kind words! Thank you very much.",
                "Thank you! It's clients like you that make this work so rewarding."
            ];

            const constructiveReplies = [
                "Thank you for your feedback. I'm sorry to hear that your experience didn't match your expectations. Please reach out so we can resolve this.",
                "I appreciate your honesty. I'm always looking to improve, so please let me know how I can make this right.",
                "Thank you for the review. I strive for excellence and would love to understand where I fell short.",
                "I'm sorry to hear you weren't fully satisfied. Your feedback is valuable for my growth.",
                "Thank you for sharing your thoughts. I take all feedback seriously and would love to discuss how to improve.",
                "I appreciate your input. Please contact me directly so we can address your concerns.",
                "Thank you for the review. I'm committed to ensuring client satisfaction and would like to fix any issues.",
                "I value your feedback and am sorry for any inconvenience. Let's connect to find a solution.",
                "Thank you for bringing this to my attention. I'm dedicated to continuous improvement.",
                "I appreciate you taking the time to review. I'd love the opportunity to make things right."
            ];

            // Select reply based on rating
            const targetReplies = newRating >= 4 ? positiveReplies : constructiveReplies;
            const randomReply = targetReplies[Math.floor(Math.random() * targetReplies.length)];

            const autoReply: Reply = {
                id: Math.random().toString(36).substr(2, 9),
                name: "Rahab Kamau",
                text: randomReply,
                date: "Just now",
                // Note: We aren't using serverTimestamp for reply date in this simple object array yet, 
                // but client date is fine for immediate display.
            };

            await addDoc(collection(db, "reviews"), {
                name: newName || "Anonymous",
                email: newEmail,
                rating: newRating,
                text: newComment,
                createdAt: serverTimestamp(),
                replies: [autoReply] // Add the auto-reply immediately
            });

            setNewRating(0);
            setNewComment("");
            setNewName("");
            setNewEmail("");
            setShowForm(false);
            alert("Thank you for your review!");

        } catch (error) {
            console.error("Error adding review: ", error);
            alert("Error submitting review. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const toggleReplies = (id: string) => {
        setExpandedReviewId(expandedReviewId === id ? null : id);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header Section */}
                <div className={styles.header}>
                    <div className={styles.titleGroup}>
                        <h2 className={styles.title}>Client Reviews</h2>
                        <div className={styles.statsRow}>
                            <span className={styles.ratingBadge}>
                                {averageRating} <Star size={16} fill="currentColor" />
                            </span>
                            <span>•</span>
                            <span>{totalReviews} Reviews</span>
                        </div>

                        {!showForm && (
                            <motion.div
                                className={styles.distribution}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {[5, 4, 3, 2, 1].map((star) => {
                                    const count = distribution[star] || 0;
                                    const percentage = totalReviews ? (count / totalReviews) * 100 : 0;
                                    return (
                                        <div key={star} className={styles.distRow}>
                                            <span style={{ width: '10px' }}>{star}</span>
                                            <div className={styles.distBarBg}>
                                                <div
                                                    className={styles.distBarFill}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </div>

                    {!showForm && (
                        <button
                            className={styles.writeBtn}
                            onClick={() => setShowForm(true)}
                        >
                            Write a Review <ArrowRight size={18} />
                        </button>
                    )}
                </div>

                {/* Toggleable Form */}
                <AnimatePresence>
                    {showForm && (
                        <motion.div
                            className={styles.formContainer}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.formHeader}>
                                <h3 style={{ fontWeight: 700, fontSize: '1.25rem' }}>Share your experience</h3>
                                <button className={styles.closeBtn} onClick={() => setShowForm(false)}>
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className={styles.inputGroup}>
                                <div className={styles.row}>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={newName}
                                        onChange={(e) => setNewName(e.target.value)}
                                        className={styles.input}
                                        required
                                    />
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={newEmail}
                                            onChange={(e) => {
                                                setNewEmail(e.target.value);
                                                if (emailError) setEmailError("");
                                            }}
                                            className={styles.input}
                                            style={emailError ? { borderColor: '#ef4444' } : {}}
                                            required
                                        />
                                        {emailError && <span style={{ color: '#ef4444', fontSize: '0.75rem', display: 'block', marginTop: '4px' }}>{emailError}</span>}
                                    </div>
                                </div>

                                <div className={styles.starInput}>
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewRating(star)}
                                            onMouseEnter={() => setHover(star)}
                                            onMouseLeave={() => setHover(0)}
                                            className={`${styles.starBtn} ${star <= (hover || newRating) ? styles.starBtnActive : ''}`}
                                        >
                                            <Star
                                                size={24}
                                                fill={star <= (hover || newRating) ? "currentColor" : "none"}
                                            />
                                        </button>
                                    ))}
                                </div>

                                <textarea
                                    placeholder="What did you like about working with Rahab?"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className={styles.textarea}
                                    required
                                />

                                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                                    {isSubmitting ? "Posting..." : "Post Review"}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Reviews Grid */}
                <div className={styles.reviewsGrid}>
                    {loading && (
                        <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}>
                            <Loader2 className="animate-spin" />
                        </div>
                    )}

                    {!loading && reviews.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', color: 'var(--muted)', marginTop: '4rem' }}>
                            No reviews yet. Be the first!
                        </div>
                    )}

                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            className={styles.reviewCard}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.reviewStars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        fill={i < review.rating ? "currentColor" : "none"}
                                        color={i < review.rating ? "#fbbf24" : "#e5e7eb"}
                                    />
                                ))}
                            </div>

                            <p className={styles.reviewText}>&quot;{review.text}&quot;</p>

                            <div className={styles.reviewFooter}>
                                <div className={styles.avatar}>
                                    <User size={16} />
                                </div>
                                <div className={styles.reviewerInfo}>
                                    <span className={styles.reviewName}>{review.name}</span>
                                    <div className={styles.dateRow}>
                                        <span className={styles.reviewDate}>{review.date}</span>
                                        {review.replies && review.replies.length > 0 && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleReplies(review.id);
                                                }}
                                                className={styles.replyToggleBtnInline}
                                            >
                                                {expandedReviewId === review.id ? "Hide Reply" : "View Reply"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Replies List */}
                            <AnimatePresence>
                                {expandedReviewId === review.id && review.replies && (
                                    <motion.div
                                        className={styles.repliesContainer}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        {review.replies.map(reply => (
                                            <div key={reply.id} className={styles.replyCard}>
                                                <div className={styles.replyHeader}>
                                                    <span className={styles.replyName}>{reply.name}</span>
                                                    <span>{reply.date}</span>
                                                </div>
                                                <p className={styles.replyText}>{reply.text}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
