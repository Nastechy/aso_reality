"use client";

import React, { useState, useEffect, useRef } from "react";

interface Stat {
  id: string;
  target: number;
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

interface CountsState {
  houses: number;
  states: number;
  trusted: number;
  experience: number;
}

const stats: Stat[] = [
  {
    id: "houses",
    target: 500,
    label: "Houses Sold",
    color: "text-amber-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200"
  },
  {
    id: "states",
    target: 5,
    label: "Operating in 5 States",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    id: "trusted",
    target: 1000,
    label: "Trusted by Families",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: "experience",
    target: 10,
    label: "Years of Experience",
    color: "text-white",
    bgColor: "bg-blue-950",
    borderColor: "border-blue-900"
  }
];

const isMobile = () =>
  typeof window !== "undefined" && window.innerWidth < 768;

const StatsComponent: React.FC = () => {
  const [counts, setCounts] = useState<CountsState>({
    houses: 0,
    states: 0,
    trusted: 0,
    experience: 0
  });

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobile, setMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Animate counters
  useEffect(() => {
    const duration = 2000;
    const intervals: { [key: string]: NodeJS.Timeout } = {};

    stats.forEach((stat) => {
      const increment = stat.target / (duration / 50);
      let current = 0;

      intervals[stat.id] = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(intervals[stat.id]);
        }
        setCounts((prev) => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, 50);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, []);

  // Detect mobile
  useEffect(() => {
    setMobile(isMobile());
    const handleResize = () => setMobile(isMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile auto-advance
  useEffect(() => {
    if (!mobile) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [mobile]);

  // Touch swipe handling
  const touchStartRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current;
    if (Math.abs(dx) > 50) {
      // Swipe detected
      setCurrentIndex((prev) =>
        dx < 0
          ? (prev + 1) % stats.length // Swipe left
          : (prev - 1 + stats.length) % stats.length // Swipe right
      );
    }
    touchStartRef.current = null;
  };

  const getCounterValue = (statId: string): number => counts[statId as keyof CountsState];
  const getDisplayValue = (_statId: string, value: number): string => `${value}+`;

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-6 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {!mobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`relative group transform transition-all duration-500 hover:scale-105 ${stat.bgColor} ${stat.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl animate-fade-in-up`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: "both"
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div
                    className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
                    style={{
                      top: "20%",
                      left: "80%",
                      animationDelay: `${index * 0.3}s`
                    }}
                  />
                  <div
                    className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                    style={{
                      top: "70%",
                      left: "20%",
                      animationDelay: `${index * 0.5}s`
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                <div className="relative z-10 text-center">
                  <div className={`md:text-5xl text-3xl font-bold mb-2 ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                    {getDisplayValue(stat.id, getCounterValue(stat.id))}
                  </div>
                  <div className="text-gray-600 font-medium text-[12px] md:text-[14px] leading-relaxed">
                    {stat.label}
                  </div>
                </div>
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${stat.bgColor.replace("50", "200")} blur-xl`} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="w-full flex justify-center items-center relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ minHeight: 200 }}
          >
            {stats.map((stat, idx) =>
              idx === currentIndex ? (
                <div
                  key={stat.id}
                  className={`w-full max-w-xs mx-auto relative group transform transition-all duration-500 hover:scale-105 ${stat.bgColor} ${stat.borderColor} border-2 rounded-2xl p-8 shadow-lg hover:shadow-2xl animate-fade-in-up`}
                  style={{
                    animationDelay: `${idx * 0.2}s`,
                    animationFillMode: "both"
                  }}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div
                      className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
                      style={{
                        top: "20%",
                        left: "80%",
                        animationDelay: `${idx * 0.3}s`
                      }}
                    />
                    <div
                      className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                      style={{
                        top: "70%",
                        left: "20%",
                        animationDelay: `${idx * 0.5}s`
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
                  <div className="relative z-10 text-center">
                    <div className={`text-5xl font-bold mb-2 ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                      {getDisplayValue(stat.id, getCounterValue(stat.id))}
                    </div>
                    <div className="text-gray-600 font-medium text-[14px] leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${stat.bgColor.replace("50", "200")} blur-xl`} />
                  {/* Dots */}
                  <div className="absolute bottom-2 left-0 w-full flex justify-center space-x-2">
                    {stats.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        className={`w-1 h-1 rounded-full transition-colors duration-300 ${dotIdx === currentIndex ? "bg-[#981314]" : "bg-gray-300"}`}
                        onClick={() => setCurrentIndex(dotIdx)}
                        aria-label={`Go to stat ${dotIdx + 1}`}
                        style={{ outline: "none", border: "none" }}
                      />
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default StatsComponent;
