// src/components/CartIcon.jsx

import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const CartIcon = () => {
    const { cart } = useContext(CartContext);

    // Calculate total quantity of items in the cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
