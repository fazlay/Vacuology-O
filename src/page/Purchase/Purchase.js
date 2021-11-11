import { CardMedia, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Productdes from './ProductDes/Productdes';
import PurchaseForm from './PurchaseForm/PurchaseForm';

const Purchase = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const { id } = useParams();
  const url = `http://localhost:5000/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data));
  }, []);
  return (
    <>
      

      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Productdes selectedProduct={selectedProduct}></Productdes>
        </Grid>
        <Grid item xs={6} md={4}>
          <PurchaseForm id={id}></PurchaseForm>
        </Grid>
      </Grid>
    </>
  );
};

export default Purchase;
