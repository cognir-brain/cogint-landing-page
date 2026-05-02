import { motion } from "framer-motion"
import { childVariants } from "./Threats"

interface ThreatBulletProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ThreatBullet: React.FC<ThreatBulletProps> = ({ title, description, icon }) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-4 gap-1 lg:gap-4 lg:flex-row lg:items-start border-b border-gray-200 pb-4 last:border-0"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 w-fit text-black">
                {icon}
            </div>
            <div className="text-center lg:text-left">
                <h4 className="text-sm sm:text-base font-semibold text-foreground mb-0.5">
                    {title}
                </h4>
                <p className="text-[11px] sm:text-sm text-foreground-accent leading-tight">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default ThreatBullet