import React from 'react';
import './MainSection.css';
import Button from './Button';

function MainSection({ title, button }) {
  return (
    <div className="main-section">
      <div className="section-title">{title}</div>
      <div className="button-container">
        {button.map(buttonText => (
          <Button text={buttonText} />
        ))}
      </div>
    </div>
  );
}

export default MainSection; 