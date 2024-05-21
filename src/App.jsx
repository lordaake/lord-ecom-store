/** App.jsx */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import Layout from './components/Layout';
import './index.css';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CheckoutPage />} />
        <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>
    </Layout>
  );
};

export default App;