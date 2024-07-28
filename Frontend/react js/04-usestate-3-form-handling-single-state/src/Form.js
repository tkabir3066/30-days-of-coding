import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <label>Name:</label>
      <input type="text" onChange={handleNameChange} value={name} />

      {/* print the output of name */}

      <p>output: {name}</p>
    </div>
  );
}

export default Form;
