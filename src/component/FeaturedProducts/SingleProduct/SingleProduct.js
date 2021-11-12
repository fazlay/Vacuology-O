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

const SingleProduct = ({ product }) => {
  const { name, description, img, price, _id } = product;
  return (
    <>
      <Grid item xs={6} md={4}>
        <Paper elevation={0} sx={{ m: 3 }}>
          <Card sx={{ maxWidth: 345, border: 'none', boxShadow: 'none' }}>
            <CardActionArea sx={{ pb: 3 }}>
              <Link to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component='img'
                  height='340'
                  width='10'
                  image={img}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {name}
                  </Typography>
                  <Typography variant='h6' color='text.secondary'>
                    $ {price}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {description.slice(0, 200)}
                  </Typography>
                </CardContent>
              </Link>
              <div sx={{ mx: 'auto' }}>
                <Link
                  to={`/products/${_id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant='contained'>BUY NOW</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default SingleProduct;
