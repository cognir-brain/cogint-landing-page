import { FiAlertTriangle, FiBell, FiCpu } from "react-icons/fi";

export const threatsData = [
    {
        title: "Keamanan Tradisional\nTidak Lagi Cukup?",
        description: "Serangan siber saat ini berkembang lebih cepat daripada kemampuan manusia untuk bereaksi. Sistem berbasis aturan (rule-based) telah usang menghadapi ancaman yang digerakkan oleh AI.",
        bullets: [
            {
                title: "Zero-Day Vulnerability",
                description: "Eksploitasi yang tidak memiliki tanda tangan digital sebelumnya, mem-bypass antivirus standar.",
                icon: <FiAlertTriangle size={26} />
            },
            {
                title: "Alert Fatigue",
                description: "Tim SOC kewalahan dengan ribuan notifikasi setiap hari, membuat ancaman nyata terabaikan.",
                icon: <FiBell size={26} />
            },
            {
                title: "AI-Powered Attacks",
                description: "Penyerang menggunakan AI untuk mengotomatisasi pengintaian dan eksploitasi data secara masif.",
                icon: <FiCpu size={26} />
            }
        ],
        imageSrc: "/images/threat-detected.webp"
    }
]