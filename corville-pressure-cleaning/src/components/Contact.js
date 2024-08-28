import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Call us at <a href="tel:+15612880598">(561) 288-0598</a> or use the form below to book a service.</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="date" placeholder="Preferred Date" required />
        <input type="text" placeholder="Service Needed" required />
        <button type="submit">Book Now</button>
      </form>
      <div className="call-instructions">
        <h4>Instructions for Calling</h4>
        <ol>
          <li>Dial the number <a href="tel:+15612880598">(561) 288-0598</a>.</li>
          <li>Listen to the prompts carefully.</li>
          <li>Press the appropriate number for the service you need.</li>
          <li>Leave a detailed message including your name, contact information, and preferred service time.</li>
        </ol>
      </div>
      <div className="map-container">
        <h4>Our Location</h4>
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179016.41059827484!2d-80.16028883281678!3d26.647986015857695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8db6f1f73e83d%3A0x418dc5931bcbf127!2sPalm%20Beach%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1692795269844!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
