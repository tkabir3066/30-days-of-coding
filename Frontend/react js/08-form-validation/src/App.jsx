import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is Required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errors.email = "email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password length must be minimum 6 characters";
    }
    if (!confPass) {
      errors.confPass = "Confirm Password is required";
    } else if (password !== confPass) {
      errors.confPass = "Password do not match";
    }

    if (!age) {
      errors.age = "Age is required";
    } else if (isNaN(age) || age < 18) {
      errors.age = "Age must be a number and not less than 18";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    // console.log(errors);

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted successfully");
    }
  };
  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />

          {errors && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email id"
          />

          {errors && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />

          {errors && <p>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor="confirmPass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            value={confPass}
            onChange={(e) => setConfPass(e.target.value)}
            placeholder="Confirm Your Password"
          />
          {errors && <p>{errors.confPass}</p>}
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
          />
          {errors && <p>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          {errors && <p>{errors.gender}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
