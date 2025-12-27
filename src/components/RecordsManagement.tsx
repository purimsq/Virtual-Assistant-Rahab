'use client';

import { motion } from 'framer-motion';
import { FileText, Shield, Mail, Database, FolderOpen, Archive, ClipboardList, CheckCircle, BrainCircuit } from 'lucide-react';
import styles from './RecordsManagement.module.css';

const duties = [
    {
        title: "Document Sorting & Classification",
        icon: <FolderOpen size={20} className="text-emerald-500" />,
        items: [
            "Organizing documents for filing and ensuring they are properly indexed."
        ]
    },
    {
        title: "File Maintenance & Updating",
        icon: <FileText size={20} className="text-emerald-500" />,
        items: [
            "Opening, controlling, and updating file indexes.",
            "Keeping accurate file movement records to track usage."
        ]
    },
    {
        title: "Security & Confidentiality",
        icon: <Shield size={20} className="text-emerald-500" />,
        items: [
            "Ensuring the security of sensitive information and records in registries or archives."
        ]
    },
    {
        title: "Mail & Correspondence Handling",
        icon: <Mail size={20} className="text-emerald-500" />,
        items: [
            "Receiving, sorting, opening, and dispatching mail.",
            "Maintaining registers for incoming and outgoing correspondence."
        ]
    },
    {
        title: "Digitization & Archiving",
        icon: <Database size={20} className="text-emerald-500" />,
        items: [
            "Converting physical documents into digital formats for circulation and long-term storage."
        ]
    },
    {
        title: "Report Writing",
        icon: <ClipboardList size={20} className="text-emerald-500" />,
        items: [
            "Compiling data and drafting reports on record usage and file movement.",
            "Preparing monthly or quarterly departmental performance reports."
        ]
    },
    {
        title: "Digital Compliance & Auditing",
        icon: <CheckCircle size={20} className="text-emerald-500" />,
        items: [
            "Conducting regular audits to ensure files meet legal and regulatory standards.",
            "Implementing data retention and disposal policies."
        ]
    },
    {
        title: "Knowledge Management",
        icon: <BrainCircuit size={20} className="text-emerald-500" />,
        items: [
            "Facilitating information flow within the organization for better decision-making.",
            "Creating guides and protocols for efficient information retrieval."
        ]
    },
    {
        title: "Registry Management",
        icon: <Archive size={20} className="text-emerald-500" />,
        items: [
            "Heading a registry in ministries, departments, or organizations.",
            "Ensuring cleanliness, order, and accessibility of records."
        ]
    }
];

const responsibilities = [
    { area: "Filing & Indexing", tasks: "Classify documents, update personnel records, maintain file indexes" },
    { area: "Security & Compliance", tasks: "Safeguard confidential files, ensure compliance with record-keeping policies" },
    { area: "Mail Management", tasks: "Receive, sort, and dispatch mail; maintain registers" },
    { area: "Digitization", tasks: "Scan and archive documents electronically" },
    { area: "Registry Oversight", tasks: "Supervise registry staff, ensure proper file movement tracking" },
    { area: "Accessibility", tasks: "Provide records to authorized officers promptly" },
];

export default function RecordsManagement() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.title}>Key Duties of a Records Management Officer</h2>

                    <div className={styles.grid}>
                        {duties.map((duty, index) => (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.cardTitle}>
                                    {duty.icon}
                                    {duty.title}
                                </div>
                                <ul className={styles.cardList}>
                                    {duty.items.map((item, idx) => (
                                        <li key={idx} className={styles.cardListItem}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <h3 className={styles.tableTitle}>Responsibilities in Practice</h3>

                    <div className={styles.tableWrapper}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Responsibility Area</th>
                                    <th>Tasks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {responsibilities.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.area}</td>
                                        <td>{row.tasks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
