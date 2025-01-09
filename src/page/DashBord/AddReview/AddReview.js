import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../component/hook/useAuth';
import Rating from 'react-rating';
import './AddReview.css';

const AddReview = () => {
  const { user } = useAuth();
  const reviewDetails = {
    name: user.displayName,
    email: user.email,
    userReview: 'VacuoloGu Is Qwsome',
  };
  const [userReview, setUserReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(e.target.name);
    const newReview = { ...reviewDetails };
    newReview[field] = value;
    setUserReview(newReview);
  };

 
  const handleSubmit = (e) => {
    // const withStar= {...userReview,rating}
    // setUserReview(withStar)
    console.log(userReview);
    e.preventDefault();
    // const review = { userReview };

    fetch('https://vacuology-server.onrender.com/review', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => setReviewSuccess(data.acknowledged));

    e.target.reset();
  };
  return (
    <div>
      <Typography variant='h3' component='h3' sx={{ my: 3 }}>
        Welcome To Vacuology
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          aria-label='minimum height'
          minRows={3}
          placeholder='Express your Fellings about VACUOLOGY'
      
          name='userReview'
          onBlur={handleBlur}
          style={{ width: 400 }}
        />
        <h4>Rate Us</h4>
        <Rating
          className='rating'
          name='rating'
          size={36}
          fullSymbol='fas fa-star'
          emptySymbol='far fa-star'
          onChange={(rate) => {
            setRating(rate);
            const withStar = { ...userReview, rating };
            setUserReview(withStar);
          }}
        
        />

        <Button sx={{ width: '75%', my: 5 }} type='submit' variant='contained'>
          ADD YOUR REVIEW
        </Button>
      </form>
      {reviewSuccess && (
        <Alert severity='success'>Review Added successfully!</Alert>
      )}
    </div>
  );
};

export default AddReview;
