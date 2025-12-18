"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";

const projects = [
    {
        title: "Coming Soon",
        role: "Coming Soon",
        duration: "Coming Soon",
        desc: "Coming Soon",
        tech: ["Coming soon"],
        link: "https://github.com/Yagna3903/sugar-cubed-creation",
        image: "",
        isPlaceholder: true,
    },
    {
        title: "CloudLAMP Automation",
        role: "Cloud + LAMP stack + DevOps",
        duration: "Aug 2025",
        desc: "Built a 1-click AWS deployment pipeline with Terraform and Ansible, automating cloud infrastructure and LAMP stack setup with CI/CD integration.",
        tech: ["AWS", "Terraform", "Ansible", "LAMP", "Automation"],
        link: "https://github.com/Yagna3903/CloudLAMP-Automation",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*vN86lZCAdr3RDSXc0cuHcA.jpeg",
    },
    {
        title: "Ansible DevOps ToolBox",
        role: "Automation Project",
        duration: "July 2025 - Aug 2025",
        desc: "Built a production-grade Ansible framework with modular roles, environment-specific inventories, and DevOps best practices.",
        tech: ["Ansible", "DevOps", "Linux", "Nginx", "Automation"],
        link: "https://github.com/Yagna3903/ansible-devops-toolbox",
        image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/08/Untitled-design-2.png",
    },
    {
        title: "CareerCraft AI",
        role: "Full-Stack AI Web Application",
        duration: "Mar 2025",
        desc: "Developed a full-stack AI MVP in 36 hours for BearHacks. Focused on innovative solutions and rapid prototyping.",
        tech: ["Python", "API Keys", "Supabase", "ReactJS"],
        link: "https://github.com/Yagna3903/Hackathon-Bearhacks.git",
        image: "/assets/project1.webp",
    },
    {
        title: "Highlander Simulator",
        role: "Simulation Tool",
        duration: "Aug 2024",
        desc: "Created a simulation tool to model and analyze scenarios for process optimization. Emphasized clean code and actionable insights.",
        tech: ["C#", ".Net", "Figma", "MySQL"],
        link: "https://github.com/Yagna3903/Highlander-Simulator",
        image: "/assets/project 2.png",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-2">Browse My Recent</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card rounded-3xl overflow-hidden flex flex-col"
                        >
                            <div className="relative h-48 w-full bg-secondary/10">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        unoptimized={project.isPlaceholder}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-foreground/20 font-bold text-xl">
                                        Coming Soon
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <span className="text-xs font-medium text-primary mb-2 line-clamp-1">{project.role}</span>
                                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-md bg-foreground/5 text-foreground/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-full py-2 rounded-xl bg-foreground text-background font-medium text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                                >
                                    <FiGithub /> GitHub
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
