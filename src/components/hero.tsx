"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./navbar";
import { MapPin } from "lucide-react";

const heroSlides = [
    {
        id: 1,
        image: "/house3.jpg",
        title: "Find Your Dream Home with Aso Realty Limited",
    },
    {
        id: 2,
        image: "/image3.jpg",
        title: "Own geniue Land today with Aso Realty Limited",
    },
    {
        id: 3,
        image: "/image2.jpg",
        title: "Invest wisely with Aso Realty Limited",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // 1. useCallback to define goToSlide
    const goToSlide = useCallback(
        (index: number) => {
            if (isAnimating || index === currentSlide) return;
            setIsAnimating(true);
            setCurrentSlide(index);

            // Allow animation to finish before enabling buttons
            setTimeout(() => setIsAnimating(false), 1500); // match motion transition duration
        },
        [isAnimating, currentSlide]
    );

    // 2. Lint fix: Add goToSlide to deps
    useEffect(() => {
        if (isAnimating) return;

        timeoutRef.current = setTimeout(() => {
            goToSlide((currentSlide + 1) % heroSlides.length);
        }, 8000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentSlide, isAnimating, goToSlide]);

    // Optional: keyboard navigation support
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (isAnimating) return;

        if (e.key === "ArrowRight") {
            goToSlide((currentSlide + 1) % heroSlides.length);
        } else if (e.key === "ArrowLeft") {
            goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
        }
    };

    const mapsUrl =
        "https://www.google.com/maps/search/?api=1&query=Abuja+Nigeria";

    return (
        <section
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative h-screen w-full overflow-hidden bg-transparent outline-none"
        >
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={heroSlides[currentSlide].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${heroSlides[currentSlide].image})`,
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex md:mt-40 mt-20 items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl flex flex-col gap-5">
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open location in Google Maps"
                            tabIndex={0}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
                                className="flex items-center gap-2 justify-center bg-[#981314] text-white px-4 py-2 w-fit rounded shadow-md cursor-pointer hover:scale-90 hover:bg-[#08194A] transition"
                            >
                                <span className="flex h-5 w-5 items-center justify-center">
                                    <MapPin size={16} />
                                </span>
                                <span className="text-[11px] font-semibold uppercase tracking-wider">
                                    ASO REALTY
                                </span>
                            </motion.div>
                        </a>

                        <motion.h1
                            key={heroSlides[currentSlide].id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className=" text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            {heroSlides[currentSlide].title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <div className="font-medium text-white text-[12px] md:text-[14px]">
                                Wealth, Unity, Home – Your journey begins here.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center space-x-2 text-white"
            >
                <span className="text-2xl font-bold">
                    {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`h-0.5 transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                            tabIndex={0}
                        />
                    ))}
                </div>
                <span className="text-2xl font-light">
                    {String(heroSlides.length).padStart(2, "0")}
                </span>
            </motion.div>

            <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        disabled={isAnimating}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-[#08194A] hover:bg-white/75"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                        tabIndex={0}
                    />
                ))}
            </div>
        </section>
    );
}
