"use client"
import { motion, Variants } from "framer-motion"
import { threatsData } from "@/data/threats";
import ThreatBullet from "./ThreatBullet";
import ThreatDetector from "./ThreatDetector";

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

const Threats: React.FC = () => {
    const threat = threatsData[0];

    return (
        <section id="threats" className="threat-section bg-white scroll-mt-24">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                {/* Kolom Kiri - Text */}
                <div className="flex flex-wrap items-center w-full max-w-xl justify-start">
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            {/* Title */}
                            <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight sm:leading-none tracking-tighter whitespace-pre-line max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-none mx-auto lg:mx-0">
                                {threat.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-foreground-accent text-[11px] sm:text-base w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none mb-4">
                                {threat.description}
                            </p>
                        </motion.div>

                        {/* Bullets */}
                        <div className="mx-auto lg:ml-0 w-full max-w-[280px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-none">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4">
                                {threat.bullets.map((item, index) => (
                                    <ThreatBullet 
                                        key={index} 
                                        title={item.title} 
                                        icon={item.icon} 
                                        description={item.description} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kolom Kanan - Threat Detector */}
                <div className="mt-5 lg:mt-0 lg:order-2">
                    <div className="w-fit flex justify-start">
                        <ThreatDetector />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Threats;