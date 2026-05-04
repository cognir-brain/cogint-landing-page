"use client"
import { motion, Variants } from "framer-motion"
import { benefitsData } from "@/data/benefits";
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
                className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                {/* Container utama */}
                <div className="w-full max-w-6xl mx-auto text-center">
                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter max-w-[320px] sm:max-w-[450px] md:max-w-[750px] lg:max-w-none mx-auto">
                        {benefitsData.title}
                    </h3>
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter max-w-[320px] sm:max-w-[450px] md:max-w-[750px] lg:max-w-none mx-auto">
                        {benefitsData.titleHighlight}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 mx-auto leading-relaxed text-foreground-accent text-[11px] sm:text-base max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-3xl mb-5">
                        {benefitsData.description}
                    </p>

                    {/* 3 Column Grid */}
                    <div className="mx-auto w-full mt-6 lg:mt-12 max-w-[280px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-none">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                            {benefitsData.pillars.map((pillar, index) => (
                                <BenefitsColumn 
                                    key={index} 
                                    pillar={pillar} 
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Benefits