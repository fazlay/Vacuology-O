import { Typography } from '@mui/material';
import React from 'react';




const Footer = () => {


  return (
    <Container className="footer"  >

    <Grid container spacing={2}>
     <Grid item sm={6} md={12}>
     <Typography variant='p' >
           @Copy Right 2021
         </Typography>
     </Grid>
     <Grid item sm={6} md={12}>
     <Typography variant='p' >
           @Copy Right 2021
         </Typography>
     </Grid>
     <Grid item sm={6} md={12}>
     <Typography variant='p' >
           @Copy Right 2021
         </Typography>
     </Grid>
   </Grid>
        
       </Container>
  );
};

export default Footer;
