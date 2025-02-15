import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme, Avatar } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useAuth from "../hook/useAuth";
import AllOutIcon from '@mui/icons-material/AllOut';

const Header = () => {
  const [state, setState] = React.useState(false);
  const { user, logOut } = useAuth();
  const theme = useTheme();
  const useStyles = makeStyles({
    menuItem: {
      textDecoration: "none",
      color: "#fff",
    },
    menuDrawer: {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.87)",
    },
    icon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    menuContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    bandLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });
  const { bandLogo, menuItem, menuDrawer, icon, menuContainer } = useStyles();
  // Drawer
  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link className={menuDrawer} to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Divider />
        <Link className={menuDrawer} to="/shop">
          <ListItem button>
            <ListItemText primary="Shop" />
          </ListItem>
        </Link>
        <Divider />
        {user.email ? (
          <>
            <Link className={menuDrawer} to="/dashbord">
              <ListItem button>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Divider />
            <ListItem button>
              <ListItemText primary={` ${user.displayName}`} />
            </ListItem>
            <Divider />

            <ListItem onClick={logOut} button>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <Link className={menuDrawer} to="/login">
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, py: 1 }}
              className={icon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <AllOutIcon />
            <Typography
              className={bandLogo}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}

            >

              Vacuology
            </Typography>
            <Box className={menuContainer}>
              <Link className={menuItem} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={menuItem} to="/shop">
                <Button color="inherit">Shop</Button>
              </Link>

              {user.email ? (
                <>
                  <Link className={menuItem} to="/dashbord">
                    <Button color="inherit">Dashboard</Button>
                  </Link>

                  <Button color="inherit">
                    <Avatar
                      alt={user.displayName}
                      src={user.photoURL ? user.photoURL : ""}
                      sx={{ width: 24, height: 24, mr: 1 }}
                    />
                    {user.displayName}
                  </Button>
                  <Button onClick={logOut} color="inherit">
                    Logout
                  </Button>
                </>
              ) : (
                <Link className={menuItem} to="/login">
                  <Button color="inherit">Login</Button>
                </Link>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Drawer */}
      <div>
        <SwipeableDrawer onOpen={state} onClose={() => setState(false)}>
          {list}
        </SwipeableDrawer>
      </div>
    </>
  );
};

export default Header;
