import React from "react";
import Footer from "@/components/footer";
import OurTeamSection from "@/components/ourteam";
import TestimonialSection from "@/components/testimonial";
import TeamHeroSection from "@/components/pageSections/TeamHeroSection";


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
        <TeamHeroSection />
        <div className="mx-2 my-5 md:m-10">
          <OurTeamSection />
          <TestimonialSection />
        </div>
        <Footer />
      </div>
    </>

  );
}
