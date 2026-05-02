import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

// ============================================
// FOOTER COMPONENT
// ============================================
const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-6 sm:py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
                
                {/* ============================================
                    SECTION 1: BRAND & DESCRIPTION
                ============================================ */}
                <div>
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <Image 
                                src="/images/logo-colored.svg" 
                                alt={siteDetails.siteName} 
                                width={128}
                                height={48}
                                className="w-28 sm:w-32 h-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 sm:mt-3.5 text-foreground-accent mb-4 sm:mb-6 text-[11px] sm:text-sm leading-relaxed sm:leading-normal">
                            {footerDetails.subheading}
                        </p>
                    </div>
                    <Link 
                        href="#cta" 
                        className="inline-block text-xs sm:text-sm text-black bg-transparent border border-black px-4 sm:px-5 py-1 sm:py-1.5 rounded-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-transparent"
                    >
                        Talk to an Expert
                    </Link>
                </div>

                {/* ============================================
                    SECTION 2: QUICK LINKS
                ============================================ */}
                <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent space-y-1 sm:space-y-2">
                        {footerDetails.quickLinks.map(link => {
                            let href = '/';
                            if (link.text === 'Platform') href = '/';
                            else if (link.text === 'Threats') href = '#threats';
                            else if (link.text === 'Benefits') href = '#benefits';
                            else if (link.text === 'Demo') href = '#cta';
                            
                            return (
                                <li key={link.text}>
                                    <Link 
                                        href={href} 
                                        className="hover:text-foreground text-[11px] sm:text-sm transition-colors"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* ============================================
                    SECTION 3: CONTACT US
                ============================================ */}
                <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact Us</h4>

                    {footerDetails.email && (
                        <a 
                            href={`mailto:${footerDetails.email}`}  
                            className="block text-foreground-accent hover:text-foreground text-[11px] sm:text-sm transition-colors mb-1"
                        >
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a 
                            href={`tel:${footerDetails.telephone}`} 
                            className="block text-foreground-accent hover:text-foreground text-[11px] sm:text-sm transition-colors"
                        >
                            Phone: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="mt-4 sm:mt-5 flex items-center gap-4 sm:gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="hover:opacity-70 transition-opacity"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* ============================================
                COPYRIGHT BAR
            ============================================ */}
            <div className="mt-6 sm:mt-8 md:text-center text-foreground-accent px-6">
                <p className="text-[10px] sm:text-xs">
                    Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;