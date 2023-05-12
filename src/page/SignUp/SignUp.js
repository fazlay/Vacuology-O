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
import { Link, useLocation } from "react-router-dom";
import React from "react";
import useAuth from "../../component/hook/useAuth";
import { Box } from "@mui/system";
import GoogleIcon from "@mui/icons-material/Google";
import LotteLogin from "../../component/lotte/LotteLogin";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  let userInfo = { name: "", email: "", password: "" };
  const navigate = useNavigate();
  const { user, registerUser, isLoading, authError, signInWithGoogle } =
    useAuth();
  const location = useLocation();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    userInfo[field] = value;
    userInfo = { ...userInfo };
  };
  const handleSubmit = (e) => {
    console.log(userInfo.name, userInfo.email, userInfo.password);
    registerUser(userInfo.name, userInfo.email, userInfo.password, navigate);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {" "}
          <LotteLogin></LotteLogin>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <Box sx={{ paddingLeft: "100px", paddingRight: "100px" }}>
            <h2> SignUp Now !!!</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-email-input"
                label="Name"
                type="text"
                variant="standard"
                name="name"
                onBlur={handleOnBlur}
                sx={{ width: 1 }}
              />
              <TextField
                id="standard-email-input"
                label="Email"
                type="email"
                variant="standard"
                name="email"
                onBlur={handleOnBlur}
                sx={{ width: 1 }}
              />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
                sx={{ width: 1, mb: 3 }}
              />

              <Link to="/login" style={{ textDecoration: "none" }}>
                <Typography
                  variant="p"
                  color="blue"
                  sx={{ fontWeight: "bold" }}
                >
                  ALREADY HAVE ACCOUNT ?? LOGIN NOW
                </Typography>
              </Link>

              <Button
                variant="contained"
                type="submit"
                sx={{ width: 1, my: 3 }}
              >
                Submit
              </Button>
            </form>
            <Divider>OR SIGN UP WITH</Divider>
            <Button
              sx={{ width: 1, my: 3 }}
              variant="contained"
              color="error"
              onClick={() => {
                handleGoogleSignIn();
              }}
            >
              <GoogleIcon sx={{ pr: "20px" }} /> | SIGN UP With Google
            </Button>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
