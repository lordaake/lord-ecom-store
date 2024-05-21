/** SearchBar.jsx */

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onSearch(newQuery);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search products..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-primary"
        />
    );
};

export default SearchBar;
