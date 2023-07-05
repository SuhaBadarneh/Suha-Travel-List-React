import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (items.length > 0) {
      setShowOverlay(true);
    }
  }

  function handleConfirmClear() {
    setItems([]);
    setShowOverlay(false);
  }

  function handleCancelClear() {
    setShowOverlay(false);
  }

  return (
    <div className={`app ${showOverlay ? "overlay-active" : ""}`}>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />

      {showOverlay && (
        <div className="overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h3>Clear List</h3>
              <button className="exit-icon" onClick={handleCancelClear}>
                X
              </button>
            </div>
            <p>Are you sure you want to clear the list?</p>
            <div className="dialog-actions">
              <button onClick={handleConfirmClear}>Clear</button>
              <button onClick={handleCancelClear}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
