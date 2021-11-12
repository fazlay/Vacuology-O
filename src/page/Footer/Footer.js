import { Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div sx={{ backgroundColor: 'black' }}>
      <Typography variant='p' sx={{ backgroundColor: 'black',color:'white', height:50}} component='p'>
        @Copy Right 2021
      </Typography>
    </div>
  );
};

export default Footer;
