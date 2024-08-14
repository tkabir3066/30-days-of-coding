import React, { useRef } from "react";

function UseRefExampleFive() {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email.current.value, password.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UseRefExampleFive;
