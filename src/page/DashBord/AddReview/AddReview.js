import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../component/hook/useAuth';

const AddReview = () => {
  const { user } = useAuth();
  const reviewDetails = {
    name: user.displayName,
    email: user.email,
    userReview: 'VacuoloGu Is Qwsome',
  };
  const [userReview, setUserReview] = useState('');

  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...reviewDetails };
    newReview[field] = value;
    setUserReview(newReview);
  
  };
  const handleSubmit = (e) => {
      console.log(userReview);
    e.preventDefault();
    // const review = { userReview };
   
    fetch('http://localhost:5000/review', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userReview),
    }).then();
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
        {/* <TextField
          id='standard-password-input'
          label='Enter Desired Email'
          type='email'
          name='email'
          autoComplete='current-password'
          variant='standard'
          sx={{ width: '100%', mt: 10 }}
          onBlur={handleBlur}
        /> */}
        <Button sx={{ width: '75%', my: 5 }} type='submit' variant='contained'>
          {' '}
          ADD YOUR REVIEW
        </Button>
      </form>
    </div>
  );
};

export default AddReview;
