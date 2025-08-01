"use client";

import React from 'react';
import { motion, easeOut, Variants } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
    {
        id: 1,
        name: "Abraham O. Azi",
        position: "Managing Director",
        image: "/NewGM.jpg",
        phone: "+234 803 761 6518",
        email: "adebayo.johnson@asorealty.com",
        social: {
            linkedin: "Azi Abraham ",
            twitter: "Azi Abraham ",
            instagram: "Azi Abraham ",
            facebook: "Azi Abraham "
        }
    },
    {
        id: 2,
        name: "Chukwuemeka Udeh Elijah",
        position: "General Manager",
        image: "/NewMD.jpg",
        phone: "+234 803 410 9687",
        email: "emekaelijah545@gmail.com",
        social: {
            linkedin: "emmyeli_jah",
            twitter: "emmyeli_jah",
            instagram: "emmyeli_jah",
            facebook: "emmyeli_jah"
        }
    },
    {
        id: 3,
        name: "Fatima Abdullahi",
        position: "Property Manager",
        image: "/Invisible.png",
        phone: "+234 803 456 7890",
        email: "fatima.abdullahi@asorealty.com",
        social: {
            linkedin: "fatima-abdullahi-properties",
            twitter: "fatima_prop",
            instagram: "fatima.properties",
            facebook: "fatima.abdullahi.pm"
        }
    },
    {
        id: 4,
        name: "Chidi Okafor",
        position: "Investment Consultant",
        image: "/Invisible.png",
        phone: "+234 804 567 8901",
        email: "chidi.okafor@asorealty.com",
        social: {
            linkedin: "chidi-okafor-investment",
            twitter: "chidi_invests",
            instagram: "chidi.realestate",
            facebook: "chidi.okafor.consultant"
        }
    },
    {
        id: 5,
        name: "Amina Hassan",
        position: "Marketing Director",
        image: "/Invisible.png",
        phone: "+234 805 678 9012",
        email: "amina.hassan@asorealty.com",
        social: {
            linkedin: "amina-hassan-marketing",
            twitter: "amina_markets",
            instagram: "amina.marketing",
            facebook: "amina.hassan.director"
        }
    },
    {
        id: 6,
        name: "Tunde Adebayo",
        position: "Legal Advisor",
        image: "/Invisible.png",
        phone: "+234 806 789 0123",
        email: "tunde.adebayo@asorealty.com",
        social: {
            linkedin: "tunde-adebayo-legal",
            twitter: "tunde_legal",
            instagram: "tunde.legal",
            facebook: "tunde.adebayo.lawyer"
        }
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, staggerChildren: 0.15 }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: easeOut }
    }
};

const socialIconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: { type: "spring", bounce: 0.5, duration: 0.6 }
    }
};

const OurTeamSection = () => (
    <div className="bg-white py-16 px-2 md:px-4">
        <div className="max-w-7xl mx-auto">
            <motion.div
                className="text-center mb-14"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Our Team
                </h2>
                <p className="text-gray-600 text-base md:text-lg mb-2 max-w-2xl mx-auto">
                    Our team is dedicated to delivering excellence in every aspect of our work.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-[#08194A] mx-auto rounded-full"></div>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {teamMembers.map((member) => (
                    <motion.div
                        key={member.id}
                        variants={cardVariants}
                        whileHover={{
                            y: -6, scale: 1.025,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                        <div className="relative group flex justify-center mt-4 mb-4" >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#981314]/30 blur-2xl z-0" />

                            <motion.div
                                style={{ border: '4px solid red' }}
                                className="w-36 h-36 rounded-full border-4 border-white shadow-xl bg-gray-100 overflow-hidden z-10 relative flex items-center justify-center"
                                whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(152,19,20,0.16)" }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                                <Image
                                    height={200}
                                    width={200}
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cintain transition-all duration-300 group-hover:object-contain"
                                    style={{ aspectRatio: "1 / 1" }}
                                    draggable={false}
                                />
                            </motion.div>

                            <motion.div
                                className="absolute inset-0 flex items-end justify-center pb-2 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.a
                                    href={`https://linkedin.com/in/${member.social.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-600 hover:text-white"
                                    variants={socialIconVariants}
                                >
                                    <Linkedin className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={`https://twitter.com/${member.social.twitter}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-400 hover:text-white"
                                    variants={socialIconVariants}
                                >
                                    <Twitter className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={`https://instagram.com/${member.social.instagram}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-pink-600 hover:text-white"
                                    variants={socialIconVariants}
                                >
                                    <Instagram className="w-4 h-4" />
                                </motion.a>
                                <motion.a
                                    href={`https://facebook.com/${member.social.facebook}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-800 hover:text-white"
                                    variants={socialIconVariants}
                                >
                                    <Facebook className="w-4 h-4" />
                                </motion.a>
                            </motion.div>
                        </div>
                        {/* END IMAGE BOX */}

                        {/* Content */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div className="text-center mb-4">
                                <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-wide">
                                    {member.name.toUpperCase()}
                                </h3>
                                <p className="text-[#981314] font-semibold text-sm">{member.position}</p>
                            </div>
                            {/* Contact */}
                            <div className="space-y-1 text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <Phone className="w-4 h-4 text-[#981314]" />
                                    <a
                                        href={`tel:${member.phone}`}
                                        className="text-gray-700 hover:text-[#981314] text-sm"
                                    >
                                        {member.phone}
                                    </a>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <Mail className="w-4 h-4 text-[#981314]" />
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="text-gray-700 hover:text-[#981314] text-sm truncate"
                                    >
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    Ready to Work With Our Team?
                </h3>
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <button className="bg-[#08194A] text-[13px] cursor-pointer text-white px-8 py-3 rounded-lg font-bold hover:bg-[#981314] transition-colors duration-300 shadow-lg">
                        Contact Us
                    </button>
                </motion.div>
            </motion.div>
        </div>
    </div>
);

export default OurTeamSection;
