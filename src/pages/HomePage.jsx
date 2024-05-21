/** HomePage */

import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://v2.api.noroff.dev/online-shop')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setProducts(data.data);
                    setFilteredProducts(data.data);
                } else {
                    console.error('Data is not an array:', data);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleSearch = (query) => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to the eCom Store</h1>
            <div className="mb-8">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-lg text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;
