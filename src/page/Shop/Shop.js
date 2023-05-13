import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../component/FeaturedProducts/SingleProduct/SingleProduct';
import { apiMethod } from '../../config/apiMethod';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  apiMethod.get('/products')
  
      .then((data) => setProducts(data.data));
  }, [products]);
  return (
    <Container>
       <Typography gutterBottom variant='h3' component='div' sx={{fontWeight:'bold' ,pt:5, textAlign:'center'}}>
                   Our Products
                  </Typography>
                  <Divider variant="middle" />
    <Grid container spacing={2}>
      {products.map((product) => (
        <SingleProduct product={product} key={product._id}></SingleProduct>
      ))}
    </Grid>
  </Container>
  );
};

export default Shop;
