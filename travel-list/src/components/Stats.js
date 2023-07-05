import React from "react";
import "../index.css";

export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">start adding your items</p>;
  }
  const numItems = items.length; //derived state
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you packed all things"
          : `${numItems} Items on your list,  you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
