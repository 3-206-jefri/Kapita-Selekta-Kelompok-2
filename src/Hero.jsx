import React, { useState } from 'react';

const Hero = () => {
  // PERBAIKAN: 
  // 1. Jalur gambar tidak perlu pakai '/public', cukup '/'
  // 2. ID harus unik (item terakhir diubah jadi id: 4)
  // 3. Typo '/Public' diperbaiki jadi huruf kecil
  const slides = [
    { id: 1, src: '/FotoKegiatan.jpg', caption: 'Dokumentasi Sosialisasi' },
    { id: 2, src: '/FotoKegiatan4.jpg', caption: 'Sosialisasi Literasi Digital' },
    { id: 3, src: '/FotoKegiatan2.jpg', caption: 'Sosialisasi Keamanan Siber' },
    { id: 4, src: '/FotoKegiatan3.jpg', caption: 'Peserta Sosialisasi '}
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