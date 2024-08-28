import React from 'react';

const services = [
  { image: '/images/house_washing.jpg', title: 'House Washing', description: 'Keep your home looking new with our house washing services.' },
  { image: '/images/driveway_cleaning.jpg', title: 'Driveway Cleaning', description: 'Remove stains and dirt from your driveway.' },
  { image: '/images/roof_cleaning.jpg', title: 'Roof Cleaning', description: 'Protect your roof with our gentle cleaning techniques.' },
  { image: '/clean.jpg', title: 'Commercial Cleaning', description: 'Professional cleaning for commercial properties.' } // Updated path
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
