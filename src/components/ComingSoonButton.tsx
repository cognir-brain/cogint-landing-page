// ============================================
// COMING SOON BUTTON COMPONENT
// ============================================
import React from 'react';
import clsx from 'clsx';

interface ComingSoonButtonProps {
    dark?: boolean;
}

const ComingSoonButton: React.FC<ComingSoonButtonProps> = ({ dark }) => {
    return (
        <button
            type="button"
            disabled
            className={clsx(
                "flex items-center justify-center gap-2 rounded-lg opacity-60 cursor-not-allowed transition-all duration-300",
                {
                    "text-white bg-foreground": dark,
                    "text-foreground bg-white/80 backdrop-blur-sm border border-black/50": !dark,
                },
                "px-4 py-2 text-sm w-auto min-w-[100px]",
                "sm:px-6 sm:py-2.5 sm:gap-2 sm:text-base sm:min-w-[120px]"
            )}
        >
            {/* Merah - Status Coming Soon */}
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            
            {/* Text Container */}
            <div className="text-center">
                <div className="font-semibold text-xs sm:text-sm leading-tight">
                    Coming Soon
                </div>
            </div>
        </button>
    );
};

export default ComingSoonButton;