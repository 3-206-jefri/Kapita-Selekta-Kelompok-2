// src/Modal.jsx
import React from 'react';

// Terima 2 props: 'content' (objek data kartu) dan 'onClose' (fungsi untuk menutup)
const Modal = ({ content, onClose }) => {
  return (
    // 1. Overlay (latar belakang gelap/blur)
    //    Saat diklik, panggil fungsi onClose
    <div className="modal-overlay" onClick={onClose}>
      
      {/* 2. Konten Modal (kotak putih) */}
      {/* Kita cegah penutupan modal saat diklik di dalam kotak putih 
           dengan e.stopPropagation() */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* 3. Isi Modal (dari prop 'content') */}
        <h2>{content.modalTitle}</h2>
        <p>{content.description}</p>
        
        {/* 4. Tombol Close (sesuai gambar Anda) */}
        <button className="modal-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;