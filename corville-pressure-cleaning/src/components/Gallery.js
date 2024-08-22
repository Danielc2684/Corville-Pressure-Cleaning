import React from 'react';

const galleryImages = [
  { src: 'img1.jpg', alt: 'Gallery Image 1' },
  { src: 'img2.jpg', alt: 'Gallery Image 2' },
  { src: 'img3.jpg', alt: 'Gallery Image 3' },
  { src: 'img4.jpg', alt: 'Gallery Image 4' }
];

const Gallery = () => {
  return (
    <div className="gallery-section">
      <h2>Our Work</h2>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="gallery-img" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
