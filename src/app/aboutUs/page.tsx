"use client";
import React from "react";
import About from "@/components/aboutContent";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import VisionMissionComponent from "@/components/visionandmission";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-80 md:h-[740px] flex items-center justify-center">
        <img
          src="/house5.jpg"
          alt="About Us background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-[16px] text-white max-w-2xl drop-shadow">
            Learn more about our journey, values, and what drives us to serve you better every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"></div>

        </div>
      </div>

      <div className="mx-2 my-5 md:m-10 ">
      <About />
      <VisionMissionComponent />
      </div>
      <Footer />
    </div>
  );
}
