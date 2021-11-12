import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../component/hook/useAuth';

const PurchaseForm = ({ id }) => {
  const { user } = useAuth();
  const orderDetails = {
    productId: id,
    name: user.name,
    email: user.email,
    mobile: '017121212',
    country: 'Bangladesh',
    city: 'Dhaka',
    address: 'House# 5/12, Road#3',
    status: 'pending',
  };
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [orderinfo, setOrderInfo] = useState(orderDetails);

  const handleInfoBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderDetails = { ...orderinfo };
    newOrderDetails[field] = value;

    console.log(newOrderDetails);
    setOrderInfo(newOrderDetails);
  };
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    console.log('inside function');
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(orderinfo),
    })
      .then((res) => res.json())
      .then((data) => setPurchaseSuccess(data.acknowledged));
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
          defaultValue={user.email}
          label='Email'
          variant='standard'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='mobile'
          label='Mobile'
          variant='standard'
          defaultValue='017121212'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='country'
          label='Country'
          variant='standard'
          defaultValue='Bangladesh'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='city'
          label='City'
          variant='standard'
          defaultValue='Dhaka'
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: '75%', my: 2 }}
          name='address'
          label='Address'
          variant='standard'
          defaultValue='House# 5/12, Road#3'
          onBlur={handleInfoBlur}
        />
        <Button type='submit' variant="contained" sx={{ width: '75%' }}>
          {' '}
          PLACE ORDER
        </Button>
      </form>
      {purchaseSuccess && (
        <Alert severity='success'>Purchased successfully!</Alert>
      )}
    </Container>
  );
};

export default PurchaseForm;
