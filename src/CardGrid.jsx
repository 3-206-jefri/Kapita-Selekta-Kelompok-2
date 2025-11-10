import React from 'react';
import Card from './Card'; 

const CardGrid = () => {
  
  // 6 item sesuai screenshot
  const cardData = [
    { title: 'Modul LITERASI DIGITAL', icon: '/src/assets/Literasi Digital 1.png' },
    { title: 'Modul KEAMANAN SIBER', icon: '/src/assets/Keamanan 1.png' },
    { title: 'Pre-Test', icon: '/src/assets/Pre Test 1.png' },
    { title: 'Post-Test', icon: '/src/assets/Post Test 1.png' },
    { title: 'Grafik', icon: '/src/assets/Grafik 2.png' },
    { title: 'Data', icon: '/src/assets/Data 1.png' },
  ];
  // CATATAN: Pastikan Anda punya semua 6 gambar ikon di folder /public/

  return (
    <section id="card-grid" className="card-grid">
      {cardData.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          icon={card.icon}
        />
      ))}
    </section>
  );
};

export default CardGrid;