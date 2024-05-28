/** ProductPage */

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [message, setMessage] = useState(''); // State for success message
    const [quantity, setQuantity] = useState(1); // State for quantity
    const { dispatch } = useContext(CartContext);

    useEffect(() => {
        fetch(`https://v2.api.noroff.dev/online-shop/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    setProduct(data.data);
                } else {
                    console.error('Product data is not available:', data);
                }
            })
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
        setMessage('Item added to cart successfully!'); // Set the success message
        setTimeout(() => setMessage(''), 3000); // Remove the message after 3 seconds
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (!product) {
        return <p>Loading product...</p>;
    }

    const discount = product.price - product.discountedPrice;
    const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
            {product.image ? (
                <img src={product.image.url} alt={product.image.alt} className="w-full h-auto rounded-lg mb-4" />
            ) : (
                <p>No image available</p>
            )}
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-primary-dark mb-4">
                Price: ${product.discountedPrice.toFixed(2)}
            </p>
            {discount > 0 && (
                <p className="text-red-600 text-lg mb-4">
                    Discount: ${discount.toFixed(2)} ({discountPercentage.toFixed(2)}% off) (Original price: ${product.price.toFixed(2)})
                </p>
            )}
            <div className="flex items-center space-x-2 mb-4">
                <button
                    onClick={decrementQuantity}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                    onClick={incrementQuantity}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    +
                </button>
            </div>
            <button
                onClick={addToCart}
                className="bg-primary text-black py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-light"
            >
                Add to Cart
            </button>
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {product.reviews && product.reviews.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Reviews</h2>
                    {product.reviews.map(review => (
                        <div key={review.id} className="border-t border-gray-200 py-4">
                            <p><strong>{review.username}</strong>: {review.description} (Rating: {review.rating})</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductPage;
