import React from 'react';
import Card from './Card'; 
import BarChart from './BarChart'; 

const CardGrid = ({ onCardClick }) => {
  const totalPeserta = 20; 

  const nilaiPreTest_raw = 13.8;  
  const nilaiPostTest_raw = 14.8; 
  const nilaiPreTest_percent = (nilaiPreTest_raw / totalPeserta) * 100;
  const nilaiPostTest_percent = (nilaiPostTest_raw / totalPeserta) * 100;

  const cardData = [
    { 
      id: 1,
      title: 'Modul LITERASI DIGITAL', 
      icon: '/Literasi Digital 1.png',
      modalTitle: 'Modul Literasi Digital',
      description: (
        <>
          <p>
            Klik tombol di bawah untuk membuka atau mengunduh modul dalam format PDF.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="/public/Literasi Digital (1).pdf"  
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link"
            >
              Buka PDF Literasi Digital
            </a>
          </div>
        </>
      )
    },
    { 
      id: 2,
      title: 'Modul KEAMANAN SIBER', 
      icon: '/Keamanan 1.png',
      modalTitle: 'Modul Keamanan Siber',
      description: (
        <>
          <p>
            Klik tombol di bawah untuk membuka atau mengunduh modul dalam format PDF.
          </p>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="/public/Modul Keamanan Siber  (1).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link"
            >
              Buka PDF Keamanan Siber
            </a>
          </div>
        </>
      )
    },
    { 
      id: 3,
      title: 'Pre-Test', 
      icon: '/Pre Test 1.png',
      modalTitle: 'Pre-Test Literasi Digital',
      description: (
        <>
          {/* Menggunakan tag <p> untuk deskripsi */}
          <p>
            Buka link di bawah untuk menuju ke Pre-Test.
          </p>
          
          {/* Wrapper untuk memposisikan tombol di tengah */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://wayground.com/admin/quiz/69132b6e7215406c1e22cafe?source=quiz_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link" // Menerapkan class CSS baru
            >
              Menuju Pre-Test
            </a>
          </div>
        </>
      )
    },
    { 
      id: 4,
      title: 'Post-Test', 
      icon: '/Post Test 1.png',
      modalTitle: 'Post-Test Literasi Digital',
      description: (
        <>
          {/* Menggunakan tag <p> untuk deskripsi */}
          <p>
            Buka link di bawah untuk menuju ke Post-Test.
          </p>
          
          {/* Wrapper untuk memposisikan tombol di tengah */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://wayground.com/admin/quiz/691346f68eb811ab3fa7b1ea?source=quiz_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link" // Menerapkan class CSS baru
            >
              Menuju Post-Test
            </a>
          </div>
        </>
      )
    },
    
    { 
      id: 5,
      title: 'Grafik', 
      icon: '/Grafik 2.png',
      modalTitle: 'Grafik Perkembangan Peserta',
      description: (
        <>
          <p>
            Grafik ini menunjukkan perbandingan jumlah peserta 
            yang berhasil sebelum (Pre-Test) dan sesudah (Post-Test) 
            mengikuti modul, dari total {totalPeserta} peserta.
          </p>
          
          <BarChart 
            preTestPercent={nilaiPreTest_percent} 
            preTestValue={nilaiPreTest_raw}       
            postTestPercent={nilaiPostTest_percent} 
            postTestValue={nilaiPostTest_raw}     
            maxValue={totalPeserta}               
          />
        </>
      )
    },
    { 
      id: 6,
      title: 'Data', 
      icon: '/Data 1.png',
      modalTitle: 'Data Peserta',
      description: (
        <pre className="data-preformatted">
{`Peserta Yang Hadir            : 22
Peserta Yang Mengikuti Test   : 20
Peserta Yang Lulus Pretest    : 14
Peserta Yang Lulus Posttest   : 15`}
        </pre>
      )
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