import React from "react";
import ListItem from "./listItem";

export default function List({ items, onClick }) {
  return (
    <ul>
      {items.map((item) => (
        <ListItem
          key={item.id}
          text={item.text}
          rate={item.rate}
          onClick={() => onClick(item.id)}
        />
      ))}
    </ul>
  );
}
