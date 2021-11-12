import { Container, Typography } from '@mui/material';
import React from 'react';
import './SingleReview.css';

const SingleReview = () => {
  return (
    <Container>
      <div className='tm-content'>
        <Typography variant='p' component='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro doloremque, esse mollitia hic dolorem libero, sint, quos beatae
          voluptas rerum? Minus ullam vel perspiciatis, iusto fugiat officiis
          laborum neque.
        </Typography>
      </div>
      <img
        className='photo'
        src='https://img.webnots.com/2015/08/Testimonial3.jpg'
        alt=''
      />
      <Typography
        variant='p'
        component='p'
        sx={{ float: 'left', ml: 3, fontWeight: 'bold' }}
      >
        Fazlay Rabbi <br />{' '}
        <Typography
          variant='p'
          component='p'
          sx={{ float: 'left', mt: 1, fontWeight: 'light' }}
        >
          Regular Cutomer
        </Typography>
      </Typography>
    </Container>
  );
};

export default SingleReview;
