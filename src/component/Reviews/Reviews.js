import { Container, Divider, Grid, Typography } from '@mui/material';
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
      <Typography gutterBottom variant='h3' component='div' sx={{fontWeight:'bold' ,pt:5, textAlign:'center'}}>
                What Our Customer says!!
                  </Typography>
                  <Divider variant="middle" />
    <Grid container spacing={2} sx={{pt:5}}>
      {reviews.map((review) => (
        <Grid item xs={12} sm={3}>
          <SingleReview key={review._id} review={review}></SingleReview>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Reviews;
