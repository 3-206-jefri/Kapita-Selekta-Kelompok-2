import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-logo-icon">
          <i className='bx bx-info-circle'></i>
        </div>

        <h2>PEMERINTAH DESA WAY HUI</h2>
        <p>Desa Way Hui</p>
        <p>Kec. Jati Agung Kab. Lampung Selatan</p>
        <p className="footer-email">
          <i className='bx bx-envelope'></i> wayhuwi1789@gmail.com
        </p>
        
        <div className="footer-social">
          <a href="#" aria-label="Facebook">
            <i className='bx bxl-facebook-square'></i>
          </a>
        </div>

        <div className="footer-maps-container">
          
          <div className="footer-map-section">
            <h3>Lokasi Kantor Desa</h3>
            <div className="map-placeholder-footer">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.290518712061!2d105.32360237498393!3d-5.371261394607736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c5b3b6b66911%3A0xea3c3b092f026a11!2sKantor%20Desa%20Way%20Hui!5e0!3m2!1sen!2sid!4v1731241595168!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div className="footer-map-section">
            <h3>Wilayah Desa</h3>
            <div className="map-placeholder-footer">
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
        </div>

      </div>
    </footer>
  );
};

export default Footer;