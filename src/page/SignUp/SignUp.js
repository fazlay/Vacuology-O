import { Button, Container, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
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
      <h2>This is SignUp</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id='standard-email-input'
          label='Name'
          type='text'
          variant='standard'
          name='name'
          onBlur={handleOnBlur}
        />
        <TextField
          id='standard-email-input'
          label='Email'
          type='email'
          variant='standard'
          name='email'
          onBlur={handleOnBlur}
        />
        <TextField
          id='standard-password-input'
          label='Password'
          type='password'
          variant='standard'
          name='password'
          onBlur={handleOnBlur}
        />
        {/* <TextField
          id='standard-password-input2'
          label='Re-Type Password'
          type='password'
          variant='standard'
          name='password2'
         nBlur={handleOnBlur}
        /> */}
        <Button type='submit'>Submit</Button>
      </form>
    </Container>
  );
};

export default SignUp;
