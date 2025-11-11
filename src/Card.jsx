// src/Card.jsx
import React from 'react';

// 1. Terima prop { onClick }
const Card = ({ title, icon, onClick }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        {/* 2. Tambahkan event onClick di sini */}
        <button type="button" className="btn" onClick={onClick}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;