'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            className={styles.navbar + ' ' + styles.navbarGlass}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Rahab.
                </Link>
                <div className={styles.navLinks}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#work" className={styles.link}>Work</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
}
