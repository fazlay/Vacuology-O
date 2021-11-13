import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../component/FeaturedProducts/SingleProduct/SingleProduct';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
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

export default Shop;
