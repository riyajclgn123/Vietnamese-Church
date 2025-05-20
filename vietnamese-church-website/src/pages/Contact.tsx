import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Reach out with questions, prayer requests, or to learn more about our church family.
        </p>
      </section>

      <div className="contact-content">
        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send</button>
        </form>

        <div className="contact-info">
          <h2>Church Info</h2>
          <p><strong>Email:</strong> info@vietnamesechurch.org</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Address:</strong> 123 Church St, City, State, ZIP</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;