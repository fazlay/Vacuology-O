import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import SingleProduct from "./SingleProduct/SingleProduct";
import { apiMethod } from "../../config/apiMethod";
import ProTipCard from "../common/ProTiopCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    apiMethod.get("/products").then((res) => {
      const manipulateData = res.data.splice(4, 0, null);

      setProducts(res.data);
      setIsLoading(true);
    });
  }, []);

  return (
    <Container>
      <Typography
        gutterBottom
        variant="h3"
        color="text.secondary"
        component="div"
        sx={{ fontWeight: "bold", pt: 5, textAlign: "center" }}
      >
        Our Products
      </Typography>

      <Grid container spacing={2}>
        {!isLoading ? (
          <Skeleton>
            <CardSkeleton></CardSkeleton>
          </Skeleton>
        ) : (
          <>
            {products.slice(0, 9).map((product) => {
              return !!product ? (
                <SingleProduct
                  product={product}
                  key={product._id}
                ></SingleProduct>
              ) : (
                <ProTipCard />
              );
            })}
          </>
        )}
      </Grid>
    </Container>
  );
};

export default FeaturedProducts;
