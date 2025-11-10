// src/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Literasi Digital dan Keamanan Siber untuk Masyarakat Desa Way Hui</h1>
        </div>
      </div>
      
      {/* Container ini sekarang akan memiliki gradient background */}
      <div className="hero-map-container">
        {/* .swoosh-left dan .swoosh-right DIHAPUS */}
        <div className="hero-map-frame">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.589831154378!2d105.3194098416453!3d-5.36701049972322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5c363f03b51%3A0x60f4c2e68f303abe!2sWay%20Hui%2C%20South%20Jati%20Agung%2C%20South%20Lampung%20Regency%2C%20Lampung!5e0!3m2!1sen!2sid!4v1731241712418!5m2!1sen!2sid" 
            width="100%" 
            height="100%" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;