"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "Yagna Patel";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % 1; // Only one string for now, but extensible
            // const currentString = fullText; 

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(100);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 3000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Text Integration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
                >
                    <p className="text-xl text-primary font-medium tracking-wide">Hello, I&apos;m</p>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading">
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
                            {text}
                        </span>
                        <span className="w-1 h-12 ml-1 bg-primary inline-block animate-pulse align-middle" />
                    </h1>
                    <p className="text-2xl text-foreground/60 font-light max-w-lg">
                        Computer Systems Technology Student at Sheridan College
                    </p>

                    <div className="flex gap-4 pt-4">
                        <motion.a
                            href="/assets/Yagna_Patel_Resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-foreground text-background font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        >
                            Download Resume <FiDownload />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors"
                        >
                            Contact Info
                        </motion.a>
                    </div>

                    <div className="flex gap-6 pt-4">
                        <a href="https://linkedin.com/in/yagna--patel" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 transition-transform">
                            <FiLinkedin size={32} />
                        </a>
                        <a href="https://github.com/Yagna3903" target="_blank" rel="noreferrer" className="transform hover:-translate-y-1 transition-transform">
                            <FiGithub size={32} />
                        </a>
                    </div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-secondary blur-2xl opacity-50 animate-pulse" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            <Image
                                src="/assets/profile.jpg"
                                alt="Yagna Patel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
