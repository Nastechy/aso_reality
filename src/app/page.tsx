import FeaturedPropertiesSection from "@/components/FeaturedProperties";
import About from "@/components/aboutContent";
import ContactSection from "@/components/contactus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import StatsComponent from "@/components/stat";
import VisionMissionComponent from "@/components/visionandmission";
import WhyChooseAsoRealty from "@/components/whychoose";


export const metadata = {
  title: "Aso Realty - Trusted Real Estate in Nigeria",
  description: "Find your dream home or investment with Aso Realty. We offer verified listings, expert agents, and secure transactions.",
  alternates: {
    canonical: "https://www.asorealty.com/",
  },
  openGraph: {
    title: "Aso Realty - Trusted Real Estate in Nigeria",
    description: "Find your dream home or investment with Aso Realty. We offer verified listings, expert agents, and secure transactions.",
    url: "https://www.asorealty.com/",
    images: [
      {
        url: "/asologo.png",
        width: 800,
        height: 600,
        alt: "Aso Realty Logo",
      },
    ],
    siteName: "Aso Realty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aso Realty - Trusted Real Estate in Nigeria",
    description: "Find your dream home or investment with Aso Realty.",
    images: ["/asologo.png"],
  },
};



export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="">
        <Hero />
        <StatsComponent />
        <About />
        <VisionMissionComponent />
        <FeaturedPropertiesSection />
        <WhyChooseAsoRealty />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

