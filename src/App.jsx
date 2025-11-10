import React from 'react';
// Tidak perlu import CSS
import Header from './Header';
import Hero from './Hero';
import CardGrid from './CardGrid';
import Footer from './Footer';

function App() {
  return (
    <> {/* Fragment */}
      <Header />
      
      <Hero />

      <div className="container">
        <main>
          <CardGrid />
        </main>
      </div>
      
      <Footer />
    </>
  );
}

export default App;