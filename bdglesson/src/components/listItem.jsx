import React from "react";
import "./list.css";

function ListItem({ item }) {
  return <li className="name-item">{item}</li>;
}

export default ListItem;
