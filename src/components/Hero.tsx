'use client';

// ============================================
// IMPORTS
// ============================================
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroDetails } from '@/data/hero';
import AvailableButton from './AvailableButton';
import ComingSoonButton from './ComingSoonButton';

// ============================================
// HERO COMPONENT
// ============================================
const Hero: React.FC = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // ============================================
    // ROTATING TEXT INTERVAL
    // ============================================
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prev) => (prev + 1) % heroDetails.rotatingTexts.length);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    // ============================================
    // RENDER
    // ============================================
    return (
        <section className="relative flex items-center justify-center pb-20 sm:pb-32 md:pb-40 pt-32 md:pt-40 px-5">
            {/* Background Grid */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-20 sm:h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            {/* Content Container */}
            <div className="text-center">
                <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
                    
                    {/* Powered by Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-400 text-[10px] sm:text-sm md:text-base mb-2 sm:mb-4 tracking-wide"
                    >
                        Powered by Cognir AI
                    </motion.p>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter whitespace-normal">
                        {heroDetails.heading}
                    </h1>

                    {/* Rotating Text with Glow Effect */}
                    <div className="mt-1 sm:mt-3 py-0 sm:py-1 flex items-center justify-center overflow-visible">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTextIndex}
                                initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)", y: 20 }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, filter: "blur(8px)", y: -20 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Animated Background Glow */}
                                <motion.span
                                    animate={{ 
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [0.95, 1.05, 0.95]
                                    }}
                                    transition={{ 
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 blur-xl rounded-lg"
                                />
                                
                                {/* Rotating Text */}
                                <span className="relative z-10 text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter whitespace-nowrap">
                                    {heroDetails.rotatingTexts[currentTextIndex]}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Subheading */}
                <p className="mt-3 sm:mt-6 text-foreground mx-auto text-[11px] sm:text-base px-6 sm:px-0 leading-relaxed w-full max-w-[280px] sm:max-w-lg">
                    {heroDetails.subheading}
                </p>

                {/* CTA Buttons */}
                <div className="mt-5 sm:mt-8 w-full flex justify-center">
                    <div className="flex flex-row items-center gap-1.5 sm:gap-3">
                        <AvailableButton dark />
                        <ComingSoonButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;