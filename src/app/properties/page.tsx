import Footer from "@/components/footer";
import AllPropertiesPage from "@/components/pageSections/allProperties";

export const metadata = {
  title: "Properties - Aso Realty",
  description: "Browse all available properties for sale and rent. Find your dream home or investment opportunity with Aso Realty.",
  alternates: {
    canonical: "https://www.asorealty.com/properties",
  },
  openGraph: {
    title: "Properties - Aso Realty",
    description: "Browse all available properties for sale and rent. Find your dream home or investment opportunity with Aso Realty.",
    url: "https://www.asorealty.com/properties",
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
    title: "Properties - Aso Realty",
    description: "Browse all available properties for sale and rent.",
    images: ["/asologo.png"],
  },
};

export default function PropertiesPage() {
  return (
    <div className="bg-white min-h-screen">
      <AllPropertiesPage />
      <Footer />
    </div>
  );
}
