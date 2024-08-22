import React from 'react';

const reviews = [
  "Corville Pressure Cleaners did an amazing job on my driveway. Highly recommend!",
  "Professional and efficient service. My house looks brand new!",
  "The team was friendly and did an excellent job. Will use them again."
];

const Reviews = () => {
  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <p key={index} className="review-item">"{review}"</p>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
