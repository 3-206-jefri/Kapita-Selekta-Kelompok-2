import React, { useState } from 'react';

const Hero = () => {
  // Ganti src ini dengan nama file foto asli Anda di folder public
  const slides = [
    { id: 1, src: 'FotoKegiatan.jpg', caption: 'Musyawarah Desa Penetapan IDM' },
    { id: 2, src: 'FotoKegiatan4.jpg', caption: 'Sosialisasi Literasi Digital' },
    { id: 3, src: 'FotoKegiatan2.jpg', caption: 'Sosialisasi Keamanan Siber' },
    { id: 3, src: 'FotoKegiatan3.jpg', caption: 'Peserta Sosialisasi '}
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Literasi Digital dan Keamanan Siber untuk Masyarakat Desa Way Hui</h1>
        </div>
      </div>
      
      {/* Container Background Gradient Tetap Ada */}
      <div className="hero-map-container">
        
        {/* Frame Slider Baru */}
        <div className="hero-slider-frame">
          
          <div className="slider-window">
            {/* Bagian Track yang Diberi Animasi Slide */}
            <div 
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="slide-item">
                  <img src={slide.src} alt={slide.caption} />
                  <div className="slide-caption">
                    <p>{slide.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Navigasi */}
          <button className="slider-btn prev-btn" onClick={prevSlide}>
            <i className='bx bx-chevron-left'></i>
          </button>
          <button className="slider-btn next-btn" onClick={nextSlide}>
            <i className='bx bx-chevron-right'></i>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Hero;