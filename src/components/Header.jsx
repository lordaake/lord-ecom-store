/** Header.jsx */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.webp';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-primary text-white py-6 shadow-md">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="eCom Store Logo" className="h-12" />
                    <span className="text-3xl font-extrabold font-serif">eCom Store</span>
                </Link>
                <div className="flex-grow"></div>
                <div className="hidden md:flex items-center justify-center space-x-12">
                    <Link to="/" className="flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition duration-300">
                        <FaHome className="text-3xl" />
                        <span>Home</span>
                    </Link>
                    <Link to="/contact" className="flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition duration-300">
                        <FaEnvelope className="text-3xl" />
                        <span>Contact</span>
                    </Link>
                    <Link to="/cart" className="flex items-center space-x-2 text-lg font-medium hover:text-gray-300 transition duration-300">
                        <FaShoppingCart className="text-3xl" />
                        <span>Cart</span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? (
                            <XMarkIcon className="h-8 w-8 text-white" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-white" />
                        )}
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-primary text-white text-center">
                    <Link to="/" className="mt-4 mb-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <FaHome className="text-3xl mr-2 " />
                        <span>Home</span>
                    </Link>
                    <Link to="/contact" className="mt-4 mb-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <FaEnvelope className="text-3xl mr-2" />
                        <span>Contact</span>
                    </Link>
                    <Link to="/cart" className="mt-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <FaShoppingCart className="text-3xl mr-2" />
                        <span>Cart</span>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
