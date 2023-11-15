import './App.css';
import React from 'react';

import { Navbar, Home, Tournaments, Contact, Shop, News, Footer} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Tournaments />
      <Contact />
      <Shop />
      <News />
      <Footer />
    </div>
  );
}

export default App;
