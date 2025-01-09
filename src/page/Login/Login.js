import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";

import React from "react";
import {  useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../component/hook/useAuth";
import LotteLogin from "../../component/lotte/LotteLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let userInfo = { email: "", password: "" };
  const { loginUser, isLoading, authError, user, signInWithGoogle } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    userInfo = { ...userInfo };
    console.log(userInfo);
  };

  const handleSubmit = (e) => {
    loginUser(userInfo.email, userInfo.password, location, navigate);
    console.log(userInfo.email, userInfo.password);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <LotteLogin></LotteLogin>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="current-email"
                variant="standard"
                onChange={handleChange}
                sx={{ width: 1 }}
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                variant="standard"
                onChange={handleChange}
                sx={{ width: 1, mb: 5 }}
              />

              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  color="blue"
                  sx={{ fontWeight: "bold" }}
                >
                  DO NOT HAVE ACCOUNT ?? REGISTER NOW
                </Typography>
              </Link>
              <Button
                type="submit"
                sx={{ width: 1, my: 3 }}
                variant="contained"
              >
                {" "}
                LOGIN
              </Button>
            </form>
            <Divider>OR LOGIN WITH</Divider>
            <Button
              type="submit"
              sx={{ width: 1, my: 3 }}
              variant="contained"
              color="error"
              onClick={() => {
                handleGoogleSignIn();
              }}
            >
              <GoogleIcon sx={{ pr: "20px" }} /> | Login With Google
            </Button>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}{" "}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
