import React, { useState } from 'react'; 
import Header from './Header';
import Hero from './Hero';
import CardGrid from './CardGrid';
import Footer from './Footer';
import Modal from './Modal'; 

function App() {
  const [modalContent, setModalContent] = useState(null);
  const openModal = (cardData) => {
    setModalContent(cardData);
  };
  
  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <> 
      <Header />
      
      <Hero />

      <div className="container">
        <main>
          <CardGrid onCardClick={openModal} />
        </main>
      </div>
      
      <Footer />
        {modalContent && (
        <Modal content={modalContent} onClose={closeModal} />
      )}
    </>
  );
}

export default App;