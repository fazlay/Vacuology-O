import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
// Import Swiper React components
import Typography from "@mui/material/Typography";
// Import Swiper styles

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Container, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview/SingleReview";
SwiperCore.use([EffectCoverflow, Pagination]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://vacuology-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{ textAlign: "center", paddingBottom: "4px" }}
      >
        What Our Coustomer Says !
      </Typography>
      <Divider
        variant="middle"
        sx={{ paddingBottom: "14px", marginBottom: "24px" }}
      />
      <Swiper
        effect={"coverflow"}
        initialSlide={3}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <SingleReview key={review._id} review={review}></SingleReview>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default Reviews;

// import { Container, Divider, Grid, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import SingleReview from './SingleReview/SingleReview';

// const Reviews = () => {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch('https://vacuology-server.onrender.com/reviews')
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
