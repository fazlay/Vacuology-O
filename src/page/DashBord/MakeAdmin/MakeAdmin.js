import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [adminMail, setAdminMail] = useState('');
  const [makeAdminSucess, setMakeAdminSucess] = useState(false);

  const handleBlur = (e) => {
    setAdminMail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { adminMail };
    console.log(user);
    fetch('https://vacuology-server.onrender.com/user/admin', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setMakeAdminSucess(data.acknowledged));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          id='standard-password-input'
          label='Enter Desired Email'
          type='email'
          name='email'
          autoComplete='current-password'
          variant='standard'
          sx={{ width: '100%', mt: 10, display: 'block' }}
          onBlur={handleBlur}
        />
        <Button
          sx={{ width: '25%', my: 5, display: 'block' }}
          type='submit'
          variant='contained'
        >
          {' '}
          MAKE ADMIN
        </Button>
      </form>
      {makeAdminSucess && (
        <Alert severity='success'>Make Admin successfully!</Alert>
      )}
    </Container>
  );
};

export default MakeAdmin;
