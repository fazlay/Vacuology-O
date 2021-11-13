import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import useAuth from '../../component/hook/useAuth';

const SignUp = () => {
  let userInfo = { name: '', email: '', password: '' };
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    userInfo = { ...userInfo };
  };
  const handleSubmit = (e) => {
    console.log(userInfo.name, userInfo.email, userInfo.password);
    registerUser(userInfo.name, userInfo.email, userInfo.password, history);
    e.preventDefault();
  };

  return (
    <Container sx={{ width: '25%' }}>
      <h2> SignUp Now !!!</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id='standard-email-input'
          label='Name'
          type='text'
          variant='standard'
          name='name'
          onBlur={handleOnBlur}
          sx={{ width: 1 }}
        />
        <TextField
          id='standard-email-input'
          label='Email'
          type='email'
          variant='standard'
          name='email'
          onBlur={handleOnBlur}
          sx={{ width: 1 }}
        />
        <TextField
          id='standard-password-input'
          label='Password'
          type='password'
          variant='standard'
          name='password'
          onBlur={handleOnBlur}
          sx={{ width: 1 , mb:3}}
        />

        <Link to='/login' style={{ textDecoration: 'none' }}>
          <Typography variant='p' color='blue' sx={{ fontWeight: 'bold' }}>
            ALREADY HAVE ACCOUNT ?? LOGIN NOW
          </Typography>
        </Link>

        <Button variant='contained' type='submit' sx={{ width: 1, my: 3 }}>
          Submit
        </Button>
      </form>
      {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
    </Container>
  );
};

export default SignUp;
