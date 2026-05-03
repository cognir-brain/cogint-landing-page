"use client"

// ============================================
// IMPORTS
// ============================================
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { ctaDetails } from '@/data/cta';

// ============================================
// CTA COMPONENT
// ============================================
const CTA: React.FC = () => {
    return (
        <section id= "cta" className="relative flex items-center justify-center py-20 sm:py-28 md:py-36 px-5 scroll-mt-24">
            {/* Background Grid */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter"
                >
                    <span className="block sm:inline">Your Infrastructure Won&apos;t</span>
                    <span className="block sm:inline"> Protect Itself, We Will.</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-3 sm:mt-4 text-foreground mx-auto text-[11px] sm:text-base px-4 sm:px-6 leading-relaxed w-full max-w-[320px] sm:max-w-2xl"
                >
                    {ctaDetails.description}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 sm:mt-8 w-full flex justify-center"
                >
                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
                        {ctaDetails.buttons.map((button, index) => (
                            <button
                                key={index}
                                className={`
                                    flex items-center justify-center gap-2 px-5 sm:px-6 py-1.5 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 text-[11px] sm:text-base w-full sm:w-auto
                                    ${button.primary 
                                        ? 'bg-foreground text-white hover:opacity-80' 
                                        : 'bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-white'
                                    }
                                `}
                            >
                                {/* Lampu Hijau hanya untuk Request Demo */}
                                {button.text === 'Request Demo' && (
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                )}
                                {button.text}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Checklist Items */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 sm:mt-8 flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-5"
                >
                    {ctaDetails.checklists.map((item, index) => (
                        <div key={index} className="flex items-center gap-1.5">
                            <FaCheckCircle className="text-cyan-500 text-[9px] sm:text-sm" />
                            <span className="text-[8px] sm:text-sm text-foreground-accent whitespace-nowrap">{item}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default CTA;