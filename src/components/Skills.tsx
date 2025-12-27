"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";
import {
    SiAmazon, SiTerraform, SiDocker, SiKubernetes,
    SiReact, SiTypescript, SiPython, SiPostgresql,
    SiLinux, SiNodedotjs, SiNextdotjs, SiGit
} from "react-icons/si";
import { Fragment } from "react";

const eliteSkills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Linux", icon: SiLinux, color: "#FCC624" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Git", icon: SiGit, color: "#F05032" },
];

function SkillCard({ skill }: { skill: any }) {
    return (
        <SpotlightCard
            // THEME MATCHING:
            // Sizing: w-[240px] (Mobile) / w-[280px] (Desktop) - Standard, consistent size.
            // Styles: Copied EXACTLY from Experience.tsx (border-black/5, dark:border-white/5, etc.)
            className="w-[200px] md:w-[280px] h-[90px] md:h-[110px] shrink-0 flex-none p-4 md:p-6 flex items-center gap-4 md:gap-5 text-left group border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm hover:border-primary/20 transition-all rounded-xl hover:shadow-md"
            style={{
                // @ts-ignore
                "--hover-color": skill.color
            }}
        >
            {/* Subtle Hover Glow to match "Little Colourful" request without breaking theme */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                    boxShadow: `inset 0 0 20px ${skill.color}15`,
                    borderColor: `${skill.color}50`
                }}
            />

            {/* Icon Box */}
            <div className="relative z-10 shrink-0 p-2 rounded-lg bg-secondary/5 group-hover:bg-transparent transition-colors">
                <skill.icon
                    className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }} // Always show brand color for "Little Colourful"
                />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center">
                {/* Name - Theme Font */}
                <h3 className="font-bold text-base md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                    {skill.name}
                </h3>
            </div>
        </SpotlightCard>
    );
}

function Marquee({ items, speed = 100 }: { items: any[], speed?: number }) {
    return (
        <div className="flex overflow-hidden relative w-full py-20 md:py-32">
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
                            {/* THE SPACER: 32px Mobile / 96px Desktop */}
                            <div className="shrink-0 w-8 md:w-32" />
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
                            {/* THE SPACER: 32px Mobile / 96px Desktop */}
                            <div className="shrink-0 w-8 md:w-32" />
                        </Fragment>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
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
