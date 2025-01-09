import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";
import SingleProduct from "./SingleProduct/SingleProduct";
import { apiMethod } from "../../config/apiMethod";
import ProTipCard from "../common/ProTiopCard";
import { HeaderTitleText } from "../../page/Home/style";

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
      <HeaderTitleText>Our Products</HeaderTitleText>

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
