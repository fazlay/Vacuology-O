import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import styled from "styled-components";
import { Typography } from "@mui/material";
const SmallCard = ({ title, icon }) => {
  const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #1976d2;
    border-radius: 20px;
    padding: 20px;
  `;

  const SmallText = styled(Typography)`
    padding-top: 12px;
    font-size: 20px;
    font-weight: 100;
    line-height: 18px !important;
    text-align: center;
    color: #858282;
  `;
  return (
    <div>
      <FlexDiv>
        {icon}
        {/* <Icon sx={{ fontSize: 40 }} /> */}
        <SmallText>{title}</SmallText>
      </FlexDiv>
    </div>
  );
};

export default SmallCard;
