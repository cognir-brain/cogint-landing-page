import { FiTrendingUp, FiCpu, FiShield } from "react-icons/fi";

export const tiers = [
    {
        name: 'Predictive Analysis',
        description: 'Analisis miliaran node data dalam jaringan secara bersamaan. Kami mengidentifikasi pola serangan potensial bahkan sebelum kode jahat dieksekusi.',
        icon: FiTrendingUp, 
        iconSize: 32,
        features: []
    },
    {
        name: 'Contextual Understanding',
        description: 'Memahami nuansa antara aktivitas normal karyawan dan anomali halus. AI kami belajar secara terus-menerus tentang ekosistem spesifik bisnis Anda.',
        icon: FiCpu,
        iconSize: 32,
        features: []
    },
    {
        name: 'Autonomous Response',
        description: 'Isolasi ancaman dalam hitungan milidetik. Sistem langsung menghentikan koneksi berbahaya secara otomatis tanpa menunggu perintah admin.',
        icon: FiShield,
        iconSize: 32,
        features: []
    },
]