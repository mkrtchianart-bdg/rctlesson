import React from "react";
import "./Button.css";

function Button({ handleClick, name }) {
  return (
    <button className="btn" onClick={handleClick}>
      {name}
    </button>
  );
}

export default Button;
