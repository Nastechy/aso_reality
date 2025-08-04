"use client"

import React from 'react';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

interface FooterProps {
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer className={`bg-[#08194A] text-white py-12 px-6 ${className}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1 ">
                        <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                            ASO REALTY LIMITED
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            ASO Realty Limited (RC: 7917733) is dedicated to
                            making property ownership accessible, secure, and
                             straightforward, helping you invest confidently in your future.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                                aria-label="Github"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div className='ml-0 md:ml-6'>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Career
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Help
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Customer Support
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Delivery Details
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Stay Updated
                        </h3>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                onClick={() => console.log('Subscribe clicked')}
                                className="px-4 py-2 bg-[#981314] text-white rounded-r-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-[12px] text-gray-400">
                            © {new Date().getFullYear()} ASO Really Limited. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-[12px]">
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;