"use client";

import { motion } from "framer-motion";
import { FiBook } from "react-icons/fi";
import { SpotlightCard } from "@/components/SpotlightCard";

export function About() {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xl text-primary font-medium tracking-wide mb-2">Get To Know More</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">About Me</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Bio Column - Spans 2 columns */}
                    <div className="md:col-span-2">
                        <SpotlightCard className="p-8 h-full flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="text-primary">01.</span> Who I Am
                                </h3>
                                <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                                    Hi, I&apos;m <span className="text-primary font-semibold">Yagna Patel</span>.
                                    I&apos;m a student with a passion for technology, problem-solving, and continuous learning.
                                    My experience spans software development, web applications, system automation, cloud technologies, and AI/ML.
                                </p>
                                <p className="text-lg leading-relaxed text-foreground/80">
                                    I enjoy collaborating with others, embracing new challenges, and writing clean, thoughtful code that makes a difference.
                                </p>
                            </motion.div>
                        </SpotlightCard>
                    </div>

                    {/* Education Column */}
                    <div className="md:col-span-1">
                        <SpotlightCard className="p-8 h-full flex flex-col justify-center bg-secondary/5 border-primary/20">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                                        <FiBook size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold">Education</h3>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-lg">Sheridan College</p>
                                        <p className="text-sm text-foreground/60 italic">2022 - 2025</p>
                                    </div>
                                    <div>
                                        <p className="text-primary font-medium">Computer Systems Technology</p>
                                        <p className="text-sm text-foreground/70">Information Systems Engineering</p>
                                    </div>
                                </div>
                            </motion.div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
