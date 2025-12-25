'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !message) return;

        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message }),
            });

            if (res.ok) {
                setStatus('success');
                setEmail('');
                setMessage('');
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Ready to optimize your workflow?</h2>
                    <p className={styles.subtitle}>
                        Enter your email and request. I'll get back to you shortly.
                    </p>

                    <div className={styles.card}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="How can I help you? (e.g. 'I need help managing my calendar and travel bookings')"
                                className={styles.textarea}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />

                            <button
                                type="submit"
                                className={styles.button}
                                disabled={status === 'sending' || status === 'success'}
                            >
                                {status === 'sending' ? (
                                    'Sending...'
                                ) : status === 'success' ? (
                                    <>Sent <Check size={20} /></>
                                ) : (
                                    <>Send Request <Send size={20} /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className={`${styles.status} ${styles.error}`}>
                                    Something went wrong. Please try again or email directly.
                                </p>
                            )}
                        </form>

                        <div className={styles.contactInfo}>
                            <div style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                                You can also email directly at <a href="mailto:rahabkamau778@gmail.com" style={{ textDecoration: 'underline' }}>rahabkamau778@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
