import React from 'react';
import './Services.css';

const services = [
  { image: 'boots.jpg', title: 'House Washing', description: 'Keep your home looking new with our house washing services.' },
  { image: 'boots.jpg', title: 'Driveway Cleaning', description: 'Remove stains and dirt from your driveway.' },
  { image: 'boots.jpg', title: 'Roof Cleaning', description: 'Protect your roof with our gentle cleaning techniques.' },
  { image: 'boots.jpg', title: 'Commercial Cleaning', description: 'Professional cleaning for commercial properties.' }
];

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
