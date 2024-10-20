import React from 'react';
// Make sure this is imported in your file

const HeroSection = () => (
  <div className="hero-container">
    {/* First Image */}
    <div className="hero-image top-image">
      <img src="pink.jpg" alt="Model 1" className="im1" />
    </div>

    {/* Text Section */}
    <section className="hero">
      <div className="hero-content">
        <h2>SUMMER 2020</h2>
        <h1>Multicoloured <br/>Tie-dye Sweater</h1>
        <p>We know how large objects will act,</p>
        <a href="#shop" className="btn btn-primary">SHOP NOW</a>
      </div>
    </section>

    {/* Second Image */}
    <div className="hero-image bottom-image">
      <img src="wite.jpg" alt="Model 2" />
    </div>
  </div>
);

export default HeroSection;
