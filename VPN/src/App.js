import './App.css';
import React from 'react';

import { Navbar, Hero, Features, Package, Map, Review, Footer } from './components';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Package />
      <Map />
      <Review />
      <Footer/>
    </div>
  );
}

export default App;
