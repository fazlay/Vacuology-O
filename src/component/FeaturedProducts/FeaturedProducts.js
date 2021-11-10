import { ContentCutOutlined } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  products.splice(0,2)
  return (
    <Container>
      <Grid container spacing={2}>
        {products.map((product) => (
          <SingleProduct product={product} key={product._id}></SingleProduct>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
