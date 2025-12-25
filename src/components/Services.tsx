'use client';

import { motion } from 'framer-motion';
import {
    Briefcase,
    MessageSquare,
    Globe,
    PieChart,
    ShieldCheck,
    Zap
} from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Core Responsibilities',
        icon: <Briefcase size={24} />,
        items: [
            'Calendar Management & Scheduling',
            'Travel Coordination (Flights & Hotels)',
            'Meeting Agendas & Refreshments',
            'Email Filtering & Prioritization',
            'Action Item Tracking'
        ]
    },
    {
        title: 'Communication',
        icon: <MessageSquare size={24} />,
        items: [
            'Drafting Professional Correspondence',
            'Client & Stakeholder Liaising',
            'Inquiry Response Management',
            'Meeting Minutes & Summaries',
            'Inter-departmental Coordination'
        ]
    },
    {
        title: 'Strategic Support',
        icon: <PieChart size={24} />,
        items: [
            'Market Research & Competitor Analysis',
            'Executive Reporting & Summaries',
            'Project Deadline Monitoring',
            'Data-Driven Insights',
            'Relationship Management'
        ]
    },
    {
        title: 'Confidentiality & Compliance',
        icon: <ShieldCheck size={24} />,
        items: [
            'Discreet Handling of Sensitive Info',
            'Trusted "Gatekeeper" Services',
            'Data Protection Compliance',
            'Digital Filing & Organization',
            'Document Retention Policies'
        ]
    },
    {
        title: 'Tech & Digital',
        icon: <Zap size={24} />,
        items: [
            'Google Workspace & Microsoft 365',
            'Workflow Automation (Zapier/Trello)',
            'Cloud File Management',
            'Expense Tracking & Invoicing',
            'CRM Maintenance'
        ]
    },
    {
        title: 'Global Connectivity',
        icon: <Globe size={24} />,
        items: [
            'Remote Team Coordination',
            'Time Zone Management',
            'Virtual Event Planning',
            'Travel Itineraries',
            'Cross-Cultural Communication'
        ]
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Services Offered</h2>
                    <p className={styles.subtitle}>
                        Comprehensive executive support tailored to streamline your business operations and maximize productivity.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <ul className={styles.list}>
                                {service.items.map((item, idx) => (
                                    <li key={idx} className={styles.listItem}>
                                        <span className={styles.bullet} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
