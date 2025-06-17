/**
 * File: RoleBasedRedirect.jsx
 * Path: /src/components/Auth/RoleBasedRedirect.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: This file defines the RoleBasedRedirect component which redirects users to different routes based on their roles in the RedRoomSim application. It ensures that users are directed to the appropriate page after login or when accessing the application.
 * Last Updated: Redirects users to appropriate route based on role.
 */

// Import necessary libraries
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

// RoleBasedRedirect component checks the user's role and redirects accordingly. If the user is not authenticated, it redirects to the login page
const RoleBasedRedirect = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
// Check if the user is authenticated and redirect based on their role
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
// Redirect based on user role
    switch (user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "student":
        navigate("/dashboard");
        break;
      default:
        navigate("/login", {state: { message: "User role not recognized. Please contact support." },replace: true,});
        break;
    }
  }, [user, navigate]);

  return null; // no UI, only redirect logic
};

export default RoleBasedRedirect;
