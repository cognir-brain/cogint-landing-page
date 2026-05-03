import { FiTrendingUp, FiCpu, FiShield } from "react-icons/fi";

export const tiers = [
    {
        name: 'Predictive Analysis',
        description: 'We analyze billions of data nodes across your network simultaneously, identifying attack patterns and neutralizing threats before a single line of malicious code is ever executed.',
        icon: FiTrendingUp, 
        iconSize: 32,
        features: []
    },
    {
        name: 'Contextual Understanding',
        description: "COGINT learns the difference between normal employee behavior and subtle anomalies. Our AI continuously adapts to your organization's unique ecosystem, so nothing unusual goes unnoticed.",
        icon: FiCpu,
        iconSize: 32,
        features: []
    },
    {
        name: 'Autonomous Response',
        description: "Threats are isolated in milliseconds. COGINT autonomously terminates malicious connections the moment they're detected, no admin command required, no time wasted.",
        icon: FiShield,
        iconSize: 32,
        features: []
    },
]