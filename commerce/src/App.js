import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Handbags from './pages/Handbags';
import Product from './pages/Product';
import { DataProvider } from './context/DataContext';
import { CartProvider } from './context/CartContext';
import { Navbar, Footer, ScrollToTop} from './components';
import Watches from './pages/Watches';

function App() {
  return (
    <div className="App">
    <CartProvider>
    <DataProvider>
      <ScrollToTop />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Handbags" element={<Handbags />} />
          <Route path="/Watches" element={<Watches />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product/:id" element={<Product />} />
        </Routes>
      <Footer />
    </DataProvider>
    </CartProvider>
    </div>
  );
}

export default App;
