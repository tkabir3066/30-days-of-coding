import React, { useContext, useReducer } from "react";
import { CounterContext } from "./context/Countercontext";

function App() {
  const context = useContext(CounterContext);
  const { count, handleIncrement, handleDecrement, resetCount } = context;
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
