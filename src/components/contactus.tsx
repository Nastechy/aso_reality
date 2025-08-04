"use client"

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactFormData {
    fullName: string;
    email: string;
    message: string;
}

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setFormData({ fullName: '', email: '', message: '' });

            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <section className="w-full min-h-screen bg-white py-10 md:py-20 px-2 md:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
                        CONTACT US
                    </h2>
                    <p className="text-[14px] md:text-[16px] text-gray-600 max-w-2xl mx-auto">
                        We’d love to hear from you. Reach out today and let us know how we can help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    <div className="flex flex-col h-full">
                        <div className="bg-[#902923] rounded-3xl flex flex-col justify-center p-4 md:p-8 min-h-[300px] md:min-h-[350px] shadow-md">
                            <div className="mb-4 text-[10px] md:text-xs tracking-widest text-white opacity-80">LETS TALK</div>
                            <div className="md:text-2xl text-[18px] font-semibold text-white mb-8">Speak With Our Expert</div>
                            <div className="flex flex-col gap-5 ">
                                <div className="flex items-center gap-3">
                                    <span className="bg-white/20 rounded-lg p-2 flex items-center">
                                        <Phone className="md:w-5 md:h-5 h-3 w-3 text-white" />
                                    </span>
                                    <span className="text-white text-[14px] md:text-base">08037616518, 08034109687</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-white/20 rounded-lg p-2 flex items-center">
                                        <Mail className="md:w-5 md:h-5 h-3 w-3 text-white" />
                                    </span>
                                    <a
                                        href="mailto:asorealtylimted@gmail.com"
                                        className="text-white underline text-[14px] md:text-base hover:text-[#ffd700] transition"
                                    >
                                        asorealtylimted@gmail.com
                                    </a>                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="bg-white/20 rounded-lg p-2 flex items-center">
                                        <MapPin className="md:w-5 md:h-5 h-3 w-3 text-white" />
                                    </span>
                                    <span className="text-white text-[14px] md:text-base">C1, Amaka Mall, 9 San Zangon Daura Street, Guzape-Abuja</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-10 md:mt-20 hidden md:block " >
                            <div className="inline-flex items-center space-x-2 bg-gray-100 px-6 py-3 rounded-full ">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                                </div>
                                <span className="text-[12px] font-medium text-gray-700">
                                    Join 1000+ satisfied customers
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl shadow-2xl px-3 md:px-8 py-6 md:py-8  border border-gray-100 h-full flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-[18px] font-bold text-gray-900 mb-2">
                                FILL THE FORM BELOW
                            </h3>
                            <p className="text-gray-600 text-[14px]">
                                We&apos;ll get back to you within 24 hours
                            </p>
                        </div>

                        {isSubmitted && (
                            <div className="mb-2 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                                <CheckCircle className="text-green-600" size={20} />
                                <p className="text-green-800 font-medium">Message sent successfully!</p>
                            </div>
                        )}

                        <div onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                            <div className="group">
                                <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full text-[10px] px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="block text-[12px] font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 text-[10px] py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 group-hover:border-gray-300"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="group flex-1 flex flex-col">
                                <label className="block text-[12px] font-semibold text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full text-[10px] px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none group-hover:border-gray-300 flex-1 min-h-32"
                                    placeholder="Write your Message"
                                    required
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-[#981314] cursor-pointer to-red-700 text-white font-bold py-3 px-8 rounded-xl hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="md:w-5 md:h-5 h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Submit Now</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;