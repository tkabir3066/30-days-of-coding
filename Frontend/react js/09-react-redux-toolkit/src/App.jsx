import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  const handleDecrement = () => {
    setCount((count) => count - 1);
  };

  const resetCount = () => {
    setCount((count) => count - count);
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement} disabled={count >= 5 ? true : false}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
        Decrement
      </button>
      <button onClick={resetCount} disabled={count === 0 ? true : false}>
        Reset
      </button>
    </div>
  );
}

export default App;
