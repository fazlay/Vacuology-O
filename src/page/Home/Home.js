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
      <Reviews sx={{height:'100px'}}></Reviews>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
