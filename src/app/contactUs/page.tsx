import React from "react";
import Footer from "@/components/footer";
import ContactSection from "@/components/contactus";
import ContactHeroSection from "@/components/pageSections/ContactHeroSection";


export const metadata = {
    title: "Contact Us - Aso Realty",
    description: "We’d love to hear from you. Reach out today and let us know how we can help.",
    alternates: {
        canonical: "https://www.asorealty.com/contactUs",
    },
    openGraph: {
        title: "Contact Us - Aso Realty",
        description: "We’d love to hear from you. Reach out today and let us know how we can help.",
        url: "https://www.asorealty.com/contactUs",
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
        title: "Contact Us - Aso Realty",
        description: "We’d love to hear from you. Reach out today and let us know how we can help.",
        images: ["/asologo.png"],
    },
};


export default function ContactPage() {
    return (
        <>
            <div className="min-h-screen bg-white">
                <ContactHeroSection />
                <ContactSection />
                <Footer />
            </div>
        </>

    );
}
