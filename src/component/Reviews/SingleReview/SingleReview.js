import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Rating from 'react-rating';

const SingleReview = ({ review }) => {
  console.log(review);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <FormatQuoteIcon />
        <Typography variant='body2' color='text.secondary'>
          {review.userReview}
        </Typography>
        <Rating
        color='golden'
          className='rating'
          name='rating'
          size={36}
          fullSymbol='fas fa-star'
          emptySymbol='far fa-star'
          initialRating={review.rating}
          readonly
        />
      </CardContent>

      <CardActions>
        <Avatar sx={{ ml: 1 }} src='/broken-image.jpg' />
        <Typography variant='body2' color='text.secondary' sx={{ ml: 1 }}>
          {review.name}
        </Typography>
      </CardActions>
    </Card>
  );
};
export default SingleReview;
