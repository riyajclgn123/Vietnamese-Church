import React from 'react';
import './About.css';
import avatar from '../assets/avatar1.jpg'
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
const navigate = useNavigate();

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Vietnamese Church</h1>
        <p>
          Welcome to Vietnamese Church! We are a vibrant, faith-filled community dedicated to worship, fellowship, and service.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To glorify God by making disciples of Jesus Christ through worship, teaching, and loving service to our community and beyond.
        </p>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Founded in 1995, Vietnamese Church has grown from a small group of believers into a thriving congregation. Over the years, we have been blessed to witness lives transformed, families strengthened, and our community enriched through faith and service.
        </p>
      </section>

      <section className="about-leadership">
        <h2>Our Leadership</h2>
        <div className="leadership-list">
          <div className="leader-card">
            <img src={avatar} alt="Pastor" />
            <h3>Pastor Nguyen Van A</h3>
            <p>Senior Pastor</p>
          </div>
          <div className="leader-card">
            <img src={avatar} alt="Assistant Pastor" />
            <h3>Pastor Tran Thi B</h3>
            <p>Assistant Pastor</p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Join Us!</h2>
        <p>
          Whether you are new to faith or looking for a church family, we welcome you to join our Sunday services and weekly activities.
        </p>
        <button
  className="about-contact-btn"
  onClick={() => navigate('/contact')}
>
  Contact Us
</button>
      </section>
    </div>
  );
};

export default About;