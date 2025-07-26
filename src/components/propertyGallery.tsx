"use client";
import React, { useState } from "react";
import Image from "next/image";


interface GalleryProps {
    images: string[];
}

const PropertyGallery: React.FC<GalleryProps> = ({ images }) => {
    const [main, setMain] = useState(images[0]);
    return (
        <div>
            <Image
                width={0}
                height={0}
                src={main}
                alt="Property"
                className="w-full h-56 md:h-72 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none mb-3"
            />
            <div className="flex gap-2">
                {images.map((img, i) => (
                    <Image
                        width={0}
                        height={0}
                        key={img + i}
                        src={img}
                        alt="Thumbnail"
                        className={`h-14 w-16 object-cover rounded-md border-2 cursor-pointer transition
              ${main === img ? "border-[#981314] shadow" : "border-transparent"}
            `}
                        onClick={() => setMain(img)}
                        style={{ opacity: main === img ? 1 : 0.6 }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PropertyGallery;
