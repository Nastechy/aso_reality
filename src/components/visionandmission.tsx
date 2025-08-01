"use client";

import React, { useRef } from "react";
import { motion, useInView, easeInOut, Easing } from "framer-motion";

interface SectionData {
    id: string;
    title: string;
    content: string;
    icon: React.ReactNode;
}

// Define custom cubic bezier for ease (typed as Easing)
const customEase: Easing = [0.25, 0.25, 0.25, 0.75];

const VisionMissionComponent: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const sections: SectionData[] = [
        {
            id: "mission",
            title: "Our Mission",
            content:
                "To be the trusted cornerstone for investors both at home and abroad, transforming dreams into tangible realities. We pioneer estates that secure generational wealth for our clients. We are committed to crafting not just properties, but legacies, ensuring everyone finds a place they can proudly call home in Nigeria, regardless of their current location.",
            icon: (
                <svg className="w-12 h-12 text-[#981314]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 11 1.09-.87 2.02-1.99 2.5-3.5.3-.94.5-1.94.5-3 0-5.52-4.48-10-10-10z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
        {
            id: "vision",
            title: "Our Vision",
            content:
                "To responsibly steward the earth's potential and expertly match individuals with their perfect property, from the ground up.",
            icon: (
                <svg className="w-12 h-12 text-[#981314]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
            ),
        },
        {
            id: "core-values",
            title: "Core Values",
            content: "Authenticity • Stewardship • Opportunity",
            icon: (
                <svg className="w-12 h-12 text-[#981314]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3,
            },
        },
    };

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: customEase,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            rotateX: -15,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: customEase,
            },
        },
    };

    const floatingVariants = {
        animate: {
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: easeInOut,
            },
        },
    };

    return (
        <div className="bg-[#08194A] py-14 md:py-20 px-2 md:px-4">
            <motion.div
                ref={ref}
                className="max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div className="text-center mb-10 md:mb-16" variants={headerVariants}>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                        whileHover={{
                            scale: 1.05,
                            color: "#dc2626",
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        Vision & Mission
                    </motion.h2>
                    <motion.p
                        className="text-[14px] md:text-[16px] text-gray-100 mb-3 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Empowering families and building thriving communities through innovation, trust, and excellence.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                z: 50,
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="relative bg-white rounded-3xl p-4 lg:p-8 shadow-lg border border-stone-200 overflow-hidden"
                                whileHover={{
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    borderColor: "#fecaca",
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-3xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <motion.div
                                    className="absolute top-4 right-4 w-20 h-20 bg-red-100/30 rounded-full blur-xl"
                                    variants={floatingVariants}
                                    animate="animate"
                                    style={{ animationDelay: `${index * 0.5}s` }}
                                />
                                <motion.div
                                    className="absolute bottom-4 left-4 w-16 h-16 bg-amber-100/30 rounded-full blur-lg"
                                    variants={floatingVariants}
                                    animate="animate"
                                    style={{ animationDelay: `${index * 0.5 + 0.2}s` }}
                                />

                                <div className="relative z-10">
                                    <div className="flex justify-center mb-6">
                                        <motion.div
                                            className="p-3 bg-red-50 rounded-2xl"
                                            whileHover={{
                                                scale: 1.2,
                                                rotate: 10,
                                                backgroundColor: "#fef2f2",
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <span className="h-5 md:h-10 w-5 md:w-10 flex items-center justify-center text-[#981314]">
                                                {section.icon}
                                            </span>
                                        </motion.div>
                                    </div>

                                    <motion.h3
                                        className="text-2xl lg:text-3xl font-bold text-slate-800 text-center mb-6"
                                        whileHover={{
                                            color: "#981314",
                                            scale: 1.05,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {section.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-stone-600 text-center leading-relaxed text-[13px] lg:text-[14px]"
                                        whileHover={{ color: "#57534e" }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                                    >
                                        {section.content}
                                    </motion.p>
                                </div>

                                <motion.div
                                    className="absolute inset-0 rounded-3xl border-2 border-red-500/0"
                                    whileHover={{ borderColor: "rgba(239, 68, 68, 0.2)" }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 rounded-3xl bg-red-500/5 blur-xl opacity-0 -z-10"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <div className="flex space-x-2">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className={`w-3 h-3 rounded-full ${index === 0 ? "bg-red-500" : index === 1 ? "bg-red-400" : "bg-red-300"
                                    }`}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.7, 1, 0.7],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default VisionMissionComponent;
