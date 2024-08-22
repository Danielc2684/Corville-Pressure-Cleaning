import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Call us at (561) 288-0598 or use the form below to book a service.</p>
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
          <li>Dial the number (561) 288-0598.</li>
          <li>Listen to the prompts carefully.</li>
          <li>Press the appropriate number for the service you need.</li>
          <li>Leave a detailed message including your name, contact information, and preferred service time.</li>
        </ol>
      </div>
    </div>
  );
};

export default Contact;