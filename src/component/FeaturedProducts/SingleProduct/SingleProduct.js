import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
  const {name,descreiption,img,price,_id}=product
  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{ m: 3 }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/static/images/cards/contemplative-reptile.jpg'
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                {_id}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/products/${_id}`}  style={{ textDecoration: 'none' }}>
                <Button variant='contained'>BUY NOW</Button>
              </Link>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default SingleProduct;
