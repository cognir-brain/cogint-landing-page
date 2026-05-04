"use client"

import { motion } from "framer-motion"
import { childVariants } from "./Benefits"
import { IconType } from "react-icons";

interface Props {
    pillar: {
        name: string;
        description: string;
        icon: IconType;
        iconSize?: number;
        features?: string[];
    };
}

const BenefitsColumn: React.FC<Props> = ({ pillar }) => {
    const IconComponent = pillar.icon;
    
    return (
        <motion.div
            className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 text-center w-full mx-auto relative overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Icon */}
            <div className="flex justify-center mb-1 sm:mb-2 text-cyan-500 relative z-10">
                <IconComponent size={pillar.iconSize || 22} />
            </div>
            
            {/* Title */}
            <h4 className="text-xs sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1 relative z-10">
                {pillar.name}
            </h4>
            
            {/* Description */}
            <p className="text-[10px] sm:text-sm text-foreground-accent leading-tight relative z-10">
                {pillar.description}
            </p>
        </motion.div>
    )
}

export default BenefitsColumn