"use client";

import Image from "next/image";
import profilePic from "@/assets/profile.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { MagneticButton } from "@/components/MagneticButton";

import { Scene } from "./3d/Scene";
import React from 'react';
import { useTheme } from "next-themes";

// Memoize Scene to prevent re-renders during typing effect
const MemoizedScene = React.memo(({ theme }: { theme: string | undefined }) => <Scene theme={theme} />);

export function Hero() {
    const [text, setText] = useState("");
    const fullText = "Yagna Patel";
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const targetRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    useEffect(() => {
        const handleTyping = () => {
            // loopNum not really used for array index here, just loop count
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
        <section ref={targetRef} id="about" className="min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden relative">
            <MemoizedScene theme={theme} />
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10 pointer-events-none">
                {/* Text Integration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 pointer-events-none"
                >
                    <p className="text-xl text-primary font-medium tracking-wide">Hello, I&apos;m</p>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading relative tracking-tight min-h-[1.2em] pointer-events-auto">

                        <span
                            className="relative inline-block hover:animate-pulse"
                            style={{
                                textShadow: "0px 0px 8px rgba(255,255,255,0.1)"
                            }}
                        >
                            {/* Base Text */}
                            <span className="relative z-10 bg-clip-text text-transparent bg-linear-to-r from-foreground via-foreground/90 to-foreground/70">
                                {text}
                            </span>

                            {/* Glitch Overlay (Pseudo-effect via layering) - Active when typing/full */}
                            <span
                                className="absolute top-0 left-0 -z-10 text-primary/20 opacity-0 animate-pulse transform translate-x-[2px]"
                            >
                                {text}
                            </span>
                            <span
                                className="absolute top-0 left-0 -z-10 text-secondary/20 opacity-0 animate-pulse transform -translate-x-[2px]"
                                style={{ animationDelay: "0.1s" }}
                            >
                                {text}
                            </span>
                        </span>

                        {/* Cursor */}
                        <span className="w-1 h-12 ml-1 bg-linear-to-b from-primary to-transparent inline-block animate-pulse align-middle rounded-full" />
                    </h1>
                    <p className="text-2xl text-foreground/60 font-light max-w-lg">
                        Computer Systems Technology Student at Sheridan College
                    </p>

                    <div className="flex gap-4 pt-4 pointer-events-auto">
                        <MagneticButton>
                            <a
                                href="/assets/Yagna_Patel_Resume.pdf"
                                target="_blank"
                                className="px-8 py-3 rounded-full bg-foreground text-background font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                Download Resume <FiDownload />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full border-2 border-foreground text-foreground font-semibold hover:bg-foreground hover:text-background transition-colors flex items-center"
                            >
                                Contact Info
                            </a>
                        </MagneticButton>
                    </div>

                    <div className="flex gap-6 pt-4 pointer-events-auto">
                        <MagneticButton>
                            <a href="https://linkedin.com/in/yagna--patel" target="_blank" rel="noreferrer" className="block p-2 transform hover:-translate-y-1 transition-transform">
                                <FiLinkedin size={32} />
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="https://github.com/Yagna3903" target="_blank" rel="noreferrer" className="block p-2 transform hover:-translate-y-1 transition-transform">
                                <FiGithub size={32} />
                            </a>
                        </MagneticButton>
                    </div>
                </motion.div>

                {/* Parallax Image */}
                <motion.div
                    style={{ y, opacity }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2 flex justify-center pointer-events-none"
                >
                    <div className="pointer-events-auto">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                            <div className="absolute inset-0 rounded-full bg-linear-to-tr from-primary to-secondary blur-2xl opacity-50 animate-pulse group-hover:blur-3xl transition-all duration-500" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
                                <Image
                                    src={profilePic}
                                    alt="Yagna Patel"
                                    fill
                                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
