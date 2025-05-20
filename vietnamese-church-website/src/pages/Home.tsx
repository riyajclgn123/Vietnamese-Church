import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';

import photo1 from '../assets/p1.jpg';
import photo2 from '../assets/p2.jpg';
import photo3 from '../assets/p3.jpg';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1>Welcome to Vietnamese Church</h1>
        <p>
          Experience faith, community, and inspiration. Join us for uplifting worship, vibrant fellowship, and meaningful service!
        </p>
      </section>
      <section className="home-carousel">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3500}
        >
          <div>
            <img src={photo1} alt="Worship Service" />
            <p className="legend">Spirit-filled Worship</p>
          </div>
          <div>
            <img src={photo2} alt="Community Event" />
            <p className="legend">Community Events</p>
          </div>
          <div>
            <img src={photo3} alt="Youth Gathering" />
            <p className="legend">Youth & Family Gatherings</p>
          </div>
        </Carousel>
      </section>
      <section className="home-features">
        <h2>What We Offer</h2>
        <div className="features-list">
          <div className="feature-card">
            <span role="img" aria-label="Worship" className="feature-icon">🙏</span>
            <h3>Inspiring Worship</h3>
            <p>Join us every Sunday for heartfelt worship and powerful messages.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="Community" className="feature-icon">🤝</span>
            <h3>Community Support</h3>
            <p>We care for each other through prayer, outreach, and fellowship.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="Youth" className="feature-icon">🌱</span>
            <h3>Youth & Kids</h3>
            <p>Fun, faith-building programs for children and teens of all ages.</p>
          </div>
        </div>
      </section>
      <section className="home-cta">
        <h2>Be Part of Our Family</h2>
        <p>
          Everyone is welcome at Vietnamese Church. Come as you are and discover a place to belong!
        </p>
        <a href="/about" className="home-cta-btn">Learn More</a>
      </section>
    </div>
  );
};

export default Home;