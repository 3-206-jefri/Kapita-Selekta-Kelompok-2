// src/CardGrid.jsx
import React from 'react';
import Card from './Card'; 

const CardGrid = ({ onCardClick }) => {
  
  const cardData = [
    { 
      id: 1,
      title: 'Modul LITERASI DIGITAL', 
      icon: '/Literasi Digital 1.png', // DIUBAH
      modalTitle: 'Modul Literasi Digital',
      description: 'Deskripsi lengkap tentang Modul Literasi Digital ada di sini. Anda bisa menjelaskan apa saja yang akan dipelajari oleh masyarakat desa.'
    },
    { 
      id: 2,
      title: 'Modul KEAMANAN SIBER', 
      icon: '/Keamanan 1.png', // DIUBAH
      modalTitle: 'Modul Keamanan Siber',
      description: 'Penjelasan mendalam mengenai Modul Keamanan Siber. Mencakup cara menghindari penipuan, mengamankan data pribadi, dan lainnya.'
    },
    { 
      id: 3,
      title: 'Pre-Test', 
      icon: '/Pre Test 1.png', // DIUBAH
      modalTitle: 'Pre-Test Literasi Digital',
      description: 'Tes ini bertujuan untuk mengukur pemahaman awal Anda tentang literasi digital dan keamanan siber sebelum memulai modul.'
    },
    { 
      id: 4,
      title: 'Post-Test', 
      icon: '/Post Test 1.png', // DIUBAH
      modalTitle: 'Post-Test Literasi Digital',
      description: 'Setelah menyelesaikan modul, tes ini akan mengukur seberapa besar peningkatan pemahaman Anda. Semoga berhasil!'
    },
    { 
      id: 5,
      title: 'Grafik', 
      icon: '/Grafik 2.png', // DIUBAH
      modalTitle: 'Grafik Perkembangan',
      description: 'Lihat data dan grafik perkembangan nilai pre-test dan post-test dari seluruh peserta di Desa Way Hui.'
    },
    { 
      id: 6,
      title: 'Data', 
      icon: '/Data 1.png', // DIUBAH
      modalTitle: 'Data Peserta',
      description: 'Halaman ini berisi data mentah dari para peserta yang telah mengikuti program literasi digital (hanya dapat diakses oleh admin).'
    },
  ];

  return (
    <section id="card-grid" className="card-grid">
      {cardData.map((card) => (
        <Card 
          key={card.id}
          title={card.title} 
          icon={card.icon}
          onClick={() => onCardClick(card)} 
        />
      ))}
    </section>
  );
};

export default CardGrid;