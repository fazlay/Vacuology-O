import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [adminMail, setAdminMail] = useState('');

  const handleBlur = (e) => {
    
    setAdminMail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user={adminMail}
    console.log(user);
    fetch('http://localhost:5000/user/admin', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    }).then();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id='standard-password-input'
          label='Enter Desired Email'
          type='email'
          name='email'
          autoComplete='current-password'
          variant='standard'
          sx={{ width: '100%', mt: 10 }}
          onBlur={handleBlur}
        />
        <Button sx={{ width: '75%', my: 5 }} type='submit' variant='contained'>
          {' '}
          MAKE ADMIN
        </Button>
      </form>
    </>
  );
};

export default MakeAdmin;
