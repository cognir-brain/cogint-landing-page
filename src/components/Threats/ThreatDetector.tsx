'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

const ThreatDetector: React.FC = () => {
    return (
        <div className="p-2 shadow-xl rounded-2xl bg-white dark:bg-gray-900">
            <div className="max-w-sm w-full mx-auto p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg group">
                
                {/* Container dengan efek glow */}
                <div className="relative h-[280px] md:h-[320px] rounded-xl overflow-hidden">
                    
                    {/* Background Grid (Radar Effect) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
                    
                    {/* Radar Scanning Effect */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-cyan-400/30"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-cyan-400/20"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-400/20"
                    />

                    {/* Scanning Line (Beam) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent origin-left"
                        style={{ transformOrigin: '0% 50%' }}
                    />

                    {/* Pulse Effect (Radar Ping) */}
                    <motion.div
                        animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-500/20"
                    />
                    <motion.div
                        animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-purple-500/15"
                    />

                    {/* Icon Tengah (Shield dengan Alert) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/50"
                        >
                            <FiAlertTriangle className="w-10 h-10 text-white" />
                        </motion.div>
                    </div>

                    {/* Floating Particles */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -60, 0],
                                x: [0, (Math.random() - 0.5) * 80, 0],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "easeInOut"
                            }}
                            className="absolute w-1 h-1 rounded-full bg-red-400"
                            style={{
                                top: `${30 + Math.random() * 60}%`,
                                left: `${30 + Math.random() * 40}%`,
                            }}
                        />
                    ))}

                    {/* Threat Indicators (Red Dots) */}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                        className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-red-500 shadow-lg shadow-red-500"
                    />
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 }}
                        className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-red-500 shadow-lg shadow-red-500"
                    />
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                        className="absolute top-[60%] right-[35%] w-1.5 h-1.5 rounded-full bg-red-500 shadow-lg shadow-red-500"
                    />

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                        <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#ef4444" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#ef4444" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#ef4444" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#ef4444" strokeWidth="1" />
                    </svg>
                </div>

                {/* Tombol THREAT DETECTED di dalam kotak */}
                <div className="mt-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{ 
                            boxShadow: [
                                "0 0 0px rgba(239, 68, 68, 0)",
                                "0 0 20px rgba(239, 68, 68, 0.5)",
                                "0 0 0px rgba(239, 68, 68, 0)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <FiAlertTriangle className="w-5 h-5" />
                        <span>THREAT DETECTED</span>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ThreatDetector;