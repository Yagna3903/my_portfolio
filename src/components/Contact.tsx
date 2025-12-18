"use client";

import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-12">
                    <p className="text-primary font-medium mb-2">Get in Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Contact Me</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <motion.a
                        href="mailto:yagna.pattel@gmail.com"
                        whileHover={{ y: -5 }}
                        className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all"
                    >
                        <div className="p-3 bg-foreground text-background rounded-full">
                            <FiMail size={24} />
                        </div>
                        <span className="text-lg font-medium">yagna.pattel@gmail.com</span>
                    </motion.a>

                    <motion.a
                        href="https://www.linkedin.com/in/yagna--patel"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5 }}
                        className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all"
                    >
                        <div className="p-3 bg-foreground text-background rounded-full">
                            <FiLinkedin size={24} />
                        </div>
                        <span className="text-lg font-medium">LinkedIn</span>
                    </motion.a>

                    <motion.a
                        href="https://github.com/Yagna3903"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ y: -5 }}
                        className="glass-card px-8 py-6 rounded-2xl flex items-center gap-4 hover:shadow-lg transition-all"
                    >
                        <div className="p-3 bg-foreground text-background rounded-full">
                            <FiGithub size={24} />
                        </div>
                        <span className="text-lg font-medium">GitHub</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
