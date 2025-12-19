"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
    SiAmazon,
    SiTerraform,
    SiAnsible,
    SiDocker,
    SiKubernetes,
    SiVmware,
    SiLinux,
    SiNixos,
    SiGithubactions,
    SiJenkins,
    SiGit,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiPostgresql
} from "react-icons/si";

const skills = [
    { name: "AWS", icon: SiAmazon, color: "#FF9900", desc: "Cloud Foundation" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC", desc: "Infrastructure as Code" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000", desc: "Config Management" },
    { name: "Docker", icon: SiDocker, color: "#2496ED", desc: "Containerization" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", desc: "Orchestration" },
    { name: "vSphere", icon: SiVmware, color: "#6DA55F", desc: "Virtualization" },
    { name: "Linux", icon: SiLinux, color: "#FCC624", desc: "Systems Engineering" },
    { name: "NixOS", icon: SiNixos, color: "#5277C3", desc: "Reproducible Systems" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF", desc: "CI/CD Pipelines" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939", desc: "Automation Server" },
    { name: "Git", icon: SiGit, color: "#F05032", desc: "Version Control" },
    { name: "Python", icon: SiPython, color: "#3776AB", desc: "Automation & AI" },
    { name: "React", icon: SiReact, color: "#61DAFB", desc: "Frontend UI" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", desc: "Full Stack Framework" }, // Next.js color logic handled in rendering
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", desc: "Type Safety" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", desc: "Relational Data" },
];

export function Skills() {
    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
            {/* Background glow for ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <p className="text-xl text-primary font-medium tracking-wide mb-3">My Arsenal</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Technical Toolkit</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <SpotlightCard
                            key={index}
                            className="p-6 h-full flex flex-col items-center justify-center gap-4 text-center group border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 transition-all duration-300"
                            style={{
                                // @ts-ignore
                                "--hover-color": skill.color
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-4 relative z-10"
                            >
                                <div
                                    className="p-4 rounded-2xl bg-white/5 text-foreground group-hover:bg-white/10 transition-colors duration-300 relative"
                                >
                                    {/* Glow effect on hover */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                    <skill.icon
                                        size={40}
                                        className="relative z-10 transition-colors duration-300 group-hover:text-(--hover-color)"
                                        style={{ color: 'inherit' }}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold mb-1">{skill.name}</h3>
                                    <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider">{skill.desc}</p>
                                </div>
                            </motion.div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
