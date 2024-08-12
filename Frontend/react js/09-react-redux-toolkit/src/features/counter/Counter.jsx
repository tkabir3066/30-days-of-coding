import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  return <div>Counter</div>;
}

export default Counter;
