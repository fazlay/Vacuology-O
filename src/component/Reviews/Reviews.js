import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css'
// Import Swiper React components


// Import Swiper styles

import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';
import { Container } from "@mui/material";
SwiperCore.use([EffectCoverflow,Pagination]);

export default function App() {
  
  
  
  return (
    <Container>
    <Swiper effect={'coverflow'} initialSlide={3} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier":1,
  "slideShadows": true
}} pagination={true} className="mySwiper">
  <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide>
  </Swiper>
    </Container>
  )
}



// import { Container, Divider, Grid, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import SingleReview from './SingleReview/SingleReview';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch('https://fathomless-sands-30445.herokuapp.com/reviews')
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);
//   return (
//     <Container>
//       <Typography gutterBottom variant='h3' component='div' sx={{fontWeight:'bold' ,pt:5, textAlign:'center'}}>
//                 What Our Customer says!!
//                   </Typography>
//                   <Divider variant="middle" />
//     <Grid container spacing={2} sx={{pt:5}}>
//       {reviews.map((review) => (
//         <Grid item xs={12} sm={3}>
//           <SingleReview key={review._id} review={review}></SingleReview>
//         </Grid>
//       ))}
//     </Grid>
//     </Container>
//   );
// };

// export default Reviews;
