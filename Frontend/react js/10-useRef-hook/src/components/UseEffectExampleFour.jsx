import React, { useEffect, useRef } from "react";

function UseEffectExampleFour() {
  const inputElm = useRef(null);

  const handleFocus = () => {
    inputElm.current.style.backgroundColor = "Green";
    inputElm.current.style.color = "blue";
  };

  const handleBlur = () => {
    inputElm.current.style.backgroundColor = "";
    inputElm.current.style.color = "";
  };
  return (
    <div>
      <input
        ref={inputElm}
        type="text"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default UseEffectExampleFour;
