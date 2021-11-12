import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
    <Grid container spacing={2}>
      {reviews.map((review) => (
        <Grid item xs={4}>
          <SingleReview key={review._id} review={review}></SingleReview>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Reviews;
