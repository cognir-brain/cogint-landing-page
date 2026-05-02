// ============================================
// AVAILABLE BUTTON COMPONENT
// ============================================
import React from 'react';
import clsx from 'clsx';

interface AvailableButtonProps {
    dark?: boolean;
}

const AvailableButton: React.FC<AvailableButtonProps> = ({ dark }) => {
    return (
        <a href="#" className="block">
            <button
                type="button"
                className={clsx(
                    "flex items-center justify-center gap-2 rounded-lg transition-all duration-300",
                    {
                        "text-white bg-foreground hover:opacity-80": dark,
                        "text-foreground bg-white/80 backdrop-blur-sm border border-black/50 hover:bg-black hover:text-white hover:border-transparent": !dark,
                    },
                    "px-4 py-2 text-sm w-auto min-w-[100px]",
                    "sm:px-6 sm:py-2.5 sm:gap-2 sm:text-base sm:min-w-[120px]"
                )}
            >
                {/* Hijau - Status Available */}
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                
                {/* Text Container */}
                <div className="text-center">
                    <div className="font-semibold text-xs sm:text-sm leading-tight">
                        Available Now
                    </div>
                </div>
            </button>
        </a>
    );
};

export default AvailableButton;