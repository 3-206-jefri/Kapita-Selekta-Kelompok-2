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
              {/* PERBAIKAN: Link Google Maps menggunakan HTTPS dan query lokasi */}
              <iframe 
                src="https://maps.google.com/maps?q=Kantor%20Balai%20Desa%20Way%20Hui&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Desa">
              </iframe>
            </div>
          </div>

          <div className="footer-map-section">
            <h3>Wilayah Desa</h3>
            <div className="map-placeholder-footer">
               {/* PERBAIKAN: Link Google Maps untuk Wilayah Desa */}
              <iframe 
                src="https://maps.google.com/maps?q=Desa%20Way%20Hui%20Lampung%20Selatan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Wilayah Desa">
              </iframe>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;