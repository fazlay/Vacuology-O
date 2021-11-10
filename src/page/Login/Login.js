import { Button, Container, TextField } from '@mui/material';

import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../component/hook/useAuth';

const Login = () => {
  let userInfo = { email: '', password: '' };
  const {loginUser}=useAuth()
  const location = useLocation();
  const history = useHistory();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    userInfo = { ...userInfo };
    console.log(userInfo);
  };

  const handleSumit = (e) => {
    loginUser(userInfo.email, userInfo.password,location,history)
    console.log(userInfo.email, userInfo.password);
    e.preventDefault();
  };
  return (
    <Container sx={{ width: '25%' }}>
      <h2>This is Login</h2>
      <form onSubmit={handleSumit}>
        <TextField
          id='standard-email-input'
          label='Email'
          type='email'
          name="email"
          autoComplete='current-email'
          variant='standard'
          onChange={handleChange}
        />
        <TextField
          id='standard-password-input'
          label='Password'
          type='password'
          name='password'
          autoComplete='current-password'
          variant='standard'
          onChange={handleChange}
        />
        <Button type="submit" varient='contained'> LOGIN</Button>
      </form>
    </Container>
  );
};

export default Login;
