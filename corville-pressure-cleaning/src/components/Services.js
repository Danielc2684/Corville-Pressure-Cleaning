import React from 'react';

const services = [
  { icon: '🏠', title: 'House Washing', description: 'Keep your home looking new with our house washing services.' },
  { icon: '🧼', title: 'Driveway Cleaning', description: 'Remove stains and dirt from your driveway.' },
  { icon: '🌳', title: 'Roof Cleaning', description: 'Protect your roof with our gentle cleaning techniques.' },
  { icon: '🏢', title: 'Commercial Cleaning', description: 'Professional cleaning for commercial properties.' }
];

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
