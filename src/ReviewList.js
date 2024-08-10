import React, { useState, useEffect } from 'react';
import ReviewHighlighter from './ReviewHighlighter';
import reviewsData from './reviewsData.json'; // Assuming you have a JSON file or the data available

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(reviewsData);
  }, []);

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <ReviewHighlighter key={index} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
