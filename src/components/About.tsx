"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const experience = [
    { role: "IT Infrastructure Analyst (PT)", company: "Sheridan College" },
    { role: "IT Infrastructure & DevOps Co-op", company: "Sheridan College" },
    { role: "Associate Technical Consultant Co-op", company: "MindQuad Solutions" },
    { role: "Full-Stack Developer Co-op", company: "Samskrita Bharati" },
];

export function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-2">Get To Know More</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-3xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-full bg-primary/10 text-primary">
                                <FiBriefcase size={24} />
                            </div>
                            <h3 className="text-2xl font-bold">Experience</h3>
                        </div>
                        <ul className="space-y-4">
                            {experience.map((job, index) => (
                                <li key={index} className="flex flex-col">
                                    <span className="font-semibold text-lg">{job.role}</span>
                                    <span className="text-foreground/60 italic">{job.company}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Education & Bio Card */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-8 rounded-3xl"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                                    <FiBook size={24} />
                                </div>
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">Computer Systems Technology</p>
                                <p className="text-foreground/60">Information Systems Engineering</p>
                                <p className="text-primary mt-1 font-medium">Sheridan College</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-8 rounded-3xl"
                        >
                            <p className="text-lg leading-relaxed text-foreground/80">
                                Hi, I&apos;m <span className="text-primary font-semibold">Yagna Patel</span>.
                                I&apos;m a student with a passion for technology, problem-solving, and continuous learning.
                                My experience spans software development, web applications, system automation, cloud technologies, and AI/ML.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
