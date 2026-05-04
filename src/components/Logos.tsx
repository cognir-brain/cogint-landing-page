'use client';

// ============================================
// IMPORTS
// ============================================
import React, { useEffect, useState } from 'react';

// ============================================
// DATA & TYPES
// ============================================
interface ComplianceItem {
    name: string;
    logo: string;
}

const complianceItems: ComplianceItem[] = [
    { name: 'ISO 27001', logo: 'ISO' },
    { name: 'NIST AI RMF', logo: 'NIST' },
    { name: 'OWASP', logo: 'OWASP' },
    { name: 'SOC 2 Type II', logo: 'SOC' },
    { name: 'GDPR Compliant', logo: 'GDPR' },
    { name: 'OWASP Top 10 for LLM/AI', logo: 'OWASP' },
    { name: 'MITRE DISARM', logo: 'MITRE' },
];

// ============================================
// MAIN COMPONENT
// ============================================
const ComplianceSlider: React.FC = () => {
    // ============================================
    // STATE & HOOKS
    // ============================================
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile: duplikasi 2x, Desktop: duplikasi 3x
    const duplicatedItems = isMobile 
        ? [...complianceItems, ...complianceItems]
        : [...complianceItems, ...complianceItems, ...complianceItems];

    // ============================================
    // RENDER
    // ============================================
    return (
        <section className="py-12 sm:py-20 px-0 bg-background overflow-hidden">
            
            {/* ============================================
                TITLE SECTION
            ============================================ */}
            <div className="text-center mb-4 sm:mb-4 px-5">
                <h2 className="text-xs sm:text-lg md:text-xl font-bold text-foreground tracking-wide">
                    COMPLIANT BY DESIGN, SECURE BY STANDARD
                </h2>
            </div>

            {/* ============================================
                SLIDER SECTION
            ============================================ */}
            <div className="relative w-full overflow-hidden">
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollDesktop {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                        width: max-content;
                        display: flex;
                        gap: 0.75rem;
                        padding: 1.2rem 0;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                    @keyframes glowPulse {
                        0% {
                            box-shadow: 0 0 5px #06b6d4, 0 0 10px #06b6d4;
                        }
                        100% {
                            box-shadow: 0 0 15px #06b6d4, 0 0 25px #06b6d4;
                        }
                    }
                    .card-glow {
                        transition: all 0.2s ease;
                    }
                    .card-glow:hover {
                        animation: glowPulse 0.8s ease-in-out infinite alternate;
                        transform: scale(1.05);
                        border-color: #06b6d4;
                        position: relative;
                        z-index: 20;
                    }
                    @media (min-width: 640px) {
                        .animate-scroll {
                            animation: scrollDesktop 25s linear infinite;
                            gap: 1.5rem;
                            padding: 2rem 0;
                        }
                    }
                `}</style>

                {/* ============================================
                    SLIDER ITEMS
                ============================================ */}
                <div className="animate-scroll">
                    {duplicatedItems.map((item, index) => (
                        <div
                            key={`${item.name}-${index}`}
                            className="card-glow flex flex-col items-center justify-center w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white border border-gray-200 rounded-xl shadow-sm cursor-pointer flex-shrink-0"
                        >
                            {/* Logo */}
                            <div className="text-[10px] sm:text-lg md:text-xl font-bold text-gray-700">
                                {item.logo}
                            </div>
                            {/* Standard Name */}
                            <div className="text-[5px] sm:text-xs text-gray-500 text-center mt-0 sm:mt-1 px-0.5 sm:px-1 leading-tight">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComplianceSlider;