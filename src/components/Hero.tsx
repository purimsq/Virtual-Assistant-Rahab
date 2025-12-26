'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.background} />
            <div className={styles.glow} />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.span
                        className={styles.badge}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Available for Hire
                    </motion.span>

                    <h1 className={styles.title}>
                        The <span className={styles.highlight}>Organized Chaos</span> <br />
                        Manager.
                    </h1>

                    <p className={styles.description}>
                        I am Rahab, your dedicated Virtual Assistant and Records Management Officer.
                        I coordinate, organize, and streamline for your success.
                    </p>

                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryButton}>
                            Hire Me
                        </a>
                        <a href="#services" className={styles.secondaryButton}>
                            View Services
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~01a4bee13d5dcafff3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                            style={{ border: '1px solid #108a00', color: '#108a00' }} // Upwork Greenish
                        >
                            Upwork Profile
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rahab-kamau-504996186"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.secondaryButton}
                            style={{ border: '1px solid #0077b5', color: '#0077b5' }} // LinkedIn Blue
                        >
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <Image
                        src="/profile.jpeg"
                        alt="Rahab Profile"
                        width={400}
                        height={400}
                        className={styles.profileImage}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}
