"use client"
import { motion, Variants } from "framer-motion"
import { tiers } from "@/data/benefits";
import BenefitsColumn from "./BenefitsColumn";

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="benefits-section bg-white scroll-mt-24">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="flex flex-wrap items-center w-full max-w-xl lg:max-w-6xl justify-center mx-auto">
                    <div className="w-full text-center">
                        {/* Title - mobile: 2 baris, desktop: 1 baris */}
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter lg:whitespace-nowrap">
                            The Core Pillars of   
                        </h3>
                        <h3 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter lg:whitespace-nowrap">
                            Cognitive Intelligence Security
                        </h3>

                        {/* Description - mobile: max-w-[280px], desktop: lebih lebar */}
                        <p className="mt-3 mx-auto leading-relaxed text-foreground-accent text-[11px] sm:text-base max-w-[280px] lg:max-w-3xl">
                            Engineered to go beyond standard threat detection, powered by active artificial intelligence that thinks, learns, and neutralizes manipulation.
                        </p>

                        {/* 3 Column Grid - mobile: max-w-[280px], desktop: full */}
                        <div className="mx-auto w-full mt-6 lg:mt-12 max-w-[280px] lg:max-w-none">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
                                {tiers.map((tier, index) => (
                                    <BenefitsColumn 
                                        key={index} 
                                        tier={tier} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block lg:order-2">
                    {/* Optional placeholder */}
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits