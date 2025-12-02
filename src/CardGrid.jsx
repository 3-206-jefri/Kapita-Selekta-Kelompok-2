import React from 'react';
import Card from './Card'; 
import BarChart from './BarChart'; 

const CardGrid = ({ onCardClick }) => {
  const totalPeserta = 20; 

  const nilaiPreTest_raw = 13.8;  
  const nilaiPostTest_raw = 14.8; 
  
  // Perhitungan Persentase
  const nilaiPreTest_percent = (nilaiPreTest_raw / totalPeserta) * 100;
  const nilaiPostTest_percent = (nilaiPostTest_raw / totalPeserta) * 100;

  const cardData = [
    { 
      id: 1,
      title: 'Modul LITERASI DIGITAL', 
      icon: '/LiterasiDigital1.png',
      modalTitle: 'Modul Literasi Digital',
      description: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            Panduan menjadi pengguna internet yang bijak. Pelajari etika digital, 
            cara mengenali berita hoaks, dan kemampuan berpikir kritis dalam menyaring informasi.
          </p>
          
          <p>Klik tombol di bawah untuk membuka atau mengunduh modul dalam format PDF.</p>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="/LiterasiDigital.pdf"  
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
      icon: '/Keamanan1.png',
      modalTitle: 'Modul Keamanan Siber',
      description: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            Lindungi data dan perangkat Anda dari kejahatan siber. Kenali ancaman 
            seperti Phishing dan Malware, serta pelajari cara mengamankan akun dari penipuan digital.
          </p>

          <p>Klik tombol di bawah untuk membuka atau mengunduh modul dalam format PDF.</p>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="/ModulKeamananSiber.pdf" 
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
      icon: '/PreTest1.png',
      modalTitle: 'Pre-Test Literasi Digital',
      description: (
        <>
          <p>Buka link di bawah untuk menuju ke Pre-Test.</p>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://wayground.com/admin/quiz/69132b6e7215406c1e22cafe?source=quiz_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link"
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
      icon: '/PostTest1.png',
      modalTitle: 'Post-Test Literasi Digital',
      description: (
        <>
          <p>Buka link di bawah untuk menuju ke Post-Test.</p>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a 
              href="https://wayground.com/admin/quiz/691346f68eb811ab3fa7b1ea?source=quiz_share" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-modal-link"
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
      icon: '/Grafik1.png',
      modalTitle: 'Grafik Perkembangan Peserta',
      description: (
        <>
          <p>
            Grafik ini menunjukkan persentase rata-rata nilai peserta 
            sebelum (Pre-Test) dan sesudah (Post-Test).
          </p>
          
          {/* PERBAIKAN: Mengirim nilai PERSEN ke BarChart */}
          <BarChart 
            preTestPercent={nilaiPreTest_percent} 
            postTestPercent={nilaiPostTest_percent} 
          />
        </>
      )
    },
    { 
      id: 6,
      title: 'Data', 
      icon: '/Data1.png',
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