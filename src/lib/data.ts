// properties.ts
export type Property = {
  id: number;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  images: string[];
  tag: string;
  tagColor: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Spacious Terrace House",
    location: "Lagos",
    rating: 4.8,
    reviews: 348,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sqft",
    images: ["/image3.jpg", "/house1.jpg", "/house2.jpg"],
    tag: "SALE",
    tagColor: "bg-red-500",
    description: "A beautiful, spacious terrace house in Lagos with modern finishes and family-friendly amenities."
  },
  {
    id: 2,
    title: "Modern Villa Estate",
    location: "Abuja",
    rating: 4.9,
    reviews: 256,
    bedrooms: 5,
    bathrooms: 4,
    area: "3,200 sqft",
    images: ["/house1.jpg", "/house2.jpg", "/image3.jpg"],
    tag: "NEW",
    tagColor: "bg-green-500",
    description: "Modern villa estate in Abuja, luxury amenities, serene environment and top-notch security."
  },
  {
    id: 3,
    title: "Luxury Penthouse",
    location: "Victoria Island",
    rating: 4.7,
    reviews: 189,
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sqft",
    images: ["/house2.jpg", "/image3.jpg", "/house3.jpg"],
    tag: "SALE",
    tagColor: "bg-red-500",
    description: "A luxury penthouse with panoramic city views, rooftop pool, and elegant living spaces."
  },
  {
    id: 4,
    title: "Family Duplex",
    location: "Lekki",
    rating: 4.6,
    reviews: 412,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,100 sqft",
    images: ["/house3.jpg", "/house4.jpg", "/house1.jpg"],
    tag: "HOT",
    tagColor: "bg-orange-500",
    description: "Spacious duplex ideal for families, great neighborhood, close to schools and shops."
  },
  {
    id: 5,
    title: "Contemporary Bungalow",
    location: "Ikeja",
    rating: 4.5,
    reviews: 298,
    bedrooms: 3,
    bathrooms: 2,
    area: "1,600 sqft",
    images: ["/house4.jpg", "/image3.jpg", "/house2.jpg"],
    tag: "SALE",
    tagColor: "bg-red-500",
    description: "A contemporary bungalow in Ikeja, secure estate, beautiful landscape, and private backyard."
  },
  {
    id: 6,
    title: "Executive Mansion",
    location: "Banana Island",
    rating: 5.0,
    reviews: 156,
    bedrooms: 6,
    bathrooms: 5,
    area: "4,500 sqft",
    images: ["/image3.jpg", "/house1.jpg", "/house3.jpg"],
    tag: "PREMIUM",
    tagColor: "bg-purple-500",
    description: "Live in luxury with this executive mansion, exclusive location and top-class facilities."
  },
  {
    id: 7,
    title: "Smart Home Villa",
    location: "Ikoyi",
    rating: 4.8,
    reviews: 223,
    bedrooms: 4,
    bathrooms: 4,
    area: "2,800 sqft",
    images: ["/house1.jpg", "/house2.jpg", "/house4.jpg"],
    tag: "NEW",
    tagColor: "bg-green-500",
    description: "A smart home villa equipped with the latest home automation tech and solar energy."
  },
  {
    id: 8,
    title: "Garden View Residence",
    location: "Magodo",
    rating: 4.4,
    reviews: 367,
    bedrooms: 3,
    bathrooms: 3,
    area: "1,900 sqft",
    images: ["/house2.jpg", "/house1.jpg", "/image3.jpg"],
    tag: "SALE",
    tagColor: "bg-red-500",
    description: "Enjoy tranquility in this garden view residence with a relaxing private courtyard."
  },
  {
    id: 9,
    title: "City Centre Apartment",
    location: "Yaba",
    rating: 4.3,
    reviews: 181,
    bedrooms: 2,
    bathrooms: 2,
    area: "1,200 sqft",
    images: ["/house3.jpg", "/house4.jpg", "/image3.jpg"],
    tag: "RENT",
    tagColor: "bg-blue-500",
    description: "City centre apartment close to business hubs, fully serviced, high-speed internet included."
  },
  {
    id: 10,
    title: "Beachfront Chalet",
    location: "Lekki Phase 1",
    rating: 4.9,
    reviews: 142,
    bedrooms: 5,
    bathrooms: 5,
    area: "3,600 sqft",
    images: ["/house4.jpg", "/house1.jpg", "/house2.jpg"],
    tag: "HOT",
    tagColor: "bg-orange-500",
    description: "Wake up to the sound of waves in this stunning beachfront chalet, private access to the beach."
  },
  {
    id: 11,
    title: "Classic Colonial Home",
    location: "Surulere",
    rating: 4.2,
    reviews: 221,
    bedrooms: 4,
    bathrooms: 3,
    area: "2,200 sqft",
    images: ["/image3.jpg", "/house3.jpg", "/house2.jpg"],
    tag: "SALE",
    tagColor: "bg-red-500",
    description: "Classic colonial home with restored features and large entertaining spaces."
  },
  {
    id: 12,
    title: "Skyline Loft",
    location: "Marina",
    rating: 4.8,
    reviews: 312,
    bedrooms: 3,
    bathrooms: 3,
    area: "2,000 sqft",
    images: ["/house1.jpg", "/house2.jpg", "/house4.jpg"],
    tag: "PREMIUM",
    tagColor: "bg-purple-500",
    description: "Modern skyline loft with breathtaking city views and floor-to-ceiling windows."
  }
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
