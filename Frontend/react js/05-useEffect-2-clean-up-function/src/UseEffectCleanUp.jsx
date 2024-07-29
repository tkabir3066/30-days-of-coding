import React, { useEffect, useState } from "react";

function UseEffectCleanUp() {
  const [clicked, setClicked] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("We r in useState");

    // cleanup function
    return () => {
      console.log("return clean up function");
    };
  }, [clicked, count]);
  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button>
      <br />
      <hr />
      <button onClick={() => setClicked("To")}>To</button>
      <br />
      <hr />
      <button onClick={() => setClicked("DropXOut")}>DropXOut</button>

      <br />
      <br />

      <h3>Output:</h3>
      <h1>{clicked}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default UseEffectCleanUp;
