import React from "react";
import "./list.css";
import ListItem from "./listItem";

function List({ items }) {
  return (
    <ul className="name-list">
      {items.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
}

export default List;
