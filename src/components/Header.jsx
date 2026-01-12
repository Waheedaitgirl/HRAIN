import React, { useState } from 'react';
import logo from '../assets/Images/R_logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-blue-100/30 backdrop-blur-md shadow-lg z-50 text-gray-900">
            <div className="w-full flex justify-between items-center pl-10 pr-8 md:pl-20 md:pr-12 py-4">
                <div className="flex items-center gap-3 cursor-pointer group">
                    <img src={logo} alt="HRAIN Logo" className="h-10 w-10 rounded-full object-cover animate-float" />
                    <span className="text-2xl font-bold tracking-wide text-gray-800 group-hover:text-blue-600 transition-colors duration-300 transform inline-block animate-float">HRAIN</span>
                </div>
                {/* Desktop Menu */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8 text-lg font-medium text-gray-800">
                        <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
                        <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
                        <li><a href="#team" className="hover:text-blue-600 transition-colors">Team</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact Us</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-800 hover:text-blue-600 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 absolute w-full left-0 top-full shadow-lg">
                    <ul className="flex flex-col space-y-4 px-6 py-6 text-lg font-medium text-gray-800">
                        <li><a href="#home" className="block hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" className="block hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="#services" className="block hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#team" className="block hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Team</a></li>
                        <li><a href="#contact" className="block hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
