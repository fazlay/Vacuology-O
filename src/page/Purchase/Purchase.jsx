import { CircularProgress, Grid } from "@mui/material";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Productdes from "./ProductDes/Productdes";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
import { apiMethod } from "../../config/apiMethod";
import {PaymentElement} from '@stripe/react-stripe-js';

const Purchase = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [productLoading, setProductLoading] = useState(true);
  const { id } = useParams();
  const url = `/products/${id}`;
  useEffect(() => {
    console.log("PURCHASE ", id);
    apiMethod
      .get(url)
      .then((data) => setSelectedProduct(data.data))
      .finally(() => setProductLoading(false));
  }, []);

  if (productLoading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Productdes
            productLoading={productLoading}
            selectedProduct={selectedProduct}
          ></Productdes>
        </Grid>
        <Grid item xs={6} md={4}>
          <PurchaseForm
            selectedProduct={selectedProduct}
            id={id}
          ></PurchaseForm>
           <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Purchase;
