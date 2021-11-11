import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../component/hook/useAuth';

const PurchaseForm = ({ id }) => {
  const { user } = useAuth();
  let orderDetails = {
    productId: id,
    name: '',
    email: `${user.email}`,
    mobile: '',
    country: '',
    city: '',
    address: '',
  };

  const handleInfoBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    orderDetails[field] = value;
    orderDetails = { ...orderDetails };
    console.log(orderDetails);
  };
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();

    console.log('inside function');
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(orderDetails),
    }).then()
  };
  return (
    <Container>
      <form onSubmit={handlePurchaseSubmit}>
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='name'
          defaultValue={user.name}
          label='Name'
          variant='standard'
          onBlur={handleInfoBlur}
        />

        <TextField
          sx={{ width: '75%', my: 2 }}
          name='email'
          defaultValue={orderDetails?.email}
          label='Email'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='mobile'
          label='Mobile'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='country'
          label='Country'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='city'
          label='City'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='address'
          label='Address'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <Button type='submit' varient='contained' sx={{ width: '75%' }}>
          {' '}
          PLACE ORDER
        </Button>
      </form>
    </Container>
  );
};

export default PurchaseForm;
