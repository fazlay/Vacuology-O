import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useAuth from "../../../component/hook/useAuth";

const PurchaseForm = ({ id, selectedProduct }) => {
  const { user } = useAuth();

  const orderDetails = {
    productId: id,
    productName: selectedProduct.name,
    productPrice: selectedProduct.price,
    userName: user.displayName,
    email: user.email,
    mobile: "017121212",
    country: "Bangladesh",
    city: "Dhaka",
    address: "House# 5/12, Road#3",
    status: "pending",
  };
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [orderinfo, setOrderInfo] = useState(orderDetails);

  const handleInfoBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderDetails = { ...orderinfo };
    newOrderDetails[field] = value;

    console.log(newOrderDetails);
    setOrderInfo(newOrderDetails);
  };
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    console.log(orderinfo);
    fetch("https://vacuology-server.onrender.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderinfo),
    })
      .then((res) => res.json())
      .then((data) => setPurchaseSuccess(data.acknowledged));
  };
  //   if (!selectedProduct) return (
  //   <CircularProgress />
  // );
  return (
    <Container sx={{ pt: 5 }}>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingBottom: "3",
          textAlign: "center",
        }}
      >
        ORDER DETAILS
      </Typography>
      <form onSubmit={handlePurchaseSubmit}>
        <TextField
          sx={{ width: "75%", my: 2 }}
          name="name"
          defaultValue={user.displayName}
          label="Name"
          variant="standard"
          onBlur={handleInfoBlur}
        />

        <TextField
          sx={{ width: "75%", my: 2 }}
          name="email"
          defaultValue={user.email}
          label="Email"
          variant="standard"
          onBlur={handleInfoBlur}
        />

        <TextField
          sx={{ width: "75%", my: 2 }}
          name="mobile"
          label="Mobile"
          variant="standard"
          defaultValue="017121212"
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: "75%", my: 2 }}
          name="country"
          label="Country"
          variant="standard"
          defaultValue="Bangladesh"
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: "75%", my: 2 }}
          name="city"
          label="City"
          variant="standard"
          defaultValue="Dhaka"
          onBlur={handleInfoBlur}
        />
        <TextField
          sx={{ width: "75%", my: 2 }}
          name="address"
          label="Address"
          variant="standard"
          defaultValue="House# 5/12, Road#3"
          onBlur={handleInfoBlur}
        />
        <Button type="submit" variant="contained" sx={{ width: "75%" }}>
          {" "}
          PLACE ORDER
        </Button>
      </form>
      {purchaseSuccess && (
        <Alert severity="success">Purchased successfully!</Alert>
      )}
    </Container>
  );
};

export default PurchaseForm;
