import { Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../component/FeaturedProducts/SingleProduct/SingleProduct';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fathomless-sands-30445.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
