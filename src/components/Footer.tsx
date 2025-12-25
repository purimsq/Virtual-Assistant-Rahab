import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    &copy; {currentYear} Rahab. All rights reserved.
                </div>
                <div className={styles.links}>
                    <a href="#services" className={styles.link}>Services</a>
                    <a href="#work" className={styles.link}>My Work</a>
                    <a href="#contact" className={styles.link}>Contact</a>
                </div>
            </div>
        </footer>
    );
}
