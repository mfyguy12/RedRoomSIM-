/**
 * File: SecureRoute.jsx
 * Path: /src/components/Auth/SecureRoute.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: This file defines the SecureRoute component which protects routes in the RedRoomSim application, ensuring that only authenticated users can access certain pages.
 * Last Updated: Initial version with authentication-only guard.
 */

// Import necessary libraries
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

/**
 * SecureRoute component checks if the user is authenticated.
 * If not, it redirects to the login page.
 * If authenticated, it renders the children components.
 **/
const SecureRoute = ({ children }) => {
  const { user } = useAuth();

  // Check if the user is authenticated. If not, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // If the user is authenticated, render the children components
  return children;
};

export default SecureRoute;