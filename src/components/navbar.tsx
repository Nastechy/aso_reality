
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { label: "Home", id: "home", route: "/" },
    { label: "Properties", id: "properties", route: "/properties" },
    { label: "About Us", id: "about", route: "/aboutUs" },
    { label: "Our Team", id: "ourTeam", route: "/ourTeam" },
    { label: "Contact Us", id: "contactUs", route: "/contactUs" },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [, setActiveLink] = useState<string | null>(null)
    // const router = useRouter()
    const pathname = usePathname()

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // const handleExploreProp = () => {
    //     setActiveLink("/contact")
    //     router.push("/contact")
    //     if (isMenuOpen) {
    //         setIsMenuOpen(false)
    //     }
    // }

    return (
        <nav className="flex items-center justify-between md:px-20 px-3 shadow sticky top-0 z-50">
            <div >
                <Link href="/" >
                    <Image src="/asologo.png" alt="aso company Logo" width={100} height={50} />
                </Link>
            </div>

            <div className="hidden md:flex items-center space-x-16 font-[500] text-[14px]">
                {navLinks.map(({ label, route }) => (
                    <Link
                        key={route}
                        href={route}
                        className={cn(
                            "text-white transition-transform transform font-bold",
                            pathname === route ||
                                (route === "/" && pathname === "/")
                                ? "text-[#981314]"
                                : "hover:scale-110"
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </div>
            <div className="hidden lg:flex">
                <Link href="/properties" className="w-full">
                    <Button
                        className="bg-[#981314] hover:bg-[#08194A] cursor-pointer text-white rounded-[5px] px-3 font-bold w-full"
                    >
                        Explore Properties
                    </Button>
                </Link>
            </div>
            <button
                className="md:hidden text-white p-2 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <div
                className={cn(
                    "absolute top-full left-0 right-0 bg-[#0b1020] border-[1px] border-[#232225] rounded-b-[20px] shadow-lg p-4 transition-all duration-300 transform md:hidden",
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
                                "text-white transition-transform transform px-4 font-bold",
                                pathname === route ||
                                    (route === "/" && pathname === "/")
                                    ? "text-[#981314]"
                                    : "hover:scale-110"
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
        </nav>
    )
}
