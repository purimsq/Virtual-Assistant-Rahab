'use client';

import { useState, useRef, MouseEvent, CSSProperties } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, X, CheckCircle } from 'lucide-react';
import styles from './Certificates.module.css';

const certificates = [
    {
        title: "Virtual Assistant Program",
        issuer: "ALX",
        date: "December 2025",
        image: "/certificates/alx-certificate.jpg",
        description: "10-week intensive program mastering virtual collaboration, project management tools, and digital workflow optimization."
    },
    {
        title: "Professional Virtual Assistance",
        issuer: "AQskill",
        date: "September 2025",
        image: "/certificates/aqskill-certificate.png",
        description: "Advanced certification in office administration, client communication, and remote team support protocols."
    }
];

// Helper component for individual 3D Card
function CertificateCard({ cert, onClick }: { cert: any; onClick: () => void }) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state for spotlight
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth tilt values
    const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

    // Map mouse position to VERY MILD tilt degrees (-2 to 2 deg) for subtle effect
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["2deg", "-2deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-2deg", "2deg"]);

    function onMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate percentages [-0.5, 0.5] from center
        const width = rect.width;
        const height = rect.height;
        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        const xPct = (mouseXRel / width) - 0.5;
        const yPct = (mouseYRel / height) - 0.5;

        // Set values for tilt
        mouseX.set(xPct);
        mouseY.set(yPct);

        // Set values for spotlight gradient (pixels)
        x.set(mouseXRel);
        y.set(mouseYRel);
    }

    function onMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            className={styles.cardWrapper}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
                rotateX,
                rotateY,
            }}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.card}>
                {/* Spotlight Overlay */}
                <motion.div
                    className={styles.spotlight}
                    style={{
                        ['--mouse-x' as any]: x,
                        ['--mouse-y' as any]: y,
                    }}
                />

                <div className={styles.imageContainer}>
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className={styles.certImage}
                    />
                    <div className={styles.verifiedBadge}>
                        <CheckCircle size={12} /> Verified
                    </div>
                </div>

                <div className={styles.viewIcon}>
                    <ArrowUpRight size={24} />
                </div>

                <div className={styles.cardContent}>
                    <div className={styles.certIssuer}>{cert.issuer}</div>
                    <div className={styles.certTitle}>{cert.title}</div>
                    <div className={styles.certDate}>{cert.date}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    return (
        <section className={styles.section} id="certificates">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Certifications.</h2>
                    <p className={styles.subtitle}>
                        Recognized qualifications that validate my commitment to excellence.
                    </p>
                </div>

                <div className={styles.grid}>
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={index}
                            cert={cert}
                            onClick={() => setSelectedCert(cert)}
                        />
                    ))}
                </div>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            className={styles.modalBackdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            style={{
                                position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)',
                                zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' // p: 4 -> padding: '1rem'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{ position: 'relative', width: '100%', maxWidth: '900px', padding: '1rem' }}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    style={{
                                        position: 'absolute', top: -40, right: 0, background: 'none', border: 'none', color: 'white', cursor: 'pointer'
                                    }}
                                >
                                    <X size={32} />
                                </button>
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    style={{ width: '100%', borderRadius: '8px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                                />
                                <div style={{ marginTop: '1rem', color: 'white' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{selectedCert.title}</h3>
                                    <p style={{ color: '#9ca3af' }}>{selectedCert.description}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
