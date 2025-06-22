
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';
import ProductListing from '../components/ProductListing';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import CheckoutSuccess from '../components/CheckoutSuccess';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<CheckoutSuccess />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
};

export default Index;
