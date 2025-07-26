"use client";
import React from "react";
import Footer from "@/components/footer";
import ContactSection from "@/components/contactus";
import { Navbar } from "@/components/navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="relative w-full h-96 md:h-[750px] flex items-center justify-center">
                <img
                    src="/image1.jpg"
                    alt="Contact Us background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute top-0 left-0 w-full z-20">
                    <Navbar />
                </div>
                {/* <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow">
                        We’d love to hear from you. Reach out today and let us know how we can help.
                    </p>
                </div> */}
            </div>

            <ContactSection />
            <Footer />
        </div>
    );
}
