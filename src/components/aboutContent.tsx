"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation, easeOut, easeInOut } from "framer-motion"
import Image from "next/image"

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: [40, -10, 0],
            transition: { duration: 1, ease: easeInOut },
        },
    }

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.6, ease: easeOut },
        },
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.85, rotate: -8 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1.2, ease: easeOut },
        },
    }

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-2 md:px-16 pb-9 md:pb-16">
            <section
                ref={ref}
                className="bg-white py-6 md:py-12 lg:py-16 rounded-[16px]"
            >
                <div className="container mx-auto px-3 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            animate={controls}
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.4,
                                    },
                                },
                            }}
                        >
                            <motion.div
                                className="text-[26px] font-bold text-[#394636]"
                                variants={titleVariants}
                            >
                                About Us
                            </motion.div>

                            <motion.p
                                className="text-gray-600  leading-relaxed"
                                variants={textVariants}
                            >
                                <span className="font-[12px] flex flex-col gap-4">
                                    <span>
                                        Aso Real Estate Limited (RC: 6900425)
                                        is passionate about helping to empower families by providing
                                        them safe and prosperous communities to live or do businesses in.
                                        Our employees are characterized by excellence, respect, integrity,
                                        and the ability to consistently deliver superior professional
                                        service laced with innovation.
                                    </span>
                                    <span>
                                        Every step of the way in our conversations, we keep the satisfaction of our clientele in the
                                        vanguard. We provide every necessary support to our clients,
                                        Aso Real Estate Limited (RC: 6900425)
                                        is passionate about helping to empower families by providing
                                        them safe and prosperous communities to live or do businesses in.
                                    </span>
                                    <span>
                                        Our employees are characterized by excellence, respect, integrity,
                                        and the ability to consistently deliver superior professional
                                        service laced with innovation. Every step of the way in our
                                        conversations, we keep the satisfaction of our clientele in the
                                        vanguard. We provide every necessary support to our clients,
                                    </span>

                                </span>
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="relative"
                            initial="hidden"
                            animate={controls}
                            variants={imageVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 150 }}
                        >
                            <motion.div className="relative overflow-hidden rounded shadow cursor-pointer">
                                <Image
                                    src="/stirs.jpg"
                                    alt="stirs pics"
                                    width={570}
                                    height={350}
                                    className="w-full h-[350px] md:h-[450px] lg:h-[600px] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
