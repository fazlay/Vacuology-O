import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { deepPurple } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Route, Switch, useRouteMatch } from 'react-router';
import {Routes } from 'react-router-dom';
import ManageOrder from './ManageOrder/ManageOrder';
import MyOrder from './MyOrder/MyOrder';
import AddProduct from './AddProduct/AddProduct';
import { Link } from 'react-router-dom';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../component/hook/useAuth';
import AddReview from './AddReview/AddReview';
import ManageProducts from './ManageProducts/ManageProducts';
import { Button, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const DashBord = () => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

  const { admin, logOut } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let { path, url } = ['', '']
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}  >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Vacuology DASHBOORD
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              background:deepPurple[900],
              color: deepPurple[50] 
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to='/' style={{ color: 'white',  textDecoration: 'none'}}>
              <ListItem >
                <ListItemIcon>
                  <HomeIcon  sx={{ color: deepPurple[50] }}/>
                </ListItemIcon>
                <ListItemText primary='HOME'  />
              </ListItem>
            </Link>
            <Link to={`${url}/myorder`} style={{ color: 'white',  textDecoration: 'none'}} >
              <ListItemButton >
                <ListItemIcon>
                  <ShoppingCartIcon  sx={{ color: deepPurple[50] }} />
                </ListItemIcon>
                <ListItemText primary='My Order' />
              </ListItemButton>
            </Link>
            
              <ListItem  style={{ color: 'white',  textDecoration: 'none'}}>
                <ListItemIcon>
                  <LogoutIcon  sx={{ color: deepPurple[50] }} />
                </ListItemIcon>
                <Button sx={{ color: deepPurple[50] }} onClick={logOut}>LOGOUT</Button>
              </ListItem>
         
          </List>
          {admin ? (
            <List>
              <Link to={`${url}/manageorder`} style={{ color: 'white',  textDecoration: 'none'}}>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingCartIcon  sx={{ color: deepPurple[50] }}/>
                  </ListItemIcon>
                  <ListItemText primary='Mangae Order' />
                </ListItem>
              </Link>

              <Link to={`${url}/addproduct`} style={{ color: 'white',  textDecoration: 'none'}}>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleIcon  sx={{ color: deepPurple[50] }}/>
                  </ListItemIcon>
                  <ListItemText primary='ADD PRODUCT' />
                </ListItem>
              </Link>
              <Link to={`${url}/makeadmin`} style={{ color: 'white',  textDecoration: 'none'}}>
                <ListItem button>
                  <ListItemIcon>
                    <SupervisorAccountIcon  sx={{ color: deepPurple[50] }}/>
                  </ListItemIcon>
                  <ListItemText primary='Make ADMIN' />
                </ListItem>
              </Link>
              <Link to={`${url}/manageproducts`} style={{ color: 'white',  textDecoration: 'none'}}>
                <ListItem button>
                  <ListItemIcon>
                    <ShoppingCartIcon sx={{ color: deepPurple[50] }}/>
                  </ListItemIcon>
                  <ListItemText primary='MANAGE PRODUCTS' />
                </ListItem>
              </Link>
            </List>
          ) : (
            ''
          )}
        </Drawer>
        {/* <Main open={open}>
          <DrawerHeader />
        </Main> */}

        <Routes>
          
          <Route path={``} element={<AddReview />} />
          
          <Route path={`manageorder`} element={<ManageOrder/>}/>
          <Route path={`myorder`} element={<MyOrder />} />
          <Route path={`addproduct`} element={<AddProduct />} />
          <Route path={`makeadmin`} element={<MakeAdmin />} />
          <Route path={`manageproducts`} element={<ManageProducts />} />
        
        </Routes>
      </Box>
    </>
  );
};

export default DashBord;
