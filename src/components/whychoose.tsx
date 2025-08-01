"use client";

import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { Shield, CreditCard, Users } from 'lucide-react';

const WhyChooseAsoRealty = () => {
    const benefits = [
        {
            id: 1,
            icon: <Users className="w-12 h-12 text-red-500" />,
            title: "Trusted Experts",
            description: "Our team brings market knowledge and expertise to every real estate transaction"
        },
        {
            id: 2,
            icon: <Shield className="w-12 h-12 text-red-500" />,
            title: "Secure Investments",
            description: "We ensure your investments are safe with our verified and trusted processes"
        },
        {
            id: 3,
            icon: <CreditCard className="w-12 h-12 text-red-500" />,
            title: "Flexible Payment Plans",
            description: "Our clients will enjoy installment and other payment options"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: easeOut
            }
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-14 md:py-20 px-2 md:px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.22
                            }
                        }
                    }}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose Aso Realty?
                    </motion.h2>
                    <motion.p
                        className="text-[14px] md:text-[16px] text-gray-600 mb-2 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                    >
                        Experience peace of mind, security, and true value with a partner you can trust for all your real estate needs.
                    </motion.p>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-red-500 to-[#08194A] mx-auto rounded-full"
                        initial={{ opacity: 0, scaleX: 0.3 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        style={{ originX: 0.5 }}
                    />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {benefits.map((benefit) => (
                        <motion.div
                            key={benefit.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                            className="relative"
                        >
                            <div
                                className="bg-white rounded-2xl p-4 md:p-8 shadow-lg text-center relative overflow-hidden"
                                style={{
                                    boxShadow: "0 8px 32px 0 #08194A33" 
                                }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl opacity-30 transform translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-100 rounded-full blur-2xl opacity-50 transform -translate-x-12 translate-y-12"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-center mb-6">
                                        <div className="p-4 bg-red-50 rounded-full">
                                            <span className="h-6 w-6 flex items-center justify-center text-[#08194A]">
                                                {React.cloneElement(benefit.icon, { size: 20, color: "#08194A" })}
                                            </span>
                                        </div>
                                    </div>

                                    <motion.h3
                                        className="text-[16px] md:text-[18px] font-bold text-gray-900 mb-4"
                                        whileHover={{ color: "#dc2626" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {benefit.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-600 leading-relaxed text-[14px] md:text-[16px]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        {benefit.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <button className="bg-[#08194A] text-[13px] cursor-pointer text-white px-8 py-3 rounded-[3px] font-bold hover:bg-[#981314] transition-colors duration-300 shadow-lg">
                        Get Started Today 
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default WhyChooseAsoRealty;
