import React, { useEffect, useRef, useState } from "react";

function UseRefExampleTwo() {
  //   const [count, setCount] = useState(0);

  const count = useRef(0);
  useEffect(() => {
    console.log("Component have been rendered");
  });
  const handle = () => {
    // setCount((count) => count + 1);
    count.current = count.current + 1;
    console.log(`Count ${count.current} times`);
  };
  return (
    <div>
      <button onClick={handle}>Click me</button>
    </div>
  );
}

export default UseRefExampleTwo;
