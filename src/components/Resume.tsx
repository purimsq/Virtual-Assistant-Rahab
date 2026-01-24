'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Briefcase, GraduationCap, Globe, User, Award, Download } from 'lucide-react';
import styles from './Resume.module.css';

interface Html2PdfOptions {
    margin?: number | [number, number] | [number, number, number, number];
    filename?: string;
    image?: { type: 'jpeg' | 'png' | 'webp'; quality: number };
    html2canvas?: { scale: number; useCORS?: boolean };
    jsPDF?: { unit?: string; format?: string | [number, number]; orientation?: 'portrait' | 'landscape' };
}

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
                            id="resume-content"
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
                                    Highly organized and detail-oriented Virtual Assistant with over 5 years of experience in administrative
                                    support, records management, and client communication. Expertise in calendar coordination, email
                                    management, document control, and workflow automation enhances operational efficiency. Proficient in
                                    Microsoft Office, Google Workspace, CRM systems, and project management platforms to optimize
                                    processes. Demonstrated ability to manage multiple priorities while safeguarding confidential records and
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

                                {/* Skills */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><Award size={16} /> Skills</h3>
                                </div>
                                <div className={styles.skillsGrid}>
                                    <ul className={styles.bulletList}>
                                        <li>Calendar & Schedule Management</li>
                                        <li>Time Management & Prioritization</li>
                                        <li>Workflow Automation & Productivity Tools</li>
                                        <li>Confidentiality & Data Security</li>
                                    </ul>
                                    <ul className={styles.bulletList}>
                                        <li>Digital Filing Systems & Document Control</li>
                                        <li>Travel Planning & Logistics</li>
                                        <li>Email & Inbox Organization</li>
                                    </ul>
                                </div>

                                {/* Experience */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}><Briefcase size={16} /> Work History</h3>
                                </div>

                                <div className={styles.experienceItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Virtual Assistant</span> | <span className={styles.company}>Remote - Prosser</span>
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
                                            <span className={styles.jobTitle}>Records Management Clerk</span> | <span className={styles.company}>Remote - Prosser</span>
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
                                            <span className={styles.jobTitle}>Diploma in Administrative Procedures and Office Support</span> | <span className={styles.company}>Alison - Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>01/2026</span>
                                    </div>
                                    <p>Completed a Diploma in Administrative Procedures and Office Support</p>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Executive Virtual Assistant Mastery</span> | <span className={styles.company}>Alison - Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>01/2026</span>
                                    </div>
                                    <p>Completed a Certificate in Executive Virtual Assistant Mastery</p>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Virtual Assistant</span> | <span className={styles.company}>African Leadership Xcelerator (ALX) - Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>12/2025</span>
                                    </div>
                                    <p>Completed a Certificate in Virtual Assistant</p>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Professional Virtual Assistant</span> | <span className={styles.company}>Acquire Skills - Virtual Online</span>
                                        </span>
                                        <span className={styles.date}>09/2025</span>
                                    </div>
                                </div>

                                <div className={styles.educationItem}>
                                    <div className={styles.jobHeader}>
                                        <span>
                                            <span className={styles.jobTitle}>Executive Virtual Assistant Skills</span> | <span className={styles.company}>Alison - Virtual / Online</span>
                                        </span>
                                        <span className={styles.date}>05/2025</span>
                                    </div>
                                    <p>Completed a Certificate in Executive Virtual Assistant Skills</p>
                                </div>

                                {/* Languages */}
                                <div className={styles.sectionHeader}>
                                    <h3 className={styles.sectionTitle}> Languages</h3>
                                </div>
                                <p>English - Full Professional</p>
                            </div>

                            <div className={styles.buttonGroup}>
                                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                                    Close Resume
                                </button>
                                <button className={styles.downloadButton} onClick={async () => {
                                    const element = document.getElementById('resume-content');
                                    if (!element) return;

                                    // Dynamic import
                                    const html2pdf = (await import('html2pdf.js')).default;

                                    const opt: Html2PdfOptions = {
                                        margin: [0.5, 0.5],
                                        filename: 'Rahab_Kamau_Resume.pdf',
                                        image: { type: 'jpeg', quality: 0.98 },
                                        html2canvas: { scale: 2, useCORS: true },
                                        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                                    };

                                    // Clone to manipulate for PDF (remove icons/buttons)
                                    const clone = element.cloneNode(true) as HTMLElement;

                                    // Remove buttons from clone
                                    const buttons = clone.querySelectorAll('button');
                                    buttons.forEach(btn => btn.remove());

                                    // Remove .buttonGroup from clone
                                    const btnGroups = clone.querySelectorAll(`.${styles.buttonGroup}`);
                                    btnGroups.forEach(grp => grp.remove());

                                    // HIDE ICONS in clone 
                                    // (Assuming icons are SVGs or have specific classes. Lucide icons are SVGs)
                                    const icons = clone.querySelectorAll('svg');
                                    icons.forEach(icon => icon.style.display = 'none');

                                    // Apply PDF specific styles to clone
                                    clone.style.padding = '1.5rem'; // Reduced padding
                                    clone.style.background = 'white';
                                    clone.style.color = 'black';
                                    clone.style.boxShadow = 'none';
                                    clone.style.maxWidth = '100%';
                                    clone.style.margin = '0';
                                    clone.style.fontSize = '12px'; // Smaller base font
                                    clone.style.lineHeight = '1.4'; // Tighter leading

                                    // Compact Header
                                    const header = clone.querySelector('header') as HTMLElement;
                                    if (header) {
                                        header.style.marginBottom = '1rem';
                                        header.style.textAlign = 'center';
                                    }

                                    const name = clone.querySelector(`.${styles.name}`) as HTMLElement;
                                    if (name) name.style.fontSize = '2rem'; // Smaller Name

                                    const role = clone.querySelector(`.${styles.role}`) as HTMLElement;
                                    if (role) {
                                        role.style.fontSize = '1.2rem';
                                        role.style.marginTop = '0.25rem';
                                    }

                                    // Compact Headings
                                    const headings = clone.querySelectorAll(`h3`);
                                    headings.forEach(h => {
                                        h.style.fontSize = '1.1rem';
                                        h.style.marginBottom = '0.25rem';
                                        h.style.marginTop = '1rem';
                                        h.style.borderBottom = '1px solid #eee';
                                        h.style.paddingBottom = '0.1rem';
                                    });

                                    // Compact Paragraphs & Lists
                                    const paragraphs = clone.querySelectorAll('p');
                                    paragraphs.forEach(p => p.style.marginBottom = '0.5rem');

                                    const lists = clone.querySelectorAll('ul');
                                    lists.forEach(ul => {
                                        ul.style.marginBottom = '0.5rem';
                                        ul.style.paddingLeft = '1.2rem';
                                    });

                                    const listItems = clone.querySelectorAll('li');
                                    listItems.forEach(li => li.style.marginBottom = '0.1rem');

                                    // Compact Job Headers
                                    const jobHeaders = clone.querySelectorAll(`.${styles.jobHeader}`);
                                    jobHeaders.forEach((jh) => {
                                        (jh as HTMLElement).style.marginBottom = '0.25rem';
                                    });

                                    // Generate
                                    html2pdf().set(opt).from(clone).save();
                                }}>
                                    <Download size={18} /> Download PDF
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
