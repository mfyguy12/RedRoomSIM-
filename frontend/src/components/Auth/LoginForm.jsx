/*
File:                 LoginForm.jsx
Path:                 /src/components/Auth/LoginForm.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Component for user login functionality in the Red Room Simulation application.
Changelog:
 - Initial setup for LoginForm component.
 - Integrated Firebase authentication.
 - Added error handling for login failures.
 - Redirects users based on their role after successful login.
 - Displays logout message if user was previously logged out.
 - Added link to registration page for new users.
 - Improved UI with Tailwind CSS for better user experience.
*/


// Import necessary libraries and components
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";


// LoginForm component definition
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const logoutMessage = location.state?.message;
  const handleSubmit = async (e) => {e.preventDefault();setError("");
    try {
      const result = await signInWithEmailAndPassword(auth, username, password);
      const user = result.user;
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const role = userDocSnap.data().role?.toLowerCase().trim();
        setUser({ ...user, role });
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "student") {
          navigate("/dashboard");
        } else {
          navigate("/login", {state: { message: "User role not recognized. Please contact support." }, replace: true });
        }
      } else {
        setError("User role not found. Please contact support.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Red Room Simulation" className="h-16 w-16" />
        </div>
        <h2 className="text-2xl font-bold text-center">Red Room Simulation</h2>
        {logoutMessage && (
          <div className="text-green-600 text-center">{logoutMessage}</div>
        )}
        {error && <div className="text-red-500 text-center">{error}</div>}
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button type="submit" className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Login
        </button>
        <div className="text-center mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 hover:underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;