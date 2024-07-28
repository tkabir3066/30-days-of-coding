import React, { useState } from "react";
import datas from "./data.json";
function Data() {
  const [data, setData] = useState(datas);

  const handleRemove = (itemId) => {
    const filteredItem = data.filter((item) => item.id !== itemId);
    setData(filteredItem);
  };

  const handleUpdate = (itemId) => {
    const updatedItem = data.map((item) => {
      if (item.id === itemId) {
        return { name: "new name" };
      } else {
        return item;
      }
    });

    setData(updatedItem);
  };
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setData([])}>clear</button>
    </div>
  );
}

export default Data;
