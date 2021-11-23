import { Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, TextareaAutosize ,TextField, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import DraftsIcon from '@mui/icons-material/Drafts';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, fontFamily } from '@mui/system';
import { grey } from '@mui/material/colors';




const Footer = () => {


  return (
    <Box className="footer" sx={{background:'black', color:'white'}} >
<Container>
  
<Grid container spacing={2}>
     <Grid item xs={12} sm={4}>
     <Typography variant='h6' sx={{fontWeight:'bold'}} >
           VACUOLOGY
         </Typography>
     <Typography variant='p' sx={{color:'grey' , fontSize:'15px'}} >
           @2021 Vacuology Solution Pvt Ltd
         </Typography>
         <Box sx={{paddingTop:'20px'}}>
      <FacebookIcon sx={{pr:'10px', fontSize:'35px'}}/>
      <TwitterIcon sx={{px:'10px', fontSize:'35px'}}/>
      <LinkedInIcon sx={{px:'10px', fontSize:'35px'}}/>
         </Box>
     </Grid>
     <Grid item xs={12} sm={4}>
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.paper', color:'white' }}>
      <ListItem>
       
        
            <LocationOnIcon sx={{fontSize:'35px', pr:'10px'}}/>
         
        
        <ListItemText primary="309- Rupa Scottland, Road No-5, Setion -11 "   />
      </ListItem>
      <ListItem>
       
            <PhoneIcon  sx={{fontSize:'35px', pr:'10px'}}/>
        
        <ListItemText primary="+99236548" />
      </ListItem>
      <ListItem>
       
        <DraftsIcon sx={{fontSize:'35px', pr:'10px'}} />
        
        <ListItemText primary="support@vacuology.com" />
      </ListItem>
    </List>
     </Grid>
     <Grid item xs={12} sm={4}>
     {/* <Typography variant='p' sx={{display:'block', fontWeight:'bold'}} >
           Contact Us !
         </Typography>
         <TextField sx={{my:'20px',borderColor:'white', borderWidth:'2px'}}
          required
          id="outlined-required"
          label="Your Email"
     
        /> */}
<Box sx={{py:'2px',color:'white'}}>
  <TextField className="textFiled"
sx={{py:'10px'}}
  label="Enter Your Email"
  variant="standard"
  color="primary"
  
focused
/>
</Box>

        <TextareaAutosize
        className="textFiled"
            
            minRows={3}
            placeholder="Type your message"
            style={{ width: 300, paddingTop:'20px', background:'#121212',color:'white',fontFamily:'roboto', borderColor:'#2196f3'}}
/>
     </Grid>
   </Grid>
        
</Container>
       </Box>
  );
};

export default Footer;
