import { CardMedia, Paper, Typography } from '@mui/material';
import React from 'react';

const Productdes = ({ selectedProduct }) => {
  const { name, img, description } = selectedProduct;
  return (
    <>
      <Typography variant='h4' component='h4'>
        {name}
      </Typography>
      <Paper sx={{ border: 'none', boxShadow: 'none' }}>
        <CardMedia
          sx={{ width: '50%', height: '25%' }}
          component='img'
          image={img}
          alt='green iguana'
        />
      </Paper>
      <Typography variant='p' component='p'>
        {description}
      </Typography>
    </>
  );
};

export default Productdes;
