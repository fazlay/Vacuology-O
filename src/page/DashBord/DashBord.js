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
import InboxIcon from '@mui/icons-material/MoveToInbox';

import { Route, Switch, useRouteMatch } from 'react-router';
import ManageOrder from './ManageOrder/ManageOrder';
import MyOrder from './MyOrder/MyOrder';
import AddProduct from './AddProduct/AddProduct';
import { Link } from 'react-router-dom';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../../component/hook/useAuth';
import AddReview from './AddReview/AddReview';
import ManageProducts from './ManageProducts/ManageProducts';

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

  const { admin } = useAuth();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let { path, url } = useRouteMatch();
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open}>
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
              Persistent drawer
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
            <Link to={`${url}/myorder`}>
              {' '}
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='My ORDER' />
              </ListItem>
            </Link>
          </List>
          {admin ? (
            <List>
              <Link to={`${url}/manageorder`}>
               
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Mangae Order' />
                  </ListItem>
                </Link>
             
              <Link to={`${url}/addproduct`}>
              
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='ADD PRODUCT' />
                  </ListItem>
              
              </Link>
              <Link to={`${url}/makeadmin`}>
              
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary='Make ADMIN' />
                  </ListItem>
              
              </Link>
              <Link to={`${url}/manageproducts`}>
              
                  <ListItem button>
                    <ListItemIcon>
                      <InboxIcon />
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

        <Switch>
          <Route exact path={`${path}/`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/manageorder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/myorder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageproducts`}>
          <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </>
  );
};

export default DashBord;
