import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../context/CartContext';
import logo from '../assets/logo.webp';

const CartIcon = () => {
    const { cart } = useContext(CartContext);

    // Calculate total quantity of items in the cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="relative">
            <FaShoppingCart className="text-3xl" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-primary text-black py-6 shadow-md font-avenir">
            <nav className="container mx-auto flex justify-between items-center px-4">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="eCom Store Logo" className="h-12" />
                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold">Lord eCom Store</span>
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
                        <CartIcon />
                        <span>Cart</span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {menuOpen ? (
                            <XMarkIcon className="h-8 w-8 text-black" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 text-black" />
                        )}
                    </button>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden bg-primary text-black text-center">
                    <Link to="/" className="mt-4 mb-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <FaHome className="text-3xl mr-2 " />
                        <span>Home</span>
                    </Link>
                    <Link to="/contact" className="mt-4 mb-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <FaEnvelope className="text-3xl mr-2" />
                        <span>Contact</span>
                    </Link>
                    <Link to="/cart" className="mt-4 ml-4 mr-4 flex items-center justify-center py-2 px-4 hover:text-gray-300 text-lg font-medium transition duration-300">
                        <CartIcon />
                        <span>Cart</span>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
