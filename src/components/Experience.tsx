"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "@/components/SpotlightCard";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experience = [
    {
        role: "IT Infrastructure Analyst (PT)",
        company: "Sheridan College - FAST",
        location: "Oakville, ON",
        date: "Sep 2025 – Present",
        points: [
            "Streamlined infrastructure and deployments with Terraform and Ansible, cutting setup time by 30%",
            "Configured and streamlined vSphere servers for Big Data labs, enhancing performance for 91+ students",
            "Refined NixOS lab environments in VirtualBox, increasing system stability and speed",
            "Tracked 300+ Raspberry Pi devices in Snipe-IT for precise asset lifecycle management"
        ]
    },
    {
        role: "IT Infrastructure & DevOps Co-op",
        company: "Sheridan College – FAST",
        location: "Oakville, ON",
        date: "Apr 2025 - Aug 2025",
        points: [
            "Engineered provisioning pipelines with Terraform and Ansible, reducing setup time by 50%",
            "Configured NixOS systems in VirtualBox to support internal development environments",
            "Created base Packer images for standardized lab setups, enhancing reliability by 20%",
            "Documented configuration procedures, reducing onboarding and environment setup time by 25%"
        ]
    },
    {
        role: "Associate Technical Consultant Co-op",
        company: "MindQuad Solutions Pvt Ltd",
        location: "Remote",
        date: "Sep 2024 – Dec 2024",
        points: [
            "Partnered with 7+ clients to design and deploy customized ERP workflows and reports",
            "Implemented and fine-tuned modules in AL, C/AL, and VS Code, achieving 95% client satisfaction",
            "Rolled out 10+ solutions, boosting reliability by 35% and reducing post-release issues by 20%"
        ]
    },
    {
        role: "Full-Stack Developer Co-op",
        company: "Samskrita Bharati",
        location: "Mississauga, ON",
        date: "Jan 2024 – Apr 2024",
        points: [
            "Resolved 50+ high-priority bugs, enhancing UX and increasing site traffic by 30%",
            "Built two 2D games with ReactJS and Tailwind CSS, driving engagement up by 20%",
            "Streamlined deployment with cPanel, reducing release time by 15% and strengthening stability"
        ]
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 px-6 overflow-hidden relative">
            {/* Background glow for ambience */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-xl text-primary font-medium tracking-wide mb-3">My Professional Journey</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Work History</h2>
                </div>

                <div className="relative">
                    {/* Mobile Timeline Line (Left aligned) */}
                    <div className="block md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-primary/50 to-transparent" />

                    {/* Desktop Vertical Line (Center aligned) */}
                    <div className="md:w-0.5 md:h-full hidden md:block w-0.5 bg-linear-to-b from-transparent via-primary/50 to-transparent transform -translate-x-1/2 absolute left-1/2 top-0 bottom-0" />

                    <div className="space-y-12 md:space-y-16">
                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center relative pl-12 md:pl-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Mobile Date/Timeline Point */}
                                <div className="md:hidden absolute left-[11px] top-8 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.6)] z-10">
                                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                                </div>

                                {/* Desktop Date/Timeline Point */}
                                <div className="hidden md:flex flex-col items-center justify-center w-8 shrink-0 relative z-10">
                                    <div className="w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.6)] relative">
                                        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-75" />
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-2.5rem)]">
                                    <SpotlightCard className="p-6 md:p-8 relative group hover:border-primary/20 transition-all rounded-xl">
                                        <div className="flex flex-col gap-4">
                                            {/* Header */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <span className="text-sm font-bold tracking-wider text-primary uppercase">{job.company}</span>
                                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 whitespace-nowrap">{job.date}</span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold">{job.role}</h3>
                                                <span className="text-sm text-foreground/50 flex items-center gap-1">
                                                    <FiBriefcase className="w-3 h-3" /> {job.location}
                                                </span>
                                            </div>

                                            {/* Points */}
                                            <ul className="space-y-3 text-foreground/80 leading-relaxed text-sm md:text-[15px]">
                                                {job.points.map((point, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                        <span className="flex-1">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </SpotlightCard>
                                </div>
                                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
