"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useTheme } from "next-themes";
import {
    SiAmazon, SiTerraform, SiDocker, SiKubernetes,
    SiReact, SiTypescript, SiPython, SiPostgresql,
    SiLinux, SiNodedotjs, SiNextdotjs, SiGit,
    SiSharp, SiCplusplus, SiJira, SiApachehadoop,
    SiApachehive, SiApachespark, SiAnsible, SiJenkins
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Fragment, useEffect, useState } from "react";

const eliteSkills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: SiSharp, color: "#512BD4" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
    { name: "Hive", icon: SiApachehive, color: "#FDEE21" },
    { name: "Jira", icon: SiJira, color: "#0052CC" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Git", icon: SiGit, color: "#F05032" },
];

function SkillCard({ skill }: { skill: any }) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Dynamic color logic for Next.js visibility
    const effectiveColor = (mounted && skill.name === "Next.js" && resolvedTheme === "dark")
        ? "#FFFFFF"
        : skill.color;

    return (
        <SpotlightCard
            // THEME MATCHING:
            // Sizing: w-auto (Variable). h-[90px] (Desktop).
            // Layout: Vertical (flex-col) + Centered.
            // Colors: Light(White/50 + Neutral-400), Dark(Neutral-900 - Solid Dark Plate).
            // Hover: Dynamic Brand Color Glow + Lively Tint.
            className="w-auto h-[80px] md:h-[90px] shrink-0 flex-none px-6 md:px-8 text-center group transition-all duration-300 rounded-xl hover:-translate-y-1 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                borderColor: effectiveColor,
                boxShadow: `0 10px 30px -10px ${effectiveColor}50`
            }}
            style={{
                // @ts-ignore
                "--skill-color": effectiveColor,
                "--spotlight-color": effectiveColor
            }}
        >
            {/* Content Wrapper for Proper Centering & Z-Index */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 relative z-10">
                {/* Icon - Standalone, Centered, Smaller */}
                <skill.icon
                    className="w-6 h-6 md:w-8 md:h-8 shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: effectiveColor }} // Always show brand color for "Little Colourful"
                />

                {/* Removing flex-1 to pack content in center */}
                <div className="flex flex-col justify-center min-w-0">
                    {/* Name - Theme Font */}
                    <h3 className="font-bold text-xs md:text-sm tracking-tight text-foreground group-hover:text-[var(--skill-color)] transition-colors duration-300 truncate">
                        {skill.name}
                    </h3>
                </div>
            </div>
        </SpotlightCard>
    );
}

function Marquee({ items, speed = 100 }: { items: any[], speed?: number }) {
    return (
        <div className="flex overflow-hidden relative w-full py-10 md:py-16">
            {/* Gradients - Standard Size */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-(--background) to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-(--background) to-transparent z-20 pointer-events-none" />

            <div className="flex shrink-0 min-w-full">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: speed * 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex shrink-0 items-center"
                >
                    {/* PHYSICAL SEPARATION STRATEGY: */}
                    {/* We map each item AND a transparent spacer div. */}
                    {/* This guarantees separation that flex-gap sometimes ignores in marquees. */}
                    {items.map((skill, i) => (
                        <Fragment key={`items1-${i}`}>
                            <SkillCard skill={skill} />
                            {/* THE SPACER: 8px Mobile / 32px Desktop */}
                            <div className="shrink-0 w-2 md:w-8" />
                        </Fragment>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        duration: speed * 2,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex shrink-0 items-center"
                >
                    {items.map((skill, i) => (
                        <Fragment key={`items2-${i}`}>
                            <SkillCard skill={skill} />
                            {/* THE SPACER: 8px Mobile / 32px Desktop */}
                            <div className="shrink-0 w-2 md:w-8" />
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
            {/* Ambient Glow similar to Experience */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none opacity-60" />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
                {/* HEADER - EXACT COPY of Experience.tsx Typography */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-xl text-primary font-medium tracking-wide mb-3">Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Core Stack</h2>
                </div>
            </div>

            {/* Marquee Container - FULL WIDTH, OUTSIDE CONTAINER */}
            <div className="relative z-10 w-full">
                <Marquee items={eliteSkills} speed={60} />
            </div>
        </section>
    );
}
