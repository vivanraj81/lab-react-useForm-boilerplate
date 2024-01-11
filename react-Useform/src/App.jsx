import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    // Handle submission logic, then set registration success to true
    setRegistrationSuccess(true);
  };

  const closePopup = () => {
    setRegistrationSuccess(false);
  };

  return (
    <div id="container">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("fname", {
              required: "Please enter your First Name",
            })}
            placeholder="Enter your First name"
          />
          <span className="error">{errors.fname && errors.fname.message}</span>

          <input
            type="text"
            {...register("lname", {
              required: "Please enter your Last Name",
            })}
            placeholder="Enter your Last name"
          />
          <span className="error">{errors.lname && errors.lname.message}</span>

          <input
            type="email"
            {...register("email", {
              required: "Please enter your Email",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email. Must contain '@'",
              },
            })}
            placeholder="Enter your Email"
          />
          <span className="error">{errors.email && errors.email.message}</span>

          <input
            type="password"
            {...register("password", {
              required: "Please enter your Password",
              minLength: {
                value: 5,
                message: "Password must be more than 4 characters",
              },
              maxLength: {
                value: 20,
                message: "Password cannot be more than 20 characters",
              },
            })}
            placeholder="Enter your Password"
          />
          <span className="error">
            {errors.password && errors.password.message}
          </span>

          <input type="submit" value="Register" />
        </form>
      </div>
      {registrationSuccess && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>Registration successful!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;