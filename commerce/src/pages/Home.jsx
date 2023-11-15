import React, { useContext } from 'react';
import { Hero, NewArrivals, Collection, Brand} from '../components/index';

function Home() {
  return (
    <div className='home'>
      <Hero />
      <NewArrivals />
      <Collection />
      <Brand />
    </div>
  );
}

export default Home;