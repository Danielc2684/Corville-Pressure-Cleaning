import React from 'react';
import './Reviews.css';

const reviews = [
  {
    image: 'boots.jpg', // Replace with actual image paths
    name: 'John Doe',
    review: 'Corville Pressure Cleaners did an amazing job on my driveway. Highly recommend!',
  },
  {
    image: 'boots.jpg',
    name: 'Jane Smith',
    review: 'Professional and efficient service. My house looks brand new!',
  },
  {
    image: 'boots.jpg',
    name: 'Michael Johnson',
    review: 'The team was friendly and did an excellent job. Will use them again.',
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <img src={review.image} alt={review.name} className="review-image" />
            <h4 className="review-name">{review.name}</h4>
            <p className="review-text">"{review.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
