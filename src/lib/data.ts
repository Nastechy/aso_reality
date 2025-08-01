// properties.ts
export type Property = {
  id: number;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  area: string;
  images: string[];
  tagColor: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Pearlview Residences Waru, Apo Topaz (Tafyi)",
    location: "Apo",
    rating: 4.8,
    reviews: 348,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building2.jpg", "/Building2.jpg", "/Building2.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 2,
    title: "Primelux Estate Wumba district",
    location: "Apo",
    rating: 4.9,
    reviews: 256,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building1.jpg", "/Building1.jpg", "/Building1.jpg"],
    tagColor: "bg-green-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 3,
    title: "Casa Moderna, Wingate Estate",
    location: "Kuje",
    rating: 4.7,
    reviews: 189,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building3.jpg", "/Building3.jpg", "/Building3.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 4,
    title: "Sunview City Estate ",
    location: "Kuje",
    rating: 4.6,
    reviews: 412,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building5.jpg", "/Building5.jpg", "/Building5.jpg"],
    tagColor: "bg-orange-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 5,
    title: "Dynasty City Estate Guzape 2",
    location: "Guzape",
    rating: 4.5,
    reviews: 298,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building4.jpg", "/Building4.jpg", "/Building4.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 6,
    title: "Double King Villa phase 1&2",
    location: "Guzape 2",
    rating: 5.0,
    reviews: 156,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building6.jpg", "/Building6.jpg", "/Building6.jpg"],
    tagColor: "bg-purple-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 7,
    title: "Grandeur City Aso. Ext",
    location: "Asokoro Ext.",
    rating: 4.8,
    reviews: 223,
    area: "200 sqm, 300sqm, 400sqm,",
    images: ["/Building7.jpg", "/Building7.jpg", "/Building7.jpg"],
    tagColor: "bg-green-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 8,
    title: "Royal Hills Aso. Ext",
    location: "Asokoro Ext.",
    rating: 4.4,
    reviews: 367,
    area: "200 sqm, 300sqm, 400sqm,",
    images: ["/Building8.jpg", "/Building8.jpg", "/Building8.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 9,
    title: "Pearlview Residences Waru, Apo Topaz (Tafyi)",
    location: "Apo",
    rating: 4.3,
    reviews: 181,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building9.jpg", "/Building9.jpg", "/Building9.jpg"],
    tagColor: "bg-blue-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 10,
    title: "Casa Moderna, Wingate Estate",
    location: "Kuje",
    rating: 4.9,
    reviews: 142,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building10.jpg", "/Building10.jpg", "/Building10.jpg"],
    tagColor: "bg-orange-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  {
    id: 11,
    title: "Dynasty City Estate Guzape 2",
    location: "Guzape",
    rating: 4.2,
    reviews: 221,
    area: "250 sqm, 350sqm, 450sqm,",
    images: ["/Building11.jpg", "/Building11.jpg", "/Building11.jpg"],
    tagColor: "bg-red-500",
    description: "These has different sizes, 250sqm for terrace duplex, 350sqm for semi-detached duplex, 450sqm for penthouses, 550sqm for fully detached duplex & 1000sqm for block of flat."
  },
  // {
  //   id: 12,
  //   title: "Skyline Loft",
  //   location: "Marina",
  //   rating: 4.8,
  //   reviews: 312,
  //   bedrooms: 3,
  //   bathrooms: 3,
  //   area: "2,000 sqft",
  //   images: ["/Building12.jpg", "/Building12.jpg", "/Building12.jpg"],
  //   tagColor: "bg-purple-500",
  //   description: "Modern skyline loft with breathtaking city views and floor-to-ceiling windows."
  // }
];



// lib/data.ts
export const testimonials = [
  {
    id: 1,
    name: "Maryam Adeyemi",
    role: "First-time Home Buyer",
    photo: "/Invisible.png",
    text: "Aso Realty made buying my first home a breeze! The team supported me every step of the way, answered all my questions, and got me a great deal.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Okoli",
    role: "Property Investor",
    photo: "/Invisible.png",
    text: "I've worked with other agencies, but Aso Realty stands out for their transparency and professionalism. I felt secure at every stage of the process.",
    rating: 5,
  },
  {
    id: 3,
    name: "Grace Okechukwu",
    role: "Land Purchaser",
    photo: "/Invisible.png",
    text: "From flexible payment plans to smooth documentation, everything was handled perfectly. I recommend Aso Realty to anyone looking for peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mustapha Garba",
    role: "Land Owner",
    photo: "/Invisible.png",
    text: "The team delivered on every promise. Secure, reliable, and professional throughout.",
    rating: 5,
  },
  {
    id: 5,
    name: "Ngozi Emeka",
    role: "Property Seller",
    photo: "/Invisible.png",
    text: "Their marketing and negotiation skills helped me sell my property quickly for a great price!",
    rating: 5,
  },
  {
    id: 6,
    name: "Samuel Adeniran",
    role: "Repeat Customer",
    photo: "/Invisible.png",
    text: "I’ve bought and sold with Aso Realty multiple times. Each experience has been excellent and stress-free.",
    rating: 5,
  },
];
