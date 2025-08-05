"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "./navbar";
import { MapPin } from "lucide-react";

const heroSlides = [
    {
        id: 1,
        image: "/image22.jpg",
        title: "Find Your Dream Home with Aso Realty Limited",
    },
    {
        id: 2,
        image: "/Heroland.jpg",
        title: "Own genuine Land today with Aso Realty ",
    },
    {
        id: 3,
        image: "/house33.jpg",
        title: "Invest wisely with Aso Realty Limited",
    },
];

export default function HeroSlider() {
    const [showSlider, setShowSlider] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Show static image for 1.8s, then show the slider
    useEffect(() => {
        const timer = setTimeout(() => setShowSlider(true), 1800);
        return () => clearTimeout(timer);
    }, []);

    const goToSlide = useCallback(
        (index: number) => {
            if (isAnimating || index === currentSlide) return;
            setIsAnimating(true);
            setCurrentSlide(index);
            setTimeout(() => setIsAnimating(false), 800);
        },
        [isAnimating, currentSlide]
    );

    useEffect(() => {
        if (!showSlider || isAnimating) return;

        timeoutRef.current = setTimeout(() => {
            goToSlide((currentSlide + 1) % heroSlides.length);
        }, 7500);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [currentSlide, isAnimating, goToSlide, showSlider]);

    // Keyboard nav
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!showSlider || isAnimating) return;
        if (e.key === "ArrowRight") {
            goToSlide((currentSlide + 1) % heroSlides.length);
        } else if (e.key === "ArrowLeft") {
            goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
        }
    };

    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=C1,+Amaka+Mall,+9+San+Zangon+Daura+Street,+Guzape,+Abuja,+Nigeria,+900211";

    const imageVariants = {
        initial: { 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(2px)"
        },
        animate: { 
            opacity: 1, 
            scale: 1,
            filter: "blur(0px)"
        },
        exit: { 
            opacity: 0, 
            scale: 0.98,
            filter: "blur(1px)"
        }
    };

    const contentVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            filter: "blur(1px)"
        },
        animate: { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)"
        },
        exit: { 
            opacity: 0, 
            y: -10,
            filter: "blur(1px)"
        }
    };

    return (
        <section
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="relative h-screen w-full overflow-hidden bg-black outline-none"
        >
            <Navbar />

            {!showSlider ? (
                <div className="absolute inset-0">
                    <div
                        className="h-full w-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${heroSlides[0].image})`,
                        }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl flex flex-col gap-5 text-start">
                                <a
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open location in Google Maps"
                                    tabIndex={0}
                                    className="self-start"
                                >
                                    <div className="flex items-center gap-2 justify-center bg-[#981314] text-white px-4 py-2 w-fit rounded shadow-md cursor-pointer hover:scale-90 hover:bg-[#08194A] transition-all duration-300">
                                        <span className="flex h-5 w-5 items-center justify-center">
                                            <MapPin size={16} />
                                        </span>
                                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                                            ASO REALTY
                                        </span>
                                    </div>
                                </a>
                                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
                                    {heroSlides[0].title}
                                </h1>
                                <div className="font-medium text-[12px] md:text-[14px] text-white opacity-90">
                                    Wealth, Unity, Home – Your journey begins here.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={heroSlides[currentSlide].id}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ 
                                    duration: 0.8, 
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                className="absolute inset-0"
                                style={{ willChange: "opacity, transform, filter" }}
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
                    </div>

                    {/* SLIDE CONTENT - Persistent container with animated content */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="max-w-2xl flex flex-col gap-5 text-start">
                                {/* Static location button - doesn't animate */}
                                <a
                                    href={mapsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open location in Google Maps"
                                    tabIndex={0}
                                    className="self-start"
                                >
                                    <div className="flex items-center gap-2 justify-center bg-[#981314] text-white px-4 py-2 w-fit rounded shadow-md cursor-pointer hover:scale-90 hover:bg-[#08194A] transition-all duration-300">
                                        <span className="flex h-5 w-5 items-center justify-center">
                                            <MapPin size={16} />
                                        </span>
                                        <span className="text-[11px] font-semibold uppercase tracking-wider">
                                            ASO REALTY
                                        </span>
                                    </div>
                                </a>

                                {/* Animated title */}
                                <div className="relative min-h-[200px] flex items-start">
                                    <AnimatePresence mode="wait">
                                        <motion.h1
                                            key={heroSlides[currentSlide].id + "-title"}
                                            variants={contentVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.2,
                                                ease: [0.25, 0.46, 0.45, 0.94]
                                            }}
                                            className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white absolute top-0 left-0"
                                        >
                                            {heroSlides[currentSlide].title}
                                        </motion.h1>
                                    </AnimatePresence>
                                </div>

                                {/* Static tagline */}
                                <div className="font-medium text-[12px] md:text-[14px] text-white opacity-90">
                                    Wealth, Unity, Home – Your journey begins here.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                disabled={isAnimating}
                                className={`h-3 w-3 rounded-full transition-all duration-500 ${
                                    index === currentSlide 
                                        ? "bg-white scale-110 shadow-lg" 
                                        : "bg-white/40 hover:bg-white/75 hover:scale-105"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                                tabIndex={0}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}