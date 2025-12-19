"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SpotlightCard } from "@/components/SpotlightCard";

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
        image: "/assets/github-foundations.png",
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

                <div className="flex flex-wrap justify-center gap-12">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SpotlightCard className="p-6 flex flex-col items-center gap-4 cursor-pointer bg-white dark:bg-black/40">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <div className="relative w-40 h-40">
                                        <Image
                                            src={cert.image}
                                            alt={cert.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-bold text-lg">{cert.title}</h3>
                                        <p className="text-sm text-foreground/60">{cert.issuer} • {cert.date}</p>
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
