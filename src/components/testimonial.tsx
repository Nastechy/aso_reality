
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import Image from "next/image";

function getCardsPerView() {
    if (typeof window === "undefined") return 1;
    return window.innerWidth < 768 ? 1 : 4;
}

export default function TestimonialSection() {
    const [startIdx, setStartIdx] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
    const num = testimonials.length;

    // Responsive cards per view
    useEffect(() => {
        const update = () => setCardsPerView(getCardsPerView());
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    // Swipe left by 1 card every 5.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setStartIdx((prev) => (prev + 1) % num);
        }, 5500);
        return () => clearInterval(interval);
    }, [num]);

    // Visible cards, wrap-around
    const getVisible = () => {
        return Array.from({ length: cardsPerView }, (_, i) =>
            testimonials[(startIdx + i) % num]
        );
    };

    // Navigation dots
    const totalPages = num;

    return (
        <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-24 px-2 md:px-0">
            <div
                className="max-w-6xl mx-auto rounded-2xl"
            >
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg mb-3 max-w-2xl mx-auto">
                        Real experiences, honest feedback, and the stories that make us proud to serve you every day.
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-[#08194A] mx-auto rounded-full"></div>
                </motion.div>

                {/* Cards */}
                <div className="flex gap-6 w-full md:gap-8 overflow-hidden">
                    {getVisible().map((t, idx) => (
                        <motion.div
                            key={t.id}
                            className={`
                bg-white/95 rounded-xl
                flex-1
                flex flex-col items-center justify-center
                px-4 py-8
                shadow-[0_10px_32px_0_#08194A66]
                transition-all duration-300
                ${cardsPerView === 1
                                    ? "min-w-0 max-w-full"
                                    : "min-w-0"
                                }
                ${idx === 1 ? "scale-105 z-10" : "scale-100"}
              `}
                            style={{
                                // Ensures exactly 4 cards fit the container, with gap accounted for!
                                width: cardsPerView > 1 ? `calc((100% - ${(cardsPerView - 1) * 2}rem)/${cardsPerView})` : "100%",
                                maxWidth: cardsPerView > 1 ? "none" : "100%",
                                boxShadow:
                                    idx === 1
                                        ? "0 10px 32px 0 #08194Aaa"
                                        : "0 2px 12px 0 #08194A22",
                            }}
                            animate={{
                                y: cardsPerView === 1 ? 0 : idx === 1 ? -10 : 0,
                                opacity: cardsPerView === 1 ? 1 : idx === 1 ? 1 : 0.9,
                            }}
                            transition={{ type: "spring", duration: 0.7 }}
                        >
                            <TestimonialCard testimonial={t} />
                        </motion.div>
                    ))}
                </div>

                {/* Dots navigation */}
                <div className="flex justify-center mt-8 gap-2">
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setStartIdx(idx)}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${startIdx === idx
                                ? "bg-[#08194A] scale-125"
                                : "bg-[#08194A]/20"
                                }`}
                            aria-label={`Go to testimonials starting at ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof testimonials)[number];
}) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg -mt-8 mb-2 bg-gray-100 flex items-center justify-center">
                <Image
                    height={0}
                    width={0}
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex mb-2">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current drop-shadow" />
                ))}
            </div>
            <p className="text-gray-800 text-center mb-4 text-[15px] italic font-semibold max-w-[190px] md:max-w-[160px] leading-relaxed">
                “{testimonial.text}”
            </p>
            <div className="font-extrabold text-[#08194A] text-base">{testimonial.name}</div>
            <div className="text-xs font-semibold text-[#981314] mb-2 tracking-wider">{testimonial.role}</div>
        </div>
    );
}
