import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container"> 
        <div className="header-logo">
          {/* Pastikan /logo-desa.png ada di folder public/ */}
          <img src="/src/assets/logo-desa.png" alt="Logo Desa" />
        </div>
        <nav className="header-nav">
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
          <a href="#">Lorem ipsum</a>
        </nav>
        <div className="header-button">
          <a href="#" className="btn-primary">Lorem ipsum</a>
        </div>
      </div>
    </header>
  );
};

export default Header;