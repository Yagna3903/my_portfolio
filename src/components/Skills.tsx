"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiCloud, FiDatabase, FiMonitor, FiTrello } from "react-icons/fi";

const skills = [
    {
        category: "Languages & Frameworks",
        icon: <FiCode size={32} />,
        items: ["Java", "Python", "C", "C#", "Kotlin", "PHP", "JavaScript", "Angular", "Spring Boot", ".NET", "Ionic", "Nix", "Laravel"],
    },
    {
        category: "DevOps & Automation",
        icon: <FiServer size={32} />,
        items: ["Ansible", "Terraform", "Packer", "Docker", "Jenkins", "GitHub Actions", "REST APIs"],
    },
    {
        category: "Cloud & Tools",
        icon: <FiCloud size={32} />,
        items: ["AWS", "Azure", "GCP", "Microsoft 365", "Cisco Packet Tracer", "Wireshark", "VirtualBox", "Git", "Snipe-IT"],
    },
    {
        category: "Databases",
        icon: <FiDatabase size={32} />,
        items: ["MySQL", "PostgreSQL", "Oracle", "MongoDB", "Supabase", "SQL"],
    },
    {
        category: "Operating Systems",
        icon: <FiMonitor size={32} />,
        items: ["Windows", "macOS", "Linux (Ubuntu, NixOS)", "Android"],
    },
    {
        category: "Project Management",
        icon: <FiTrello size={32} />,
        items: ["Agile", "Scrum", "Jira", "Trello", "Figma", "Power BI"],
    },
];

export function Skills() {
    return (
        <section id="experience" className="py-20 px-6 bg-secondary/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-2">My Technical Toolkit</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Experience</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center hover:bg-white/40 dark:hover:bg-black/40 transition-colors"
                        >
                            <div className="mb-4 text-primary bg-primary/10 p-4 rounded-full">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                            <ul className="flex flex-wrap justify-center gap-2">
                                {skill.items.map((item) => (
                                    <li
                                        key={item}
                                        className="bg-background/50 border border-foreground/10 px-3 py-1 rounded-full text-sm font-medium"
                                    >
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
