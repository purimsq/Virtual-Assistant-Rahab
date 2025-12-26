'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            className={styles.navbar + ' ' + styles.navbarGlass}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    Rahab.
                </Link>

                {/* Desktop Menu */}
                <div className={styles.navLinks}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#work" className={styles.link}>Work</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className={styles.mobileOverlay}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Link href="#services" className={styles.mobileLink} onClick={closeMenu}>Services</Link>
                            <Link href="#work" className={styles.mobileLink} onClick={closeMenu}>Work</Link>
                            <Link href="#contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
                            <div style={{ marginTop: '1rem' }}>
                                <ThemeToggle />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
