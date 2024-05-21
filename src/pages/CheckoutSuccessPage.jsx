/** CheckoutSuccessPage */

import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { CartContext } from '../context/CartContext';

const CheckoutSuccessPage = () => {
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
        dispatch({ type: 'CLEAR_CART' });
    }, [dispatch]);

    return (
        <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
            <p className="text-lg mb-4">Thank you for your purchase.</p>
            <Link to="/" className="text-accent hover:underline">
                Back to Store
            </Link>
        </div>
    );
};

export default CheckoutSuccessPage;

