/** CheckoutPage */

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Layout from '../components/Layout';

const CheckoutPage = () => {
    const { cart, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.discountedPrice * item.quantity, 0).toFixed(2);

    const handleCheckout = () => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/checkout-success');
    };

    const incrementQuantity = (id) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
    };

    const decrementQuantity = (id) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
    };

    const removeFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Checkout</h1>
            {cart.length > 0 ? (
                <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                    <ul className="divide-y divide-gray-200 mb-6">
                        {cart.map((item) => (
                            <li key={item.id} className="flex flex-col sm:flex-row items-center py-4">
                                <img
                                    src={item.image.url}
                                    alt={item.image.alt}
                                    className="w-24 h-24 object-cover rounded-lg mr-4 mb-4 sm:mb-0"
                                />
                                <div className="flex-1 text-center sm:text-left">
                                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                                    <p className="text-lg text-primary-dark">${item.discountedPrice.toFixed(2)}</p>
                                    <div className="flex justify-center sm:justify-start items-center space-x-2 mt-2">
                                        <button
                                            onClick={() => decrementQuantity(item.id)}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg">{item.quantity}</span>
                                        <button
                                            onClick={() => incrementQuantity(item.id)}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 transition-colors duration-200 mt-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-2xl font-bold mb-4 sm:mb-0">Total: ${total}</p>
                        <button
                            onClick={handleCheckout}
                            className="bg-primary text-white py-2 px-4 sm:px-6 rounded-lg hover:bg-primary-dark transition-all duration-200 w-full sm:w-auto"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-xl">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CheckoutPage;
