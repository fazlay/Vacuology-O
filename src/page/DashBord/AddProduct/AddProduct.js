import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddProduct = () => {
  const productDetails = {
    name: 'Neatsvor X600 4000pa Laser Navigation',
    description:
      'the robot vacuum cleaner creates an interactive map of the environment',
    price: 50,
    img: 'https://www.irobot.cz/app/uploads/2019/10/i7_charcoal_photo_studio_frontstanding_hero-700x700-c-default.png',
  };
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
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

    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <Container sx={{ml:5}}>
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
            defaultValue='Neatsvor X600 4000pa'
            label='Description'
            variant='standard'
            onBlur={handleInfoBlur}
          />
          <TextField
            sx={{ width: '75%', my: 2 }}
            name='price'
            defaultValue='Neatsvor X600 4000pa'
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

          <Button type='submit' variant="contained" sx={{ width: '75%' }}>
            ADD PRODUCT
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
