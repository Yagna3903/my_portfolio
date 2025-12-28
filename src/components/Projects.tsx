"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { SpotlightCard } from "@/components/SpotlightCard";

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
                    <p className="text-xl text-primary font-medium tracking-wide mb-2">Featured Work</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Recent Projects</h2>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <SpotlightCard
                            key={index}
                            className="p-0 overflow-hidden rounded-xl"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 md:h-full bg-secondary/10 min-h-[300px] border-b md:border-b-0 md:border-r border-foreground/5 group overflow-hidden">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            unoptimized={project.isPlaceholder}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-foreground/20 font-bold text-xl">
                                            Coming Soon
                                        </div>
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent md:bg-linear-to-r" />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold tracking-wider text-primary uppercase mb-2 block">{project.role}</span>
                                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                    </div>

                                    <p className="text-foreground/70 leading-relaxed mb-8 grow">
                                        {project.desc}
                                    </p>

                                    <div className="space-y-6 mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/10 text-foreground/80"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group/link"
                                        >
                                            View Project <FiGithub className="group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
