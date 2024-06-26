/** ProductCard.jsx */

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    // Calculate the discount percentage
    const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                src={product.image.url}
                alt={product.image.alt}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h2>
                {discountPercentage > 0 && (
                    <p className="text-red-600 font-semibold mb-2">
                        {discountPercentage.toFixed(2)}% off
                    </p>
                )}
                <p className="text-primary-dark font-semibold mb-2">${product.discountedPrice.toFixed(2)}</p>
                <Link to={`/product/${product.id}`} className="text-accent hover:underline">
                    View Product
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
