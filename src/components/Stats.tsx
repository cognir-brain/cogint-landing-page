"use client"

// ============================================
// IMPORTS
// ============================================
import { useEffect, useRef, useState } from "react";
import { statsDetails } from "@/data/stats";
import { motion, useInView } from "framer-motion";

// ============================================
// STATS COMPONENT
// ============================================
const Stats: React.FC = () => {
    const ref = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [progress, setProgress] = useState({ faster: 0, reduction: 0 });

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const interval = 20;
            const steps = duration / interval;
            
            let step = 0;
            const timer = setInterval(() => {
                step++;
                setProgress({
                    faster: Math.min(99, Math.floor((step / steps) * 99)),
                    reduction: Math.min(75, Math.floor((step / steps) * 75))
                });
                if (step >= steps) clearInterval(timer);
            }, interval);
            
            return () => clearInterval(timer);
        }
    }, [isInView]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };
        
        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseenter', () => setIsHovering(true));
            container.addEventListener('mouseleave', () => setIsHovering(false));
        }
        
        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseenter', () => setIsHovering(true));
                container.removeEventListener('mouseleave', () => setIsHovering(false));
            }
        };
    }, []);

    return (
        <section id="stats" className="mt-10 mb-5 lg:my-20" ref={ref}>
            <div 
                ref={containerRef}
                className="relative h-full w-full z-10 mx-auto py-12 sm:py-20 overflow-hidden cursor-pointer"
            >
                {/* ============================================
                    BACKGROUND
                ============================================ */}
                <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                </div>

                {/* ============================================
                    SPOTLIGHT EFFECT
                ============================================ */}
                {isHovering && (
                    <div 
                        className="absolute pointer-events-none rounded-full z-20"
                        style={{
                            left: mousePosition.x - 200,
                            top: mousePosition.y - 200,
                            width: '400px',
                            height: '400px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0) 70%)',
                            transition: 'opacity 0.1s ease',
                        }}
                    />
                )}

                {/* ============================================
                    CONTENT
                ============================================ */}
                <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 relative z-10">
                    
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-3 sm:mb-4 max-w-2xl">
                        {statsDetails.heading}
                    </h2>

                    {/* Subheading */}
                    <p className="mx-auto text-[11px] sm:text-base max-w-[280px] sm:max-w-xl leading-relaxed">
                        {statsDetails.subheading}
                    </p>

                    {/* Statistics Numbers */}
                    <div className="flex flex-row items-center justify-center gap-6 sm:gap-16 mt-6 sm:mt-10">
                        <div className="text-center">
                            <motion.div 
                                className="text-3xl sm:text-5xl md:text-7xl font-bold text-cyan-400"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {progress.faster}%
                            </motion.div>
                            <p className="text-[9px] sm:text-sm text-gray-300 mt-1 leading-tight">
                                FASTER RESPONSE
                            </p>
                        </div>

                        <div className="text-center">
                            <motion.div 
                                className="text-3xl sm:text-5xl md:text-7xl font-bold text-cyan-400"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {progress.reduction}%
                            </motion.div>
                            <p className="text-[9px] sm:text-sm text-gray-300 mt-1 leading-tight">
                                REDUCTION IN SOC BURDEN
                            </p>
                        </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="w-full max-w-[280px] sm:max-w-2xl mx-auto mt-6 sm:mt-12">
                        <div className="flex flex-col gap-2 sm:gap-4">
                            <div className="text-left">
                                <div className="flex justify-between mb-0.5">
                                    <span className="text-[8px] sm:text-xs text-gray-400">BEFORE COGINT</span>
                                    <span className="text-[8px] sm:text-xs text-gray-400">Hours/Day</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-3">
                                    <motion.div 
                                        className="bg-red-500 h-1.5 sm:h-3 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "100%" } : {}}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>

                            <div className="text-left">
                                <div className="flex justify-between mb-0.5">
                                    <span className="text-[8px] sm:text-xs text-cyan-400">AFTER COGINT</span>
                                    <span className="text-[8px] sm:text-xs text-cyan-400">Milliseconds</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-3">
                                    <motion.div 
                                        className="bg-cyan-400 h-1.5 sm:h-3 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: "5%" } : {}}
                                        transition={{ duration: 1.5, delay: 0.7 }}
                                        style={{ width: "5%" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-6 sm:mt-10 flex flex-row items-center justify-center gap-2 sm:gap-4">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white text-black px-4 sm:px-6 py-1.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-[11px] sm:text-base hover:shadow-[0_0_15px_#06b6d4,0_0_25px_#06b6d4]"
                        >
                            Get Started
                        </motion.button>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="bg-transparent border border-white text-white px-4 sm:px-6 py-1.5 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 text-[11px] sm:text-base hover:shadow-[0_0_15px_#06b6d4,0_0_25px_#06b6d4]"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;