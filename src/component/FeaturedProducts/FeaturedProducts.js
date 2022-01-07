import { ContentCutOutlined } from "@mui/icons-material";
import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import SingleProduct from "./SingleProduct/SingleProduct";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch("https://fathomless-sands-30445.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(true)
      });
  }, [products]);

  // products.splice(0, 2);
  return (
    <Container>
      <Typography
        gutterBottom
        variant="h3"
        color="text.secondary"
        component="div"
        sx={{ fontWeight: "bold", pt: 5, textAlign: "center" }}
      >
        Our Available Products
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={2}>


        {!isLoading ? <Skeleton><CardSkeleton></CardSkeleton></Skeleton> : (products.slice(0, 6).map((product) => (
          <SingleProduct product={product} key={product._id}></SingleProduct>)
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
