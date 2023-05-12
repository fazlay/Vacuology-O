import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RedeemIcon from "@mui/icons-material/Redeem";
import { useNavigate } from "react-router-dom";
const ProductTitle = styled(Typography)`
  padding-top: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #363636;
`;
const SubTitle = styled(Typography)`
  padding-top: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
`;

const SmallText = styled(Typography)`
  font-size: 11px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #828282;
`;
const FooterItemContainer = styled.div`
  padding: 12px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3px 3px;
  justify-content: space-around;
`;
const PrimaryButton = styled(LoadingButton)`
  border-radius: 100px;
  width: 100%;
  margin: 12px 0px;
`;
const CardMediaContainer = styled(CardMedia)`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(252, 248, 248, 1) 0%
  );
`;
const OfferBadge = styled.div`
  font-size: 15px;
  font-weight: 700;
  border: 2px solid #363636;
  border-radius: 5px;
  padding: 5px 8px;
  margin-right: 80px;
`;
const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const SingleProduct = ({ product }) => {
  const navigate = useNavigate();
  const { name, description, img, price, _id } = product;
  return (
    <>
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            border: "none",
            boxShadow: "none",
            width: "300px",
            borderRadius: "20px",
          }}
        >
          <CardActionArea sx={{ p: "20px" }}>
            {/* <Link
              to={`/products/${_id}`}
              style={{ textDecoration: "none", p: 0 }}
            > */}
            <CardMediaContainer
              image={img}
              sx={{
                width: "100px",
                height: "100px",
                margin: "auto",
                py: 5,
              }}
            />
            <ProductTitle>{name.slice(0, 10)}</ProductTitle>
            <SubTitle>{description.slice(0, 50)}</SubTitle>
            <ActionContainer>
              {" "}
              <ProductTitle>$ {price}</ProductTitle>{" "}
              <OfferBadge>35% off</OfferBadge>
            </ActionContainer>
            <Divider sx={{ pt: "12px" }} />
            <FooterItemContainer>
              <FooterItemContainer>
                <LocalShippingIcon sx={{ color: "#828282", pr: 0.5 }} />
                <SmallText sx={{ display: "inline" }}>Free Shipping</SmallText>
              </FooterItemContainer>
              <FooterItemContainer>
                <RedeemIcon sx={{ color: "#828282", pr: 0.5 }} />
                <SmallText sx={{ display: "inline" }}>Free Gift</SmallText>
              </FooterItemContainer>
            </FooterItemContainer>
            {/* </Link> */}
            <div>
              <PrimaryButton
                onClick={() => navigate(`/products/${_id}`)}
                variant="contained"
              >
                View Deal
              </PrimaryButton>
            </div>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default SingleProduct;
