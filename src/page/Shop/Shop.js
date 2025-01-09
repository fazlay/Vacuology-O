import {  Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../component/FeaturedProducts/SingleProduct/SingleProduct';
import { apiMethod } from '../../config/apiMethod';
import { HeaderTitleText } from '../Home/style';
import { styled } from 'styled-components';

const Container = styled.div`

padding-bottom: 90px;
`
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  apiMethod.get('/products')
  
      .then((data) => setProducts(data.data));
  }, [products]);
  
  return (
    <Container>
       <HeaderTitleText>Our Products</HeaderTitleText>
            
    <Grid container spacing={2}>
      {products.map((product) => (
        <SingleProduct product={product} key={product._id}></SingleProduct>
      ))}
    </Grid>
  </Container>
  );
};

export default Shop;
