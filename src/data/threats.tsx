import { FiAlertTriangle, FiBell, FiCpu } from "react-icons/fi";

export const threatsData = [
    {
        title: "When Cognitive Threats Evolve, Conventional Defenses Fall Behind.",
        description: "Modern information attacks move faster than human analysis. Rule-based approaches and manual fact-checking are no longer relevant against AI-driven disinformation, and every second of delay allows a false narrative to take root.",
        bullets: [
            {
                title: "Zero-Day Disinformation",
                description: "AI-generated narratives and deepfakes emerge without prior digital footprints, slipping past standard keyword monitors with no time left to react before they go viral.",
                icon: <FiAlertTriangle size={26} />
            },
            {
                title: "Analyst Fatigue",
                description: "Intelligence teams are buried under millions of daily social signals and data points. Critical manipulative campaigns slip through, not because they are invisible, but because they drown in the noise.",
                icon: <FiBell size={26} />
            },
            {
                title: "AI-Powered Manipulation",
                description: "Adversaries now leverage Generative AI to craft hyper-realistic hoaxes, automate bot networks, and spread weaponized narratives at massive scale, relentlessly. To fight this AI-driven warfare, an equally intelligent AI defense is required.",
                icon: <FiCpu size={26} />
            }
        ],
        imageSrc: "/images/threat-detected.webp"
    }
]