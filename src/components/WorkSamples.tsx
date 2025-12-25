'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './WorkSamples.module.css';

const projects = [
    {
        title: 'Digital Filing System',
        description: 'Reduced document retrieval time by 40% with a structured, rigorous cloud filing system.',
        image: '/samples/filing.png'
    },
    {
        title: 'Executive Dashboards',
        description: 'Custom Excel dashboards for tracking KPIs, expenses, and travel schedules.',
        image: '/samples/dashboard.png'
    },
    {
        title: 'Inbox Zero Strategy',
        description: 'Managed and organized 1000+ daily emails into actionable categories.',
        image: '/samples/inbox.png'
    }
];

export default function WorkSamples() {
    return (
        <section id="work" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Featured Work</h2>
                    <p className={styles.subtitle}>
                        Examples of how I bring structure and efficiency to complex workflows.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.preview}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
