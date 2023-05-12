import styled from "@emotion/styled";
import { Card, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const BigHeadingText = styled(Typography)`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #000000;
`;
const TextButton = styled.div`
  padding-top: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #1976d2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SmallText = styled(Typography)`
  font-size: 20px;
  font-weight: 100;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
`;
const CardContainer = styled.div`
  padding: 30px;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-evenly;
`;

const ProTipCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            border: "1px solid #1976d2",
            boxShadow: "none",
            backgroundColor: "transparent",
            width: "300px",
            height: "100%",
            borderRadius: "20px",
          }}
        >
          <CardContainer>
            <SmallText>PRO TIP</SmallText>
            <BigHeadingText>
              Choosing <br />
              you next <br /> Cleaner
            </BigHeadingText>

            <TextButton>
              Learn More <ArrowRightAltIcon />
            </TextButton>
          </CardContainer>
        </Card>
      </Grid>
    </>
  );
};

export default ProTipCard;
