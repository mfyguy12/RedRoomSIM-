/**
 * File: RegisterForm.jsx
 * Author: Umair Asad
 * path: /src/components/Auth/RegisterForm.jsx
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: User registration form component for the RedRoomSim application. It allows users to enter their details and register for an account. The form includes fields for username, password, and email, and a submit button to initiate the registration process.
 * Last Updated: On success, redirects user to login.
 */

// Import necessary libraries and assets
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

// RegisterForm component allows users to register for an account
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // State to manage error messages
  const [error, setError] = useState("");
  // useNavigate hook from react-router-dom for navigation
  const navigate = useNavigate();
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock registration success/failure simulation
    if (formData.username && formData.password && formData.email) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      setError("Please fill all fields correctly.");
    }
  };

  // Render the registration form
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 space-y-4">

        <div className="flex justify-center mb-4">
          <img src={logo} alt="Red Room Simulation" className="h-16 w-16" />
        </div>

        <h2 className="text-2xl font-bold text-center">Red Room Simulation - Register</h2>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />

        <button type="submit" className="w-full bg-[#111827] text-white p-2 rounded hover:bg-gray-700">
          Register
        </button>

        <div className="text-center mt-2">
          Already have an account?{" "}
          <span className="text-red-600 hover:underline cursor-pointer" onClick={() => navigate("/login")}>
            Login here
          </span>
        </div>

      </form>
    </div>
  );
};

export default RegisterForm;
