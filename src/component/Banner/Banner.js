import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Bounce from 'react-reveal/Bounce';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <Grid container spacing={2} className='bannerImage'>
        <Grid item xs={12} sm={5}>
          
        </Grid>
        <Grid item xs={12} sm={7}>
        <Bounce top cascade>
          <Typography variant='h2' component='h2' sx={{fontWeight: 'bold' ,mt:20}}>
            Precision. Power. Convinience{' '}
          </Typography>
          <Typography variant='h4' component='h4' sx={{fontWeight: 'light' ,mt:3}}>
           Introducing The Future Cleaner 
          </Typography>
          </Bounce>
          <Button variant="outlined" sx={{color:'white',mt:5}}>Buy Now   <ArrowForwardRoundedIcon/></Button>
        </Grid>
      </Grid>
      
    </>
  );
};

export default Banner;
