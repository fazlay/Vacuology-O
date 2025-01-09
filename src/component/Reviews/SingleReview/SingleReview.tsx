import Typography from "@mui/material/Typography";

import { styled } from "styled-components";
import Rating from "@mui/material/Rating";

const SingleReview = ({ review }) => {
  const CardContainer = styled.div`
    border: 1px solid lightgrey;
    border-radius: 10px;
    background-color: white;
    hover: {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    padding: 1.5rem;

    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: lightgrey;
      box-shadow: 0 0 5px 2px grey;
    }
  `;
  const Title = styled(Typography)`
    font-weight: 700 !important;
    font-size: 2.5rem;
    padding-bottom: 0.2rem;
  `;
  const BodyText = styled(Typography)`
    padding-top: 0.5rem;
    font-size: 1.5rem;
    line-height: 3rem;
  `;

  const DesignationTitle = styled(Typography)`
    color: grey;
    font-weight: 500 !important;
    padding-bottom: 0.2rem;
    padding-bottom: 0.2rem;
  `;
  return (
    <CardContainer>
      <div>
        <Title> {review.name.toUpperCase()}</Title>
        <DesignationTitle>CTO</DesignationTitle>

        <Rating name="read-only" value={review.rating} readOnly />
      </div>

      <Title> Lorem ipsum dolor </Title>

      <BodyText>
        {console.log({ review })}
        {review.userReview}
      </BodyText>
    </CardContainer>
  );
};
export default SingleReview;
