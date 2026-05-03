import { FiAlertTriangle, FiBell, FiCpu } from "react-icons/fi";

export const threatsData = [
    {
        title: "When Threats Evolve,\nConventional Security Falls Behind.",
        description: "Modern cyber attacks move faster than human response. Rule-based approaches are no longer relevant against AI-driven threats, and every second of delay is a gap waiting to be exploited.",
        bullets: [
            {
                title: "Zero-Day Vulnerability",
                description: "Exploits with no prior digital signature, undetected by conventional antivirus, with no time left to react.",
                icon: <FiAlertTriangle size={26} />
            },
            {
                title: "Alert Fatigue",
                description: "SOC teams are buried under thousands of daily notifications. Critical threats slip through, not because they go undetected, but because they never get the attention they deserve.",
                icon: <FiBell size={26} />
            },
            {
                title: "AI-Powered Attacks",
                description: "Adversaries now leverage AI to map vulnerabilities, automate exploitation, and strike at massive scale, relentlessly, and without human error",
                icon: <FiCpu size={26} />
            }
        ],
        closing: "This is why COGINT exists, not just to detect threats, but to understand and stop them before they happen.",
        imageSrc: "/images/threat-detected.webp"
    }
]