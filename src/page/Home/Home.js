import React from 'react';
import Banner from '../../component/Banner/Banner';
import FeaturedProducts from '../../component/FeaturedProducts/FeaturedProducts';
import Reviews from '../../component/Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <h1>This is Home Page </h1>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
