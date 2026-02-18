'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './WorkSamples.module.css';



interface Project {
    title: string;
    description: string;
    image: string;
    content?: React.ReactNode;
}

const projects: Project[] = [
    {
        title: 'Digital Filing System',
        description: 'Reduced document retrieval time by 40% with a structured, rigorous cloud filing system.',
        image: '/samples/filing.png',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>The Challenge</h3>
                    <p>The client was facing significant delays in retrieving critical documents due to a disorganized file structure spread across local drives, email attachments, and physical cabinets. This led to wasted time and version control issues.</p>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Solution</h3>
                    <p>I implemented a comprehensive digital filing system using Google Drive, establishing a clear taxonomy and strict naming conventions.</p>

                    <h4>Key Actions Implemented:</h4>
                    <ul>
                        <li><strong>Standardized Naming Convention:</strong> Implemented a &quot;YYYY-MM-DD_Category_Description&quot; format for all files.</li>
                        <li><strong>Logical Folder Structure:</strong> Reorganized files into a Year &gt; Department &gt; Project hierarchy.</li>
                        <li><strong>Access Control:</strong> Defined role-based permissions to ensure data security and confidentiality.</li>
                        <li><strong>Digitization:</strong> Scanned and indexed over 300 physical records.</li>
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Results</h3>
                    <div className={styles.emailBlock} style={{ background: 'var(--surface)' }}>
                        <h4>Impact Highlights</h4>
                        <ul>
                            <li><strong>40% Reduction in Retrieval Time:</strong> Files can now be located in under 2 minutes.</li>
                            <li><strong>100% Data Accuracy:</strong> Eliminated duplicate files and version confusion.</li>
                            <li><strong>Seamless Onboarding:</strong> New team members can intuitively navigate the system without extensive training.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Executive Dashboards',
        description: 'Custom Excel dashboards for tracking KPIs, expenses, and travel schedules.',
        image: '/samples/dashboard.png',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>The Objective</h3>
                    <p>The executive team needed a real-time view of operational expenses and travel logistics, which were previously scattered across multiple spreadsheets and emails.</p>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Solution</h3>
                    <p>I designed a centralized, interactive Excel dashboard that improves visibility and decision-making.</p>

                    <h4>Dashboard Features:</h4>
                    <ul>
                        <li><strong>Expense Tracking:</strong> Categorized monthly spending with visual charts for quick analysis.</li>
                        <li><strong>Travel Itinerary Hub:</strong> A consolidated view of flights, hotels, and meeting schedules.</li>
                        <li><strong>KPI Operations:</strong> Automated calculations for project completion rates and budget variance.</li>
                        <li><strong>Conditional Formatting:</strong> Automated alerts for upcoming deadlines and budget overruns.</li>
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Impact</h3>
                    <p>This tool transformed raw data into actionable insights, allowing the executive team to make informed financial decisions and stay organized during travel without the need for constant status updates.</p>
                </div>
            </div>
        )
    },
    {
        title: 'Inbox Zero Strategy',
        description: 'Managed and organized 1000+ daily emails into actionable categories.',
        image: '/samples/inbox.png',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>The Challenge</h3>
                    <p>An overwhelmed inbox with 1000+ unread emails was causing missed opportunities and high stress levels. Critical client communications were burying under newsletters and internal notifications.</p>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Solution</h3>
                    <p>I executed a rigorous &quot;Inbox Zero&quot; strategy to regain control and maintain order.</p>

                    <h4>Strategy Executed:</h4>
                    <ul>
                        <li><strong>Triage & Archive:</strong> Mass-archived 1000+ old emails and unsubscribed from 50+ irrelevant newsletters.</li>
                        <li><strong>Filter Automation:</strong> Set up rules to automatically route invoices, newsletters, and notifications into specific folders.</li>
                        <li><strong>Labeling System:</strong> Created a &quot;Action Required&quot;, &quot;Reading&quot;, and &quot;Waiting On&quot; label system.</li>
                        <li><strong>Daily Routine:</strong> Established a twice-daily processing schedule to keep the inbox empty.</li>
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>The Results</h3>
                    <div className={styles.emailBlock} style={{ background: 'var(--surface)' }}>
                        <p>The client now starts every day with a clean slate. Important emails are responded to within 24 hours, and no critical communication is ever missed.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Executive Communication & Project Coordination',
        description: 'Professional email communication, meeting minutes, and executive briefing notes.',
        image: '/samples/executive_sample.png',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>SECTION A: Email Communication</h3>

                    <h4>Client Request Acknowledgement</h4>
                    <div className={styles.emailBlock}>
                        <div className={styles.emailMeta}>Subject: Re: Request for Weekly Project Status Update</div>
                        <p>Dear Project Manager,</p>
                        <p>Thank you for your message. I have received your request for the weekly project status update. I will compile progress highlights, outstanding tasks, and any identified risks, and share the update with you by Thursday afternoon.</p>
                        <p>Please let me know if you would prefer the update in slide format or as a written summary.</p>
                        <p>Kind regards,<br />Rahab Kamau</p>
                    </div>

                    <h4>Follow-Up Communication</h4>
                    <div className={styles.emailBlock}>
                        <div className={styles.emailMeta}>Subject: Follow-Up: Weekly Project Status Update</div>
                        <p>Dear Project Manager,</p>
                        <p>I hope you are doing well. I am writing to follow up on the project status update shared earlier today. Kindly confirm receipt and advise if any additional details or adjustments are required.</p>
                        <p>I look forward to your feedback.</p>
                        <p>Best regards,<br />Rahab Kamau</p>
                    </div>

                    <h4>Escalation Email</h4>
                    <div className={styles.emailBlock}>
                        <div className={styles.emailMeta}>Subject: Pending Input Required to Proceed with Project Tasks</div>
                        <p>Dear Project Manager,</p>
                        <p>I would like to flag that input from the marketing team is still pending for the content review task scheduled for this week. This input is required in order to proceed with the next phase of the project timeline.</p>
                        <p>Please advise on how you would like to proceed or if any prioritization support is required.</p>
                        <p>Thank you.</p>
                        <p>Sincerely,<br />Rahab Kamau</p>
                    </div>
                </div>

                <div className={styles.modalSection}>
                    <h3>SECTION B: Meeting Minutes & Action Tracker</h3>
                    <p><strong>Meeting:</strong> Weekly Project Coordination<br />
                        <strong>Date:</strong> 15 March 2026<br />
                        <strong>Attendees:</strong> Project Manager, Marketing Lead, Administrative Support</p>

                    <h4>Discussion Summary</h4>
                    <ul>
                        <li>Review of completed and outstanding tasks</li>
                        <li>Timeline impact caused by delayed dependencies</li>
                        <li>Gaps in cross-team communication</li>
                    </ul>

                    <h4>Agreed Actions</h4>
                    <ul>
                        <li>Introduce mid-week progress check-ins</li>
                        <li>Clarify ownership for all dependent tasks</li>
                        <li>Centralize updates using a shared tracker</li>
                    </ul>

                    <h4>Action Tracker</h4>
                    <table className={styles.actionTable}>
                        <thead>
                            <tr>
                                <th>Action Item</th>
                                <th>Owner</th>
                                <th>Deadline</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Update project tracker</td>
                                <td>Administrative Support</td>
                                <td>18 Mar 2026</td>
                                <td>In Progress</td>
                            </tr>
                            <tr>
                                <td>Submit marketing content</td>
                                <td>Marketing Lead</td>
                                <td>17 Mar 2026</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <td>Review revised timeline</td>
                                <td>Project Manager</td>
                                <td>20 Mar 2026</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><em>Notes: Action items are reviewed during weekly coordination meetings. Outstanding items are escalated where necessary to avoid timeline impact.</em></p>
                </div>

                <div className={styles.modalSection}>
                    <h3>SECTION C: Executive Briefing Note</h3>
                    <div className={styles.emailBlock} style={{ background: 'var(--surface)' }}>
                        <p><strong>To:</strong> Project Manager<br />
                            <strong>From:</strong> Administrative Support<br />
                            <strong>Subject:</strong> Project Progress Overview<br />
                            <strong>Date:</strong> 15 March 2026</p>

                        <h4>Overview</h4>
                        <p>Overall project progress remains on track. Most deliverables have been completed as scheduled, with minor delays linked to pending inputs from one department.</p>
                        <p>The introduction of mid-week check-ins has improved visibility into task dependencies and reduced turnaround time for follow-up items by approximately two days.</p>

                        <h4>Recommendations</h4>
                        <ul>
                            <li>Require task updates at least 24 hours ahead of deadlines</li>
                            <li>Continue mid-week coordination check-ins</li>
                            <li>Maintain clear accountability for all action items</li>
                        </ul>

                        <h4>Conclusion</h4>
                        <p>These measures are supporting more predictable delivery timelines and improving confidence in weekly reporting.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Executive Calendar Scheduling & Coordination',
        description: 'Complex diary management, meeting coordination, and logistical planning for executive teams.',
        image: '/samples/calendar.svg',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>Representative Weekly Schedule</h3>
                    <p>A snapshot of a typical week managing complex executive requirements, balancing operational meetings, strategic planning, and stakeholder coordination.</p>

                    <div className={styles.calendarGrid}>
                        {/* Monday */}
                        <div className={styles.calendarDay}>
                            <h4>Monday 2</h4>
                            <div className={`${styles.calendarEvent} ${styles.eventRed}`}>9am: Weekly Planning (Zoom)</div>
                            <div className={`${styles.calendarEvent} ${styles.eventYellow}`}>12pm: Lunch Break</div>
                            <div className={`${styles.calendarEvent} ${styles.eventOrange}`}>2pm: Work Plan Finalization</div>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>3:30pm: Update Task Tracker</div>
                        </div>

                        {/* Tuesday */}
                        <div className={styles.calendarDay}>
                            <h4>Tuesday 3</h4>
                            <div className={`${styles.calendarEvent} ${styles.eventGreen}`}>10am: Operations &amp; Progress</div>
                            <div className={`${styles.calendarEvent} ${styles.eventOrange}`}>12:30pm: Lunch Break</div>
                            <div className={`${styles.calendarEvent} ${styles.eventPurple}`}>2pm: Progress Data Collection</div>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>3:15pm: Corrective Action</div>
                        </div>

                        {/* Wednesday */}
                        <div className={styles.calendarDay}>
                            <h4>Wednesday 4</h4>
                            <div className={`${styles.calendarEvent} ${styles.eventCyan}`}>9am: Performance &amp; Issue</div>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>12pm: Lunch Break</div>
                            <div className={`${styles.calendarEvent} ${styles.eventGray}`}>1:45pm: Performance Analysis</div>
                            <div className={`${styles.calendarEvent} ${styles.eventPink}`}>4:30pm: Issue Resolution</div>
                        </div>

                        {/* Thursday */}
                        <div className={styles.calendarDay}>
                            <h4>Thursday 5</h4>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>11am: Stakeholder Coord.</div>
                            <div className={`${styles.calendarEvent} ${styles.eventPurple}`}>12pm: Break</div>
                            <div className={`${styles.calendarEvent} ${styles.eventPink}`}>2:15pm: Stakeholder Feed</div>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>3:30pm: Action Log Update</div>
                        </div>

                        {/* Friday */}
                        <div className={styles.calendarDay}>
                            <h4>Friday 6</h4>
                            <div className={`${styles.calendarEvent} ${styles.eventGreen}`}>8:30am: Weekly Performance</div>
                            <div className={`${styles.calendarEvent} ${styles.eventYellow}`}>10am: Zoom Meeting</div>
                            <div className={`${styles.calendarEvent} ${styles.eventGreen}`}>12pm: Break</div>
                            <div className={`${styles.calendarEvent} ${styles.eventRed}`}>1pm: Forward Planning</div>
                            <div className={`${styles.calendarEvent} ${styles.eventBlue}`}>3pm: Weekly Wrap-Up</div>
                        </div>
                    </div>
                </div>

                <div className={styles.modalSection}>
                    <h3>Impact</h3>
                    <div className={styles.emailBlock} style={{ background: 'var(--surface)' }}>
                        <p>Streamlined executive operations, reducing scheduling conflicts by 90% and saving approximately 10 hours of executive time per week.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Harnessing AI for Productivity, Collaboration & Well-being',
        description: 'Strategic analysis on leveraging AI to boost workplace efficiency while maintaining digital well-being.',
        image: '/samples/ai_productivity.svg',
        content: (
            <div>
                <div className={styles.modalSection}>
                    <h3>Introduction</h3>
                    <p>Artificial Intelligence (AI) is active reshaping how organizations work, communicate, and grow. From automating routine tasks to enabling personalized learning, AI promises efficiency and innovation. However, it also raises critical concerns around job security, privacy, and well-being. This paper explores the opportunities and challenges of AI in the workplace.</p>
                </div>

                <div className={styles.modalSection}>
                    <h3>Key Opportunities</h3>
                    <ul>
                        <li><strong>Boosting Productivity:</strong> Automating repetitive tasks allows employees to focus on creative and strategy work. Tools like Asana and UiPath streamline workflows.</li>
                        <li><strong>Enhancing Collaboration:</strong> AI-powered platforms like Teams Copilot and Slack AI improve communication through automated summaries and task tracking.</li>
                        <li><strong>Personalizing Work Experiences:</strong> Adaptive learning platforms (Coursera AI, LinkedIn Learning) tailor training to individual skills and career goals.</li>
                        <li><strong>Driving Innovation:</strong> Predictive analytics and deep customer insights enable faster, evidence-based decisions and effective campaigns.</li>
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>Challenges to Digital Well-being</h3>
                    <ul>
                        <li><strong>Job Insecurity:</strong> Automation anxiety requires large-scale reskilling initiatives.</li>
                        <li><strong>Privacy &amp; Trust:</strong> Extensive data collection threatens autonomy without clear governance.</li>
                        <li><strong>Blurred Boundaries:</strong> &quot;Always-on&quot; tools risk burnout; organizations must protect the right to disconnect.</li>
                    </ul>
                </div>

                <div className={styles.modalSection}>
                    <h3>Recommendations</h3>
                    <div className={styles.emailBlock} style={{ background: 'var(--surface)' }}>
                        <p><strong>Responsibility:</strong> Balance automation with human judgment and invest in digital literacy.</p>
                        <p><strong>Trust:</strong> Be transparent about AI tools and involve employees in selection.</p>
                        <p><strong>Sustainability:</strong> Provide structured change management and support work-life balance.</p>
                    </div>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.9rem' }}>Prepared by: Rahab Kamau</p>
                </div>
            </div>
        )
    }
];

import { useState } from 'react';

export default function WorkSamples() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
                            onClick={() => project.content && setSelectedProject(project)}
                            style={{ cursor: project.content ? 'pointer' : 'default' }}
                        >
                            <div className={styles.preview}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                                {project.content && (
                                    <div className={styles.overlay}>
                                        <span className={styles.viewButton}>View Case Study</span>
                                    </div>
                                )}
                            </div>

                            <div className={styles.info}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className={styles.modalCloseBtn}
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            <h2 className={styles.sectionTitle} style={{ marginBottom: '1rem' }}>
                                {selectedProject.title}
                            </h2>

                            <div className={styles.modalBody}>
                                {selectedProject.content}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
