import React from 'react';
import './Gallery.css';

const galleryImages = [
  { src: 'boots.jpg', alt: 'Beautifully Cleaned House Exterior' },
  { src: 'boots.jpg', alt: 'Driveway Before and After Cleaning' },
  { src: 'boots.jpg', alt: 'Sparkling Roof After Pressure Washing' },
  { src: 'boots.jpg', alt: 'Commercial Building Cleaned to Perfection' }
];

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Our Work</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-img" />
            <div className="gallery-caption">{image.alt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
