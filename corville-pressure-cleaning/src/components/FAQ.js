import React from 'react';

const faqs = [
  { question: 'How often should I pressure wash my house?', answer: 'It depends on the local environment, but generally, it\'s recommended to pressure wash your house at least once a year to remove dirt, mold, and mildew.' },
  { question: 'Is pressure washing safe for my surfaces?', answer: 'Yes, when done correctly. Our team uses the right pressure and techniques to ensure no damage to your surfaces.' }
];

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;