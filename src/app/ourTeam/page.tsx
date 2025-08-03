import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import OurTeamSection from "@/components/ourteam";
import Image from "next/image";
import { motion } from "framer-motion";
import TestimonialSection from "@/components/testimonial";


export const metadata = {
  title: "Our Team - Aso Realty",
  description: "Meet the passionate people driving our mission and innovation every day.",
  alternates: {
    canonical: "https://www.asorealty.com/ourTeam",
  },
  openGraph: {
    title: "Our Team - Aso Realty",
    description: "Meet the passionate people driving our mission and innovation every day.",
    url: "https://www.asorealty.com/ourTeam",
    images: [
      {
        url: "/asologo.png",
        width: 800,
        height: 600,
        alt: "Aso Realty Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team - Aso Realty",
    description: "Meet the passionate people driving our mission and innovation every day.",
    images: ["/asologo.png"],
  },
};


export default function OurTeamPage() {
  return (
    <>

      <div className="min-h-screen bg-white">
        <div className="relative w-full h-96 md:h-[740px] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Image
              width={1920}
              height={800}
              src="/house3.jpg"
              alt="Our Team background image"
              className="w-full h-full object-cover"
              priority
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute inset-0 bg-black"
            />
          </motion.div>

          <div className="absolute top-0 left-0 w-full z-20">
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
            {/* <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.6 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg md:text-[16px] text-white max-w-2xl drop-shadow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.9 }}
          >
            Meet the passionate people driving our mission and innovation every day.
          </motion.p> */}
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#08194A] to-red-600 mx-auto rounded-full mt-4"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.05 }}
            />
          </motion.div>
        </div>

        <div className="mx-2 my-5 md:m-10">
          <OurTeamSection />
          <TestimonialSection />
        </div>
        <Footer />
      </div>
    </>

  );
}
