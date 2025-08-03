
import React from "react";
import About from "@/components/aboutContent";
import Footer from "@/components/footer";
import VisionMissionComponent from "@/components/visionandmission";
import AboutHeroSection from "@/components/pageSections/AboutHeroSection";


export const metadata = {
  title: "About Us - Aso Realty",
  description: "Learn more about our journey, values, and what drives us to serve you better every day.",
  alternates: {
    canonical: "https://www.asorealty.com/aboutUs",
  },
  openGraph: {
    title: "About Us - Aso Realty",
    description: "Learn more about our journey, values, and what drives us to serve you better every day.",
    url: "https://www.asorealty.com/aboutUs",
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
    title: "About Us - Aso Realty",
    description: "Learn more about our journey, values, and what drives us to serve you better every day.",
    images: ["/asologo.png"],
  },
};


export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <AboutHeroSection />
        <div className="mx-2 my-5 md:m-10 ">
          <About />
          <VisionMissionComponent />
        </div>
        <Footer />
      </div>
    </>

  );
}
