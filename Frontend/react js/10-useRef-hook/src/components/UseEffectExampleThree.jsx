import React, { useEffect, useRef } from "react";

function UseEffectExampleThree() {
  const inputElm = useRef(null);

  useEffect(() => {
    inputElm.current.focus();
    console.log("rendered");
  }, []);
  return (
    <div>
      <input ref={inputElm} type="text" />
    </div>
  );
}

export default UseEffectExampleThree;
