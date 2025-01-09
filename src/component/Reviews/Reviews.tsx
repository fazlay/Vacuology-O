import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./styles.css";
// Import Swiper React components
import Typography from "@mui/material/Typography";
// Import Swiper styles
import Masonry from "@mui/lab/Masonry";

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

      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {reviews.map((review: any) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </Masonry>
    </Container>
  );
};
export default Reviews;
