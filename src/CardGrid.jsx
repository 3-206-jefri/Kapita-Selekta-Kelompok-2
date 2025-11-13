import React from 'react';
import Card from './Card'; 
import BarChart from './BarChart'; 

const CardGrid = ({ onCardClick }) => {
  const totalPeserta = 50; 

  const nilaiPreTest_raw = 20;  
  const nilaiPostTest_raw = 44; 
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
          {/* Menggunakan tag <p> untuk deskripsi */}
          <p>
            Buka link di bawah untuk menuju ke modul.
          </p>
          
          {/* Wrapper untuk memposisikan tombol di tengah */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://www.canva.com/design/DAG3c2uoO10/4WPhkxLiFYZxa0gedg3brQ/edit?utm_content=DAG3c2uoO10&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link" // Menerapkan class CSS baru
            >
              Buka Modul di Canva
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
          {/* Menggunakan tag <p> untuk deskripsi */}
          <p>
            Buka link di bawah untuk menuju ke modul.
          </p>
          
          {/* Wrapper untuk memposisikan tombol di tengah */}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://www.canva.com/design/DAG4ZW8CLkU/UexPZLy-7h5LrZOWHKdnbg/edit?ui=eyJBIjp7fX0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link" // Menerapkan class CSS baru
            >
              Buka Modul di Canva
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
{`Peserta Yang Hadir            :
Peserta Yang Mengikuti Test   :
Peserta Yang Lulus Pretest    :
Peserta Yang Lulus Posttest   :`}
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