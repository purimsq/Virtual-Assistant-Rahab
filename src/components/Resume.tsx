'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronDown, Download, Briefcase, GraduationCap, Globe, User, Award } from 'lucide-react';
import styles from './Resume.module.css';

export default function Resume() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className={styles.section} id="resume">
            <div className={styles.container}>
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="dossier"
                            className={styles.dossier}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setIsOpen(true)}
                        >
                            <h2 className={styles.dossierTitle}>Rahab Kamau</h2>
                            <p className={styles.dossierSubtitle}>Virtual Assistant • Professional Dossier</p>
                            <button className={styles.revealButton}>
                                <FileText size={20} />
                                View Full Resume
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="resume"
                            className={styles.resumeWrapper}
                            initial={{ opacity: 0, height: 0, scale: 0.95 }}
                            animate={{ opacity: 1, height: 'auto', scale: 1 }}
                            exit={{ opacity: 0, height: 0, scale: 0.95 }}
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                            {/* Header */}
                            <header className={styles.resumeHeader}>
                                <h1 className={styles.name}>Rahab Kamau</h1>
                                <div className={styles.role}>Virtual Assistant</div>
                                <div className={styles.contactInfo}>
                                    rahabkamauva@gmail.com | 99350, Prosser, Washington
                                </div>
                            </header>

                            <div className={styles.resumeContent}>
                                {/* Summary */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><User size={16} /> Summary</h3>
                                </div>
                                <p>
                                    Highly organized and detail-oriented Virtual Assistant with over 5 years of experience in
                                    administrative support, records management, and client communication. Expertise in
                                    calendar coordination, email management, document control, and workflow automation
                                    enhances operational efficiency. Proficient in Microsoft Office, Google Workspace, CRM
                                    systems, and project management platforms to optimize processes. Demonstrated
                                    ability to manage multiple priorities while safeguarding confidential records and
                                    consistently delivering accurate results under tight deadlines.
                                </p>

                                {/* Websites */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><Globe size={16} /> Websites & Profiles</h3>
                                </div>
                                <ul className={styles.bulletList}>
                                    <li>
                                        <a href="https://www.rahabkamau.com" target="_blank" rel="noopener noreferrer" className={styles.unstyledLink}>
                                            www.rahabkamau.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/rahabkamau" target="_blank" rel="noopener noreferrer" className={styles.unstyledLink}>
                                            linkedin.com/in/rahabkamau
                                        </a>
                                    </li>
                                </ul>

                                {/* Highlights */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><Award size={16} /> Highlights</h3>
                                </div>
                                <div className={styles.skillsGrid}>
                                    <ul className={styles.bulletList}>
                                        <li>Calendar & Schedule Management</li>
                                        <li>Workflow Automation & Productivity Tools</li>
                                        <li>Confidentiality & Data Security</li>
                                        <li>Digital Filing Systems & Document Control</li>
                                    </ul>
                                    <ul className={styles.bulletList}>
                                        <li>Travel Planning & Logistics</li>
                                        <li>Email & Inbox Organization</li>
                                        <li>Report Generation</li>
                                        <li>Transcription Services</li>
                                    </ul>
                                </div>

                                {/* Experience */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><Briefcase size={16} /> Experience</h3>
                                </div>

                                <div className={styles.experienceItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Virtual Assistant</span> | <span className={styles.company}>Remote - Prosser, Washington</span>
                                        </span>
                                        <span className={styles.date}>01/2021 - Current</span>
                                    </div>
                                    <ul className={styles.bulletList}>
                                        <li>Managed and prioritized client inboxes, ensuring timely responses and effective communication flow.</li>
                                        <li>Maintained the highest standards of confidentiality when handling sensitive client and business information.</li>
                                        <li>Managed workflows and tracked tasks using Trello and Asana to ensure accountability and on-time completion.</li>
                                        <li>Coordinated tasks across teams and monitored deadlines to ensure consistent, on-time delivery of client deliverables.</li>
                                        <li>Scheduled and coordinated virtual meetings via Zoom, including sending invitations and agendas.</li>
                                        <li>Provided professional customer support via phone, email, and chat, handling inquiries, scheduling appointments, and delivering accurate information.</li>
                                        <li>Exercised independent judgment to prioritize urgent requests, resolve routine issues, and manage daily administrative operations without constant supervision.</li>
                                    </ul>
                                </div>

                                <div className={styles.experienceItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Records Management Clerk</span> | <span className={styles.company}>Remote - Prosser, Washington</span>
                                        </span>
                                        <span className={styles.date}>08/2020 - Current</span>
                                    </div>
                                    <ul className={styles.bulletList}>
                                        <li>Established and maintained digital and physical filing systems to support efficient document retrieval.</li>
                                        <li>Applied metadata, indexing, and labeling standards to enhance document organization and accessibility.</li>
                                        <li>Safeguarded records using secure cloud storage systems to ensure long-term preservation and data security.</li>
                                        <li>Reduced document retrieval time from 10 minutes to under 2 minutes through improved filing and indexing processes.</li>
                                        <li>Maintained 100% compliance with confidentiality, data protection, and records management standards.</li>
                                        <li>Digitized over 300 physical records, reducing storage costs by 25% and improving access efficiency.</li>
                                        <li>Scanned and digitized paper documents, assigning identification numbers to streamline tracking and retrieval.</li>
                                        <li>Handled sensitive employee records, including medical and performance files, while maintaining strict confidentiality.</li>
                                    </ul>
                                </div>

                                {/* Education */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><GraduationCap size={16} /> Education</h3>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>African Leadership Xcelerator (ALX)</span> | <span className={styles.company}>Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>12/2025</span>
                                    </div>
                                    <p><strong>Certificate: Essential VA Skills</strong>: Organization, upward management, communication. <br />
                                        <strong>Tech Tools</strong>: AI, productivity apps, workplace software. <br />
                                        <strong>Client Management</strong>: Gatekeeping, decision-maker support, relationship building.</p>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Acquire a Skill (AQskill)</span> | <span className={styles.company}>Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>09/2025</span>
                                    </div>
                                    <p><strong>Certificate Administrative Skills</strong>: Email management, scheduling, bookkeeping basics. <br />
                                        <strong>Communication Skills</strong>: Professional verbal & written communication. <br />
                                        <strong>Time Management</strong>: Productivity techniques, burnout prevention. <br />
                                        <strong>Tech Tools</strong>: Google Drive, Zoom, Trello, Calendar.</p>
                                </div>

                                {/* Languages */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}> Languages</h3>
                                </div>
                                <p>English</p>
                            </div>

                            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                                Close Resume
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
