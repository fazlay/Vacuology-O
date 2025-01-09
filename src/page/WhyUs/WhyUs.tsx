import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CallIcon from "@mui/icons-material/Call";
import { styled } from "styled-components";
import SmallCard from "./SmallCard";
import { HeaderTitleText } from "../Home/style";
const WhyUs = () => {
  return (
    <Container>
      <HeaderTitleText>Why to choose us ?</HeaderTitleText>

      <Grid container spacing={2} sx={{ py: 5, textAlign: "text-align" }}>
        <Grid item xs={12} sm={3}>
          <SmallCard
            title={"Home Trial"}
            icon={<ApartmentIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SmallCard
            title={" Free Shipping"}
            icon={<LocalShippingIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SmallCard
            title={" 3 Years Warranty"}
            icon={<AddModeratorIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SmallCard
            title={"24/7 On Call Service"}
            icon={<CallIcon sx={{ fontSize: 40 }} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
