import React from "react";
import "../index.css";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <i
        onClick={() => onDeleteItem(item.id)}
        class="fa-solid fa-xmark"
        style={{ color: "#e5771f" }}
      ></i>

      {/*this formula I
        have to write when I want the function only happen when the event
    happens*/}
    </li>
  );
}
