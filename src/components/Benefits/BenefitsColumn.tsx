"use client"

import { motion } from "framer-motion"
import { childVariants } from "./Benefits"
import { IconType } from "react-icons";

interface Props {
    tier: {
        name: string;
        description: string;
        icon: IconType;
        iconSize?: number;
        features?: string[];
    };
}

const BenefitsColumn: React.FC<Props> = ({ tier }) => {
    const IconComponent = tier.icon;
    
    return (
        <motion.div
            className="bg-white rounded-xl border border-gray-200 p-3 sm:p-4 text-center hover:shadow-md transition-shadow"
            variants={childVariants}
        >
            {/* Icon */}
            <div className="flex justify-center mb-1 sm:mb-2 text-cyan-500">
                <IconComponent size={tier.iconSize || 22} />
            </div>
            
            {/* Title */}
            <h4 className="text-xs sm:text-base font-semibold text-foreground mb-0.5 sm:mb-1">
                {tier.name}
            </h4>
            
            {/* Description */}
            <p className="text-[10px] sm:text-sm text-foreground-accent leading-tight">
                {tier.description}
            </p>
        </motion.div>
    )
}

export default BenefitsColumn