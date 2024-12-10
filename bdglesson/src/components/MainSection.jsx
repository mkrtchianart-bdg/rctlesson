import React from "react";
import "./MainSection.css";
import Button from "./Button";

function MainSection({ title, button }) {
  const Buttons = button.map((buttonText) => <Button text={buttonText} />);

  return (
    <div className="main-section">
      <div className="section-title">{title}</div>
      <div className="button-container">{Buttons}</div>
    </div>
  );
}

export default MainSection;
