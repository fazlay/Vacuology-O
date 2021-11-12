import { Avatar, Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
// import './SingleReview.css';

const SingleReview = () => {
  return (
    <>
      {' '}
      <Paper sx={{ backgroundColor: 'blue' }}>
        <Typography variant='p' component='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          porro doloremque, esse mollitia hic dolorem libero, sint, quos beatae
          voluptas rerum? Minus ullam vel perspiciatis, iusto fugiat officiis
          laborum neque.
        </Typography>
      </Paper>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Avatar src='/broken-image.jpg' />
        </Grid>
        <Grid item xs={11} sx={{directio:'row',justifyContent:'flex-start'}}>
          <Typography variant='p' component='p'>
          Fazlay Rabbi <br />{' '}
          <Typography variant='p' component='p' sx={{}}>
            Regular Cutomer
          </Typography>
          </Typography>
        </Grid>
      </Grid>
    </>

    //   <Paper>

    //     <Typography variant='p' component='p' sx={{backgroundColor:'ebf3f5'}}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
    //       porro doloremque, esse mollitia hic dolorem libero, sint, quos beatae
    //       voluptas rerum? Minus ullam vel perspiciatis, iusto fugiat officiis
    //       laborum neque.
    //     </Typography>

    //   <div>
    //   <Avatar src="/broken-image.jpg" />
    //     {/* <img
    //     className='photo'
    //     src='https://img.webnots.com/2015/08/Testimonial3.jpg'
    //     alt=''
    //   /> */}
    //   <Typography
    //     variant='p'
    //     component='p'
    //     sx={{ float: 'left', ml: 3, fontWeight: 'bold' }}
    //   >
    //     Fazlay Rabbi <br />{' '}
    //   {/* <Typography
    //     variant='p'
    //     component='p'
    //     sx={{ float: 'left', mt: 1, fontWeight: 'light' }}
    //   >
    //     Regular Cutomer
    //   </Typography> */}
    //   </Typography></div>

    // </Paper>
  );
};

export default SingleReview;
