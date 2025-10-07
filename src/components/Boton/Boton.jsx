import React from 'react';
import './Boton.css';
import { FaWhatsapp } from 'react-icons/fa';

const Boton = ({ texto, onClick, tipo = 'primario' }) => {
  return (
    <button className={`boton ${tipo}`} onClick={onClick}>
      {texto} <FaWhatsapp size={20} style={{ marginRight: '0.5rem' }} />
    </button>
  );
};

export default Boton;