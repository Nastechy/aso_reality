
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", route: "/" },
    { label: "Properties", route: "/properties" },
    { label: "About Us", route: "/aboutUs" },
    { label: "Our Team", route: "/ourTeam" },
    { label: "Contact Us", route: "/contactUs" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (route: string) => {
        if (route === "/") return pathname === "/";
        return pathname === route || pathname.startsWith(route + "/");
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#08194A] shadow">
            <div className=" flex flex-col">
                <div className="flex items-center justify-between md:px-20 px-3 h-16 md:h-24">
                    <div>
                        <Link href="/">
                            <Image src="/asologo.png" alt="Aso company Logo" width={100} height={50} />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-16 font-[500] text-[14px]">
                        {navLinks.map(({ label, route }) => (
                            <Link
                                key={route}
                                href={route}
                                className={cn(
                                    "transition-transform font-bold",
                                    isActive(route) ? "text-[#981314]" : "text-white hover:scale-110"
                                )}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                    {/* Desktop CTA */}
                    <div className="hidden lg:flex">
                        <Link href="/properties" className="w-full">
                            <Button className="bg-[#981314] hover:bg-[#08194A] cursor-pointer text-white rounded-[5px] px-3 font-bold w-full">
                                Explore Properties
                            </Button>
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                    {/* Mobile menu */}
                    <div
                        className={cn(
                            "absolute top-full left-0 right-0 bg-[#0b1020] border-[1px] border-[#232225] border-t-0 rounded-b-[20px] shadow-lg p-4 transition-all duration-300 transform md:hidden",
                            isMenuOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                        )}
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map(({ label, route }) => (
                                <Link
                                    key={route}
                                    href={route}
                                    className={cn(
                                        "transition-transform px-4 font-bold",
                                        isActive(route) ? "text-[#981314]" : "text-white hover:scale-110"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Button
                                    className="bg-[#981314] hover:bg-[#08194A] cursor-pointer text-white rounded-[10px] px-3 font-bold w-full"
                                    asChild
                                >
                                    <Link href="/properties" onClick={() => setIsMenuOpen(false)}>
                                        Explore Properties
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:px-24 px-8">
                    <div className="text-white text-[10px] font-extrabold ">RC: 7917733</div>
                </div>
            </div>

        </nav>
    );
}
