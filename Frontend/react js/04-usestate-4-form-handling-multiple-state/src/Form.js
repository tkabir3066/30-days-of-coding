import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted  ");
  };
  return (
    <form>
      {/* name field */}
      <div onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" onChange={handleNameChange} value={name} />
      </div>

      <br />
      {/* email field*/}
      <div>
        <label>Email:</label>
        <input type="email" onChange={handleEmail} value={email} />
      </div>

      <br />
      {/* password field */}

      <div>
        <label>Password:</label>
        <input type="password" onChange={handlePassword} value={password} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
