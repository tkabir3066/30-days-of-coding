import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Enter Your Name"
          />

          {errors.name && <p>{errors.name.message}</p>}
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email is not Valid",
              },
            })}
            placeholder="Enter your Email id"
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>

        {/* password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be 6 character" },
            })}
            placeholder="Enter Your Password"
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {/* confirm password */}
        <div>
          <label htmlFor="confirmPass">Confirm Password:</label>
          <input
            type="password"
            name="confirmPass"
            id="confirmPass"
            {...register("confirmPass", {
              required: "Confirm password is required",
              validate: (value) =>
                value === password || "Password do not match",
            })}
            placeholder="Confirm Your Password"
          />
          {errors?.confirmPass && <p>{errors.confirmPass.message}</p>}
        </div>

        {/* age */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "You must be at least 18 years old",
              },
            })}
            placeholder="Enter Age"
          />
          {errors?.age && <p>{errors?.age.message}</p>}
        </div>

        {/* gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          {errors.gender && <p>{errors.gender.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
