'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Star } from 'lucide-react';
import styles from './ReviewCTA.module.css';

export default function ReviewCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>What Clients Say</h2>
                    <p className={styles.subtitle}>
                        Read about the experiences of those I&apos;ve helped, or share your own feedback to help me grow.
                    </p>

                    <div className={styles.actions}>
                        <Link href="/reviews" className={styles.primaryBtn}>
                            <Star size={18} />
                            Write a Review
                        </Link>
                        <Link href="/reviews" className={styles.secondaryBtn}>
                            <MessageSquare size={18} />
                            View Testimonials
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
