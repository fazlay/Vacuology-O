import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <Grid container spacing={2} className='bannerImage'>
        <Grid item xs={5}>
          
        </Grid>
        <Grid item xs={7}>
          <Typography variant='h2' component='h2' sx={{fontWeight: 'bold' ,mt:20}}>
            Precision. Power. Convinience{' '}
          </Typography>
          <Typography variant='h4' component='h4' sx={{fontWeight: 'light' ,mt:3}}>
           Introducing The Future Cleaner 
          </Typography>
          <Button variant="outlined" sx={{color:'white',mt:5}}>Buy Now   <ArrowForwardRoundedIcon/></Button>
        </Grid>
      </Grid>
      
    </>
  );
};

export default Banner;
