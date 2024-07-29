import React, { useState } from "react";

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const { name, email, password } = formData;
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        <input type="text" name="name" onChange={handleChange} value={name} />
      </div>

      <br />
      {/* email field*/}
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </div>

      <br />
      {/* password field */}

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
