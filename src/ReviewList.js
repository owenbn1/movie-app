// ReviewList.js
import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => (
  <div>
    <h3>Reviews</h3>
    {reviews.map((review, index) => (
      <Review key={index} reviewText={review} />
    ))}
  </div>
);

export default ReviewList;