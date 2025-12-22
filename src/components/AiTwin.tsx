"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiCpu } from "react-icons/fi";

interface Message {
    id: string;
    text: string;
    sender: "user" | "bot";
}

export function AiTwin() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", text: "Hello! I'm Yagna's AI Digital Twin. Ask me anything about his skills, projects, or experience!", sender: "bot" }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: input, sender: "user" };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulated AI Response Logic
        setTimeout(() => {
            const response = generateResponse(userMsg.text);
            const botMsg: Message = { id: (Date.now() + 1).toString(), text: response, sender: "bot" };
            setMessages(prev => [...prev, botMsg]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-80 md:w-96 h-[400px] bg-background/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-primary/10 border-b border-primary/10 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                    <FiCpu size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Yagna AI</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] text-foreground/60">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={toggleOpen} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                                <FiX />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                            ? "bg-primary text-white rounded-br-sm"
                                            : "bg-secondary/10 border border-secondary/10 text-foreground rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-white/5 bg-background/50">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask about AWS, React, etc..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
                                >
                                    <FiSend />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={toggleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/50 flex items-center justify-center transition-all"
            >
                {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
            </motion.button>
        </div>
    );
}

// Simple Intent Matching Logic
function generateResponse(input: string): string {
    const lower = input.toLowerCase();

    if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I help you today?";
    if (lower.includes("aws") || lower.includes("cloud")) return "Yagna is an AWS Cloud Practitioner! He has experience deploying scalable architectures using EC2, S3, and VPCs. Check out the 'CloudLAMP' project!";
    if (lower.includes("react") || lower.includes("frontend")) return "Yagna builds modern UIs with React and Next.js, focusing on performance and animations (like this portfolio!).";
    if (lower.includes("devops") || lower.includes("ci/cd")) return "DevOps is his passion. He uses Terraform for IaC, Ansible for config management, and GitHub Actions for pipelines.";
    if (lower.includes("contact") || lower.includes("email")) return "You can reach him via the Contact form below, or connect on LinkedIn!";
    if (lower.includes("experience") || lower.includes("work")) return "He has experience as an IT Infrastructure Analyst, working with VMware, Linux servers, and enterprise networking.";

    return "This is a simulated AI Twin. I'm not sure about that specific detail, but check out his Resume in the Hero section!";
}
