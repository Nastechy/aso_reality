"use client";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHeroSection() {
    return (
        <div className="relative w-full h-96 md:h-[750px] flex items-center justify-center overflow-hidden">
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Image
                    width={1920}
                    height={1080}
                    src="/image1.jpg"
                    alt="Contact Us background image"
                    className="w-full h-full object-cover"
                    priority
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute inset-0 bg-black"
                />
            </motion.div>
            <div className="absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } },
                }}
            >
                {/* You can uncomment and customize these if you want visible headline */}
                {/* <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white max-w-2xl drop-shadow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.95 }}
        >
          We&apos;d love to hear from you. Reach out today and let us know how we can help.
        </motion.p> */}
                <motion.div
                    className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 96, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.15 }}
                />
            </motion.div>
        </div>
    );
}
