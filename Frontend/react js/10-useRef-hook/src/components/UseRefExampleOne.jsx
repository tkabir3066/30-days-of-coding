import React, { useEffect, useRef, useState } from "react";

function UseRefExampleOne() {
  const [userInput, setUserInput] = useState("");
  const render = useRef(0);

  useEffect(() => {
    render.current = render.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>Rendering {render.current} times</p>
    </div>
  );
}

export default UseRefExampleOne;
