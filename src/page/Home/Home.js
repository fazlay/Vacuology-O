import React from 'react';
import Banner from '../../component/Banner/Banner';
import FeaturedProducts from '../../component/FeaturedProducts/FeaturedProducts';
import Reviews from '../../component/Reviews/Reviews';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <WhyUs></WhyUs>
      <Reviews sx={{height:'100px'}}></Reviews>
    </div>
  );
};

export default Home;
