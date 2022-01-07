import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { propsToClassKey } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { name, description, img, price, _id } = product;
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Paper elevation={0} sx={{ m: 3 }}>
          <Card
            sx={{
              maxWidth: 345,
              border: "none",
              boxShadow: "none",
              textAlign: "center",
            }}
          >
            <CardActionArea sx={{ pb: 3 }}>
              <Link to={`/products/${_id}`} style={{ textDecoration: "none" }}>
                <CardMedia
                  sx={{ mx: "auto", width: "50%" }}
                  component="img"
                  height="auto"
                  padding="5"
                  image={img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {name}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    $ {price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description.slice(0, 200)}
                  </Typography>
                </CardContent>
              </Link>
              <div sx={{ mx: "auto", textAlign: "center" }}>
                <Link
                  to={`/products/${_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained">BUY NOW</Button>
                </Link>
              </div>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </>
  );
};

export default SingleProduct;
