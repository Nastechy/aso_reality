"use client";
import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import OurTeamSection from "@/components/ourteam";
import WhyChooseAsoRealty from "@/components/whychoose";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-80 md:h-[740px] flex items-center justify-center">
        <img
          src="/house3.jpg" 
          alt="Our Team background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-0 left-0 w-full z-20">
          <Navbar />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Our Team
          </h1>
          <p className="text-lg md:text-[16px] text-white max-w-2xl drop-shadow">
            Meet the passionate people driving our mission and innovation every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"></div>
        </div>
      </div>

      <div className="mx-2 my-5 md:m-10">
        <OurTeamSection />
        <WhyChooseAsoRealty />
      </div>
      <Footer />
    </div>
  );
}
