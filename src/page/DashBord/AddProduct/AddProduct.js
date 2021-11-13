import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
  const productDetails = {
    name: 'Neatsvor X600 4000pa Laser Navigation',
    description:
      'the robot vacuum cleaner creates an interactive map of the environment',
    price: 50,
    img: 'https://www.irobot.cz/app/uploads/2019/10/i7_charcoal_photo_studio_frontstanding_hero-700x700-c-default.png',
  };
  const [addProductSuccess, setAddProductSuccess] = useState(false);
  const [newProduct, setNewProduct] = useState(productDetails);

  const handleInfoBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderDetails = { ...productDetails };
    newOrderDetails[field] = value;

    console.log(newOrderDetails);
    setNewProduct(newOrderDetails);
  };
  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);

    fetch('https://fathomless-sands-30445.herokuapp.com/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => setAddProductSuccess(data.acknowledged));
  };
  return (
    <div>
      <Container sx={{ ml: 5 }}>
        <form onSubmit={handleProductSubmit}>
          <TextField
            sx={{ width: '75%', my: 2 }}
            name='name'
            defaultValue='Neatsvor X600 4000pa'
            label='Name'
            variant='standard'
            onBlur={handleInfoBlur}
          />
          <TextField
            sx={{ width: '75%', my: 2 }}
            name='description'
            defaultValue='This Vacuam Cleaner is an innovative brand. We focus on robotic vacuum cleaners and other smart appliances, helping people enjoy their lives. Were committed to creating great products to engage our loyal customers around the'
            label='Description'
            variant='standard'
            onBlur={handleInfoBlur}
          />
          <TextField
            sx={{ width: '75%', my: 2 }}
            name='price'
            defaultValue='450'
            label='Price'
            variant='standard'
            onBlur={handleInfoBlur}
          />
          <TextField
            sx={{ width: '75%', my: 2 }}
            name='img'
            defaultValue='Neatsvor X600 4000pa'
            label='Image Link'
            variant='standard'
            onBlur={handleInfoBlur}
          />

          <Button type='submit' variant='contained' sx={{ width: '75%' }}>
            ADD PRODUCT
          </Button>
        </form>
        {addProductSuccess && (
          <Alert severity='success'>Product Added successfully!</Alert>
        )}
      </Container>
    </div>
  );
};

export default AddProduct;
