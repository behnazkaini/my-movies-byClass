import React from "react";

export default function ListItem({ text, rate, onClick }) {
  return <li onClick={onClick}>{`${text} , ${rate}`}</li>;
}
