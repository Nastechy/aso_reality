"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { MessageCircle, Phone, Mail as MailIcon, MapPin } from "lucide-react";

const PHONE = "+2348037616518";
const EMAIL = "asorealtylimted@gmail.com";
const MAPS_URL =
    "https://www.google.com/maps/search/?api=1&query=C1,+Amaka+Mall,+9+San+Zangon+Daura+Street,+Guzape,+Abuja,+Nigeria,+900211";

const FloatingActions: React.FC = () => {
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const [showCall, setShowCall] = useState(false);
    const [showMail, setShowMail] = useState(false);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 100 });
    }, []);

    const openMap = () => {
        window.open(MAPS_URL, "_blank", "noopener,noreferrer");
    };

    const toggleMessage: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        setShowWhatsApp((v) => !v);
        setShowCall((v) => !v);
        setShowMail((v) => !v);
        setShowMap((v) => !v);
    };

    return (
        <>
            <style jsx global>{`
        @keyframes aso-heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.12); }
          28% { transform: scale(1); }
          42% { transform: scale(1.12); }
          70% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-asorealty-heartbeat {
          animation: aso-heartbeat 1.6s ease-in-out infinite;
          transform-origin: center center;
          will-change: transform;
          /* Allow per-icon delay */
          animation-delay: var(--hb-delay, 0s);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-asorealty-heartbeat {
            animation: none !important;
          }
        }
      `}</style>

            <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-2 md:right-6 md:bottom-6">
                {showMap && (
                    <button
                        type="button"
                        onClick={openMap}
                        aria-label="Open map"
                        className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#902923] hover:bg-[#902823b8] transition-all shadow-md flex items-center justify-center ring-1 ring-white/10 backdrop-blur"
                    >
                        <MapPin
                            className="h-4 w-4 text-white animate-asorealty-heartbeat"
                            style={{ ["--hb-delay" as any]: "0s" }}
                            strokeWidth={1.75}
                        />
                    </button>
                )}

                {showMail && (
                    <Link href={`mailto:${EMAIL}`} aria-label="Send email">
                        <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#08194A] hover:bg-[#08184ad6] transition-all shadow-md flex items-center justify-center ring-1 ring-white/10 backdrop-blur">
                            <MailIcon
                                className="h-4 w-4 text-white animate-asorealty-heartbeat"
                                style={{ ["--hb-delay" as any]: "0.1s" }}
                                strokeWidth={1.75}
                            />
                        </div>
                    </Link>
                )}

                {showCall && (
                    <Link href={`tel:${PHONE}`} aria-label="Call">
                        <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#61636A] hover:bg-neutral-900 transition-all shadow-md flex items-center justify-center ring-1 ring-white/10 backdrop-blur">
                            <Phone
                                className="h-4 w-4 text-white animate-asorealty-heartbeat"
                                style={{ ["--hb-delay" as any]: "0.2s" }}
                                strokeWidth={1.75}
                            />
                        </div>
                    </Link>
                )}

                {showWhatsApp && (
                    <Link href="https://wa.me/+2348037616518" aria-label="WhatsApp">
                        <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-emerald-600/80 hover:bg-emerald-600 transition-all shadow-md flex items-center justify-center ring-1 ring-white/10 backdrop-blur">
                            <MessageCircle
                                className="h-4 w-4 text-white animate-asorealty-heartbeat"
                                style={{ ["--hb-delay" as any]: "0.3s" }}
                                strokeWidth={1.75}
                            />
                        </div>
                    </Link>
                )}

                <div
                    onClick={toggleMessage}
                    role="button"
                    aria-label="Open contact actions"
                    className="h-10 w-10 md:h-11 md:w-11 rounded-full bg-[#902923] hover:bg-neutral-900 transition-colors shadow-lg flex items-center justify-center cursor-pointer ring-1 ring-white/10 backdrop-blur"
                >
                    <MessageCircle
                        className="h-4 w-4 md:h-5 md:w-5 text-white animate-asorealty-heartbeat"
                        style={{ ["--hb-delay" as any]: "0.4s" }}
                        strokeWidth={1.75}
                        aria-hidden="true"
                    />
                </div>
            </div>
        </>
    );
};

export default FloatingActions;
