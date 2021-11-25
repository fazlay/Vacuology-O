import {
  CardMedia,
  CircularProgress,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
import React from "react";

const Productdes = ({ selectedProduct }) => {
  const { name, img, description } = selectedProduct;
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  console.log(selectedProduct);
  return (
    <Paper sx={{ pb: 2, mb: 2, pt: 5, px: 5 }}>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingBottom: "20px",
        }}
      >
        {name.slice(0, 20)}
      </Typography>
      <animated.div
        ref={ref}
        style={{
          color: "white",
          padding: "2em",
          ...style,
        }}
        {...mouseHandlers}
      >
        <CardMedia
          sx={{ width: "50%", height: "25%", mx: "auto" }}
          component="img"
          image={img}
          alt="Vacume Claener "
          align="center"
        />
      </animated.div>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          paddingBottom: "3",
        }}
      >
        product Description
      </Typography>
      <Divider />
      <Typography
        variant="p"
        component="p"
        sx={{
          mt: 3,
          fontSize: 16,
          fontWeight: "light",
          letterSpacing: 1,
          mb: 3,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default Productdes;
