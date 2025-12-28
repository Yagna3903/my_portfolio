"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SpotlightCard } from "@/components/SpotlightCard";
import { cn } from "@/lib/utils";

import githubBadge from "@/assets/github-foundations.png";

const certs = [
    {
        title: "AWS Cloud Practitioner",
        issuer: "AWS",
        date: "Aug 2025",
        link: "https://www.credly.com/badges/5af3907e-75a5-478d-88d9-19e9e283747c/public_url",
        image: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
    },
    {
        title: "OCI Foundations Associate",
        issuer: "Oracle",
        date: "Jul 2025",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D129519F5F0E59DAB0C3A40A51151CD65E85E25306E0343C2B418F7C95F2777D",
        image: "https://brm-workforce.oracle.com/pdf/certview/images/OCI25FNDCFAV1.png",
    },
    {
        title: "GitHub Foundations",
        issuer: "GitHub",
        date: "Jun 2025",
        link: "https://www.credly.com/badges/e89a53f3-a99d-41f8-8e3c-7fce246e7f29/public_url",
        image: githubBadge,
    },
];

export function Certification() {
    return (
        <section id="certification" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-2">My Achievements</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block h-full"
                        >
                            <SpotlightCard className="h-full p-8 flex flex-col items-center gap-4 cursor-pointer rounded-xl transition-all hover:-translate-y-2">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center gap-4 w-full h-full justify-between"
                                >
                                    <div className={cn(
                                        "relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center",
                                        cert.issuer === "Oracle" ? "scale-200" : ""
                                    )}>
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain drop-shadow-xl"
                                        />
                                    </div>
                                    <div className="text-center mt-auto">
                                        <h3 className="font-bold text-xl mb-2">{cert.title}</h3>
                                        <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                                        <p className="text-xs text-foreground/50">{cert.date}</p>
                                    </div>
                                </motion.div>
                            </SpotlightCard>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
