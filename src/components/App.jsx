import React from "react";
import { useState } from "react";
import List from "./List";

function App() {
  const [item, setItem] = useState("");
  const [itemsArray, setItemsArray] = useState([]);
  const [nextId, setNextId] = useState(0);

  function handleChange(event) {
    const { name, value } = event.target;
    setItem(value);
  }

  function clic() {
    const newItem = {
      id: nextId,
      text: item,
    };
    setItemsArray((prev) => [...prev, newItem]);
    setNextId((prev) => prev + 1);
    setItem("");
  }

  function clic2() {
    setItemsArray([]);
  }

  function deleteItem(id) {
    setItemsArray((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={clic}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsArray.map((itemObj) => (
            <List
              key={itemObj.id}
              value={itemObj.text}
              clic3={deleteItem}
              id={itemObj.id}
            />
          ))}
        </ul>
      </div>
      <button className="Delete" onClick={clic2}>
        <span>Delete</span>
      </button>
    </div>
  );
}

export default App;
