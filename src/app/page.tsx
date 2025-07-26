import FeaturedPropertiesSection from "@/components/FeaturedProperties";
import About from "@/components/aboutContent";
import ContactSection from "@/components/contactus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
// import OurTeamSection from "@/components/ourteam";
import StatsComponent from "@/components/stat";
import TestimonialSection from "@/components/testimonial";
import VisionMissionComponent from "@/components/visionandmission";
import WhyChooseAsoRealty from "@/components/whychoose";



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
        <TestimonialSection />
        {/* <OurTeamSection /> */}
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

