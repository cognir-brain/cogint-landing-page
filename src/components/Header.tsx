'use client';

// ============================================
// IMPORTS
// ============================================
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Container from './Container';
import { menuItems } from '@/data/menuItems';

// ============================================
// HEADER COMPONENT
// ============================================
const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // ============================================
    // SCROLL DETECTION
    // ============================================
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ============================================
    // HANDLERS
    // ============================================
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // ============================================
    // RENDER
    // ============================================
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/80 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
        }`}>
            <Container className="!px-0">
                {/* ============================================
                    NAVBAR CONTAINER
                ============================================ */}
                <nav className="mx-auto flex justify-between items-center py-0 px-5">
                    
                    {/* ============================================
                        LOGO SECTION
                    ============================================ */}
                    <Link 
                        href="/" 
                        className="flex items-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Desktop Logo */}
                        <div className="hidden md:block relative w-32 h-20">
                            <Image 
                                src="/images/logo-black.svg" 
                                alt="Logo" 
                                fill
                                className={`object-contain transition-all duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <Image 
                                src="/images/logo-colored.svg" 
                                alt="Logo Colored" 
                                fill
                                className={`object-contain transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </div>

                        {/* Mobile Logo */}
                        <div className="md:hidden relative w-24 h-20">
                            <Image 
                                src="/images/logo-black.svg" 
                                alt="Logo" 
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    {/* ============================================
                        DESKTOP MENU
                    ============================================ */}
                    <ul className="hidden md:flex md:items-center space-x-6">
                        {menuItems.map(item => {
                            let href = '/';
                            if (item.text === 'Platform') href = '/';
                            else if (item.text === 'Threats') href = '#threats';
                            else if (item.text === 'Benefits') href = '#benefits';
                            else if (item.text === 'Demo') href = '#cta';
                            
                            return (
                                <li key={item.text}>
                                    <Link 
                                        href={href} 
                                        className="text-foreground hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })}
                        
                        {/* CTA Button - Rounded Square */}
                        <li>
                            <motion.div
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4"
                                }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="rounded-lg"
                            >
                                <Link 
                                    href="#cta" 
                                    className="text-black bg-white border border-black px-5 py-1.5 rounded-lg transition-all duration-300 hover:border-transparent block font-semibold text-sm md:text-base"
                                >
                                    Get Started
                                </Link>
                            </motion.div>    
                        </li>
                    </ul>

                    {/* ============================================
                        MOBILE MENU BUTTON
                    ============================================ */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-black focus:outline-none rounded-lg w-8 h-8 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-5 w-5" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* ============================================
                MOBILE DROPDOWN MENU
            ============================================ */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
                    <ul className="flex flex-col space-y-0 py-2 px-5">
                        {menuItems.map(item => {
                            let href = '/';
                            if (item.text === 'Platform') href = '/';
                            else if (item.text === 'Threats') href = '#threats';
                            else if (item.text === 'Benefits') href = '#benefits';
                            else if (item.text === 'Demo') href = '#cta';
                            
                            return (
                                <li key={item.text}>
                                    <Link 
                                        href={href} 
                                        className="text-foreground hover:text-cyan-400 block py-1.5 text-sm transition-colors" 
                                        onClick={toggleMenu}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })}
                        
                        {/* Mobile CTA Button - Rounded Square */}
                        <li className="pt-1 pb-1">
                            <Link 
                                href="#cta" 
                                className="text-sm text-black bg-white/80 backdrop-blur-sm border border-black/50 px-4 py-1.5 rounded-lg block w-fit transition-all duration-300 hover:bg-black hover:text-white hover:border-transparent" 
                                onClick={toggleMenu}
                            >
                                Get Started
                            </Link>  
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;