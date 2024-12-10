import React from 'react';
import './Button.css';

function Button({ text }) {
  return (
    <button className="section-button">
      {text}
    </button>
  );
}

export default Button;