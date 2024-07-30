import { createContext, useReducer } from "react";

// create context
export const CounterContext = createContext();

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const counterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    case RESET:
      return 0;
    default:
      state;
  }
};
// create a provider

export const CountProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    dispatch({ type: INCREMENT, payload: 1 });
  };
  const handleDecrement = () => {
    dispatch({ type: DECREMENT, payload: 1 });
  };
  const resetCount = () => {
    dispatch({ type: RESET, payload: 1 });
  };

  const value = {
    handleIncrement,
    handleDecrement,
    resetCount,
    count,
  };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};
