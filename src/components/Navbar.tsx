"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from "react-icons/fi";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certification", href: "#certification" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Prevent hydration mismatch
    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/5 dark:bg-black/5 backdrop-blur-3xl backdrop-saturate-200 border-b border-white/20 dark:border-white/5 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary hover:opacity-80 transition-opacity"
                >
                    Yagna Patel
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="relative text-foreground/80 hover:text-foreground transition-colors font-medium group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary transition-all group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 border-l border-foreground/10 pl-6">
                        {/* Socials Mini */}
                        <div className="flex gap-3">
                            <a href="https://github.com/Yagna3903" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                                <FiGithub size={20} />
                            </a>
                            <a href="https://linkedin.com/in/yagna--patel" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                                <FiLinkedin size={20} />
                            </a>
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full hover:bg-foreground/5 transition-colors text-foreground"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-full hover:bg-foreground/5 transition-colors"
                    >
                        {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-foreground"
                        aria-label="Menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/20 dark:bg-black/20 backdrop-blur-3xl backdrop-saturate-200 border-t border-white/20 dark:border-white/5 overflow-hidden"
                    >
                        <ul className="flex flex-col p-6 gap-4 items-center">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
