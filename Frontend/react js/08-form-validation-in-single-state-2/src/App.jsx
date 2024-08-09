import React, { useState } from "react";
import "./App.css";
function App() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { name, email, password, confirmPassword, age, gender } = userData;
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length < 3) {
      errors.name = "Name must be minimum 3 in length";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email not valid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password length must be minimum 6 in length";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password do not match";
    }

    if (!age) {
      errors.age = "Age is required";
    } else if (isNaN(age) || age < 18) {
      errors.age = "Age should be a number or Age must not be less than 18";
    }

    if (!gender) {
      errors.gender = "Gender is Required";
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
      setSubmitted(true);
      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
      });
    }
  };

  const userForm = (
    <form onSubmit={handleSubmit}>
      <h1>Form Validation</h1>
      {/* name field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter Your Name"
        />
        {errors && <p style={{ color: "red" }}>{errors?.name}</p>}
      </div>
      {/* email field */}

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter Your Email Id"
        />

        {errors && <p style={{ color: "red" }}>{errors?.email}</p>}
      </div>

      {/* password field */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        {errors && <p style={{ color: "red" }}>{errors?.password}</p>}
      </div>

      {/* Confirm password */}
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        {errors && <p style={{ color: "red" }}>{errors?.confirmPassword}</p>}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          value={age}
          onChange={handleChange}
          placeholder="Enter Your Age"
        />
        {errors && <p style={{ color: "red" }}>{errors?.age}</p>}
      </div>

      {/* gender */}
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          id="gender"
          value={gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors && <p style={{ color: "red" }}>{errors?.gender}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
  return (
    <div className="user-form">
      {submitted && (
        <p style={{ color: "green" }}>Form submitted successfully</p>
      )}
      {!submitted && userForm}
    </div>
  );
}

export default App;
