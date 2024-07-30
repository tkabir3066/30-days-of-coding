import React, { useReducer } from "react";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const countReducer = (state, action) => {
  // // using if else
  // if (action.type === INCREMENT) {
  //   return state + action.payload;
  // } else if (action.type === DECREMENT) {
  //   return state - action.payload;
  // } else if (action.type === RESET) {
  //   return 0;
  // } else {
  //   return state;
  // }
  //==== using switch =====//

  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    case RESET:
      return 0;

    default:
      return state;
  }
};

function App() {
  // const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(countReducer, 0);

  const handleIncrement = () => {
    // setCount((count) => count + 1);
    // dispatch({ type: INCREMENT, payload: 1 });

    dispatch({ type: INCREMENT, payload: 1 });
  };

  const handleDecrement = () => {
    // setCount((count) => count - 1);
    dispatch({ type: DECREMENT, payload: 1 });
  };

  const resetCount = () => {
    // setCount((count) => count - count);
    dispatch({ type: RESET });
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement} disabled={count >= 5 ? true : false}>
        Increment
      </button>
      &nbsp;
      <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>
        Decrement
      </button>
      &nbsp;
      <button onClick={resetCount} disabled={count === 0 ? true : false}>
        Reset
      </button>
    </div>
  );
}

export default App;
