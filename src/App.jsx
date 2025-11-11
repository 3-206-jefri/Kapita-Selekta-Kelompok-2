// src/App.jsx
import React, { useState } from 'react'; // 1. Import useState
import Header from './Header';
import Hero from './Hero';
import CardGrid from './CardGrid';
import Footer from './Footer';
import Modal from './Modal'; // 2. Import komponen Modal baru

function App() {
  
  // 3. Buat state untuk melacak konten modal
  //    'null' berarti modal tertutup
  //    Objek 'card' berarti modal terbuka dengan konten card tsb
  const [modalContent, setModalContent] = useState(null);

  // 4. Buat fungsi untuk membuka modal
  const openModal = (cardData) => {
    setModalContent(cardData);
  };

  // 5. Buat fungsi untuk menutup modal
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <> {/* Fragment */}
      <Header />
      
      <Hero />

      <div className="container">
        <main>
          {/* 6. Kirim fungsi 'openModal' sebagai prop */}
          <CardGrid onCardClick={openModal} />
        </main>
      </div>
      
      <Footer />

      {/* 7. Render Modal secara kondisional */}
      {/* Jika 'modalContent' BUKAN null, maka tampilkan Modal */}
      {modalContent && (
        <Modal content={modalContent} onClose={closeModal} />
      )}
    </>
  );
}

export default App;