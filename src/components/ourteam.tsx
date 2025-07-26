"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const OurTeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Hadeed Ullah",
            position: "Creative Designer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            phone: "+234 801 234 5678",
            email: "hadeed.ullah@asorealty.com",
            social: {
                linkedin: "hadeed-ullah-design",
                twitter: "hadeedullah_",
                instagram: "hadeed.designs",
                facebook: "hadeed.ullah.creative"
            }
        },
        {
            id: 2,
            name: "Adebayo Johnson",
            position: "Senior Real Estate Agent",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
            phone: "+234 802 345 6789",
            email: "adebayo.johnson@asorealty.com",
            social: {
                linkedin: "adebayo-johnson-realestate",
                twitter: "adebayoj_homes",
                instagram: "adebayo.properties",
                facebook: "adebayo.johnson.agent"
            }
        },
        {
            id: 3,
            name: "Fatima Abdullahi",
            position: "Property Manager",
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=300&fit=crop&crop=face",
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
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
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
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
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
            image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const socialIconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1, rotate: 0,
            transition: { type: "spring", bounce: 0.5, duration: 0.6 }
        }
    };

    return (
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
                            {/* Image */}
                            <div className="relative group">
                                <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-60 object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                />
                                {/* Overlay Social */}
                                <motion.div
                                    className="absolute bottom-2 right-2 left-2 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ opacity: 1 }}
                                >
                                    <motion.a
                                        href={`https://linkedin.com/in/${member.social.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-600 hover:text-white"
                                        variants={socialIconVariants}
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={`https://twitter.com/${member.social.twitter}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-400 hover:text-white"
                                        variants={socialIconVariants}
                                    >
                                        <Twitter className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={`https://instagram.com/${member.social.instagram}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-pink-600 hover:text-white"
                                        variants={socialIconVariants}
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </motion.a>
                                    <motion.a
                                        href={`https://facebook.com/${member.social.facebook}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow hover:bg-blue-800 hover:text-white"
                                        variants={socialIconVariants}
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </motion.a>
                                </motion.div>
                            </div>

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
                        className="text-center "
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
};

export default OurTeamSection;
