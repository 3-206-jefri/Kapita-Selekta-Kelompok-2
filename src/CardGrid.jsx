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
          Deskripsi lengkap tentang Modul Literasi Digital ada di sini. 
          Anda bisa menjelaskan apa saja yang akan dipelajari oleh masyarakat desa.
          <br /><br /> 
          <a 
            href="https://www.canva.com/design/DAG3c2uoO10/4WPhkxLiFYZxa0gedg3brQ/edit?utm_content=DAG3c2uoO10&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Klik di sini untuk membuka Modul di Canva
          </a>
        </>
      )
    },
    { 
      id: 2,
      title: 'Modul KEAMANAN SIBER', 
      icon: '/Keamanan 1.png',
      modalTitle: 'Modul Keamanan Siber',
      description: 'Penjelasan mendalam mengenai Modul Keamanan Siber. Mencakup cara menghindari penipuan, mengamankan data pribadi, dan lainnya.'
    },
    { 
      id: 3,
      title: 'Pre-Test', 
      icon: '/Pre Test 1.png',
      modalTitle: 'Pre-Test Literasi Digital',
      description: 'Tes ini bertujuan untuk mengukur pemahaman awal Anda tentang literasi digital dan keamanan siber sebelum memulai modul.'
    },
    { 
      id: 4,
      title: 'Post-Test', 
      icon: '/Post Test 1.png',
      modalTitle: 'Post-Test Literasi Digital',
      description: 'Setelah menyelesaikan modul, tes ini akan mengukur seberapa besar peningkatan pemahaman Anda. Semoga berhasil!'
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