"use client";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
    return (
        <div className="relative w-full h-96 md:h-[800px] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/house5.jpg"
                    fill
                    alt="About Us background image"
                    className="w-full h-full object-cover"
                    priority
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 bg-black/50"
            />

            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>

            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.13,
                            delayChildren: 0.6,
                        },
                    },
                }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    About Us
                </motion.h1>
                <motion.p
                    className="text-lg md:text-[16px] text-white max-w-2xl drop-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                >
                    Learn more about our journey, values, and what drives us to serve you better every day.
                </motion.p>
                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"
                    initial={{ opacity: 0, scaleX: 0.7 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                />
            </motion.div>
        </div>
    );
}
