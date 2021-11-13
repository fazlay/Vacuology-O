import { Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CallIcon from '@mui/icons-material/Call';
const WhyUs = () => {
  return (
    <Container>
      <Typography
        gutterBottom
        variant='h3'
        component='div'
        sx={{ fontWeight: 'bold', pt: 5, textAlign: 'center' }}
      >
        Why to Choose US !!
      </Typography>
      <Divider variant='middle' />
      <Grid container spacing={2} sx={{ py: 5, textAlign: 'text-align' }}>
        <Grid item xs={12} sm={3}>
          <ApartmentIcon sx={{ fontSize: 80 }} />
          <Typography variant='h6' component='h6'>
            30 Days Home Trial
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <LocalShippingIcon sx={{ fontSize: 80 }} />
          <Typography variant='h6' component='h6'>
            Free Shipping
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <AddModeratorIcon sx={{ fontSize: 80 }} />
          <Typography variant='h6' component='h6'>
            3 Years Warranty
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <CallIcon sx={{ fontSize: 80 }} />
          <Typography variant='h6' component='h6'>
            24/7 On Call Service
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
