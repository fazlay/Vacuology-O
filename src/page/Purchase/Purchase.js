import { CardMedia, CircularProgress, Grid, Paper, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Productdes from './ProductDes/Productdes';
import PurchaseForm from './PurchaseForm/PurchaseForm';

const Purchase = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productLoading, setpProductLoading] = useState(true);
  const { id } = useParams();
  const url = `https://vacuology-server.onrender.com/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSelectedProduct(data))
      .finally(()=>(setpProductLoading(false)))
  }, []);

  if (productLoading) return ( 
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
    </Box>
            );
  return (
    <>
   
         <Grid container spacing={2}>
         <Grid item xs={6} md={8}>
           <Productdes productLoading={productLoading} selectedProduct={selectedProduct}></Productdes>
         </Grid>
         <Grid item xs={6} md={4}>
           <PurchaseForm  selectedProduct={selectedProduct} id={id}></PurchaseForm>
         </Grid>
       </Grid>
 
     
    </>
  );
};

export default Purchase;
