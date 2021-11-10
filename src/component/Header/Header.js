import { AppBar, IconButton, Toolbar, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Header = () => {
  const {logOut,user}=useAuth()
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <NavLink
              to='/home'
              style={{
                textDecoration: 'none',
                color: 'white',
                px: 1,
                fontWeight: 'bold',
              }}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
              }}
            >
              <Typography variant='p' component='p' sx={{ mx: 3 }}>
                HOME
              </Typography>
            </NavLink>
            <NavLink
              to='/shop'
              style={{
                textDecoration: 'none',
                color: 'white',
                m: 1,
                fontWeight: 'bold',
              }}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                m: 1,
              }}
            >
              <Typography variant='p' component='p' sx={{ mx: 3 }}>
                SHOP
              </Typography>
            </NavLink>
            <NavLink
              to='/login'
              style={{
                textDecoration: 'none',
                color: 'white',
                m: 1,
                fontWeight: 'bold',
              }}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                m: 1,
              }}
            >
               <Button color='inherit'>LOGIN</Button>
            </NavLink>
            <NavLink
              to='/signup'
              style={{
                textDecoration: 'none',
                color: 'white',
                m: 1,
                fontWeight: 'bold',
              }}
              activeStyle={{
                fontWeight: 'bold',
                color: 'red',
                m: 1,
              }}
            >
               <Button color='inherit'>SIGNUP</Button>
            </NavLink>
           {user.email && <Typography variant='p' component='p' sx={{ mx: 3 }}>
              {user.email}
              </Typography>}
            <Button onClick={logOut}color='inherit'>LOGOUT</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
