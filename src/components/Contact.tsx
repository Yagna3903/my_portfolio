"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { SpotlightCard } from "@/components/SpotlightCard";

export function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <p className="text-primary font-medium mb-2">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Contact Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Email */}
                    <a href="mailto:yagna.pattel@gmail.com" className="block h-full">
                        <SpotlightCard className="h-full px-6 py-12 flex flex-col items-center justify-center gap-6 rounded-2xl transition-all hover:-translate-y-2 group border border-neutral-200 dark:border-neutral-800">
                            <FiMail size={48} className="text-foreground/80 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]" />
                            <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">Email Me</span>
                        </SpotlightCard>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/yagna--patel" target="_blank" rel="noreferrer" className="block h-full">
                        <SpotlightCard className="h-full px-6 py-12 flex flex-col items-center justify-center gap-6 rounded-2xl transition-all hover:-translate-y-2 group border border-neutral-200 dark:border-neutral-800">
                            <FiLinkedin size={48} className="text-foreground/80 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]" />
                            <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">LinkedIn</span>
                        </SpotlightCard>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/Yagna3903" target="_blank" rel="noreferrer" className="block h-full">
                        <SpotlightCard className="h-full px-6 py-12 flex flex-col items-center justify-center gap-6 rounded-2xl transition-all hover:-translate-y-2 group border border-neutral-200 dark:border-neutral-800">
                            <FiGithub size={48} className="text-foreground/80 group-hover:text-primary transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]" />
                            <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">GitHub</span>
                        </SpotlightCard>
                    </a>
                </div>
            </div>
        </section>
    );
}
