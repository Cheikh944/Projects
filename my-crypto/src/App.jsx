import './App.css';
import React, { useEffect, useState } from 'react';
import { Navbar, Table, Coins, Trending } from './components';
import { DataProvider } from './Context/DataContext';

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <DataProvider>
      <div className="content">
        <Navbar />
        <div className="all">
          <Coins />
          <Table />
          {screenWidth  < 680 && <h1 className='trendtop'>Top 3:</h1>}
          <Trending />
        </div>
      </div>
      </DataProvider>
    </div>
  );
}

export default App;