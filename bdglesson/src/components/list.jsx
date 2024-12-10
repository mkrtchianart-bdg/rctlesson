import React from "react";
import "./list.css";

function List({ items }) {
  return (
    <ul className="name-list">
      {items.map((item, index) => (
        <li key={index} className="name-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
