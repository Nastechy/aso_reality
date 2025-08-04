"use client";

import React, { useState, useEffect } from "react";
import { properties, Property } from "@/lib/data";
import { Star, MapPin, Square, X, Mail, Phone } from "lucide-react";
import PropertyGallery from "@/components/propertyGallery";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "../navbar";

const gridVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.10, delayChildren: 0.2 }
    }
};


export default function AllPropertiesPage() {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const [visibleCount, setVisibleCount] = useState(4);
    const [isMobile, setIsMobile] = useState(false);

    // Responsive: detect small screen
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const propertiesToShow = isMobile
        ? properties.slice(0, visibleCount)
        : properties;

    const showSeeMore = isMobile && visibleCount < properties.length;

    const closeModal = () => setSelectedProperty(null);

    return (
        <>
            <div className="bg-white min-h-screen">
                <div className="relative w-full h-96 md:h-[800px] flex items-center justify-center mb-6 overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                    >
                        <Image
                            width={1920}
                            height={800}
                            src="/image3.jpg"
                            alt="Properties Background image"
                            className="w-full h-full object-cover"
                            priority
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute inset-0 bg-black"
                        />
                    </motion.div>
                    <div >
                        <Navbar />
                    </div>

                    {/* Animated headline and subtext */}
                    <motion.div
                        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.13, delayChildren: 0.4 } },
                        }}
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg"
                            initial={{ opacity: 0, y: 34 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.78, delay: 0.6 }}
                        >
                            All Properties
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white max-w-2xl drop-shadow"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.68, delay: 0.9 }}
                        >
                            Browse all available properties below.
                        </motion.p>
                        <motion.div
                            className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 96, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 1.05 }}
                        />
                    </motion.div>
                </div>

                {/* Properties Grid with Animation */}
                <div className="max-w-7xl mx-auto px-4 my-10 md:py-16">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {propertiesToShow.map((property) => (
                            <motion.div
                                key={property.id}
                                // variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.025, boxShadow: "0 8px 32px 0 rgba(15,23,42,0.09)" }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="relative">
                                    <Image
                                        width={700}
                                        height={400}
                                        src={property.images[0]}
                                        alt={property.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-[16px] font-bold text-gray-900 mb-2 line-clamp-1">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center text-gray-600 mb-3">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{property.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                        <div className="flex items-center">
                                            <Square className="w-4 h-4 mr-1" />
                                            <span>{property.area}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center mb-3">
                                        <div className="flex items-center">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="ml-1 text-sm font-medium text-gray-900">{property.rating}</span>
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">({property.reviews} Reviews)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            onClick={() => setSelectedProperty(property)}
                                            className="bg-[#981314] text-white cursor-pointer px-4 py-2 rounded-[3px] text-[10px] font-bold hover:bg-[#08194A] transition-colors duration-200"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {showSeeMore && (
                        <div className="flex justify-center mt-8 ">
                            <button
                                className="block sm:hidden bg-[#981314] text-white px-6 py-2 rounded-[3px] font-bold text-[11px] hover:bg-[#08194A] transition-colors duration-200"
                                onClick={() => setVisibleCount((prev) => prev + 4)}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </div>

                {/* Modal */}
                {selectedProperty && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(13, 15, 30, 0.88)" }}
                    >
                        <div className="relative bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-0 md:p-8 flex flex-col max-h-[90vh] overflow-y-auto transition-all">
                            <button
                                className="absolute top-5 right-5 cursor-pointer z-20 text-gray-400 hover:text-red-700 bg-white rounded-full shadow p-1"
                                onClick={closeModal}
                            >
                                <X size={20} />
                            </button>
                            <div className="md:flex gap-8">
                                <div className="flex-shrink-0 w-full md:w-1/2 mb-4 md:mb-0 flex flex-col">
                                    <PropertyGallery images={selectedProperty.images} />
                                </div>
                                <div className="flex-1 flex flex-col px-6 pb-6 pt-2 md:p-0">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <span className="text-gray-500 text-xs">{selectedProperty.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{selectedProperty.title}</h3>
                                    <div className="flex items-center mb-4">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                        <span className="ml-1 text-lg font-medium text-gray-900">{selectedProperty.rating}</span>
                                        <span className="text-sm text-gray-500 ml-2">({selectedProperty.reviews} Reviews)</span>
                                    </div>
                                    <div className="text-gray-700 mb-4 text-[15px] leading-relaxed" style={{ whiteSpace: "pre-line" }}>
                                        {selectedProperty.description || "No extra description available for this property."}
                                    </div>
                                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600 text-sm">
                                        <div className="flex items-center">
                                            <Square className="w-5 h-5 mr-1" />
                                            <span>{selectedProperty.area}</span>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mt-auto">
                                        <div className="font-semibold mb-2">Contact Agent</div>
                                        <div className="flex items-center mb-1">
                                            <Mail className="w-4 h-4 mr-2 text-[#981314]" />
                                            <span className="text-gray-800 text-sm">info@asorealty.com</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-4 h-4 mr-2 text-[#981314]" />
                                            <span className="text-gray-800 text-sm">+234 801 234 5678</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}
