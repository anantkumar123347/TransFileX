import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './Reusable.css';

function Reusuable({ head, text, icon }) {
  const IconComponent = FaIcons[icon];

  return (
    <div className="card-container">
      {IconComponent && (
        <IconComponent size={40} color="lavender" className="icon" />
      )}
      {head && <h2>{head}</h2>}
      {text && <p className="text">{text}</p>}
    </div>
  );
}

export default Reusuable;
