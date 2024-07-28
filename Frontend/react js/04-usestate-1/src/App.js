import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement} disabled={count >= 5 ? true : false}>
        +
      </button>
      <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
        -
      </button>
    </div>
  );
}

export default App;
