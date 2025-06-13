/**
 * File: AuthContext.jsx
 * path: /src/context/AuthContext.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team 
 * Description: This file defines the AuthContext which provides authentication state and functions to login/logout users in the RedRoomSim application.
 * Last Updated: Initial version with mock authentication and role-based support.
 */

// import necessary libraries
import React, { createContext, useContext, useState } from "react";

// Create global AuthContext to store user authentication info
const AuthContext = createContext();

// AuthProvider component wraps entire app to provide authentication state
export const AuthProvider = ({ children }) => {
  
  /** 
  * function to manage user state
  * This state will hold the current user object if logged in, or null if not.
  **/
  const [user, setUser] = useState(null);
  
  /** 
  * Mock login function to simulate authentication.
  * In a real application, this would have real authenticator validate credentials and retrieve user data including roles/permissions.
  **/
  const login = (username, password) => {
    if (username === "admin" && password === "password") {
      setUser({ username: "admin", role: "Administrator" });
      return true; // Return true for successful login
    } else if (username === "user" && password === "password") {
      setUser({ username: "user", role: "User" });
      return true; // Return true for successful login
    }
    return false; // Return false for failed login
  };

  const logout = () => { // Function to clear user state on logout
    setUser(null); // Clear user state
  };
  
  /**
  * The AuthProvider component wraps the application and provides the authentication context.
  * It allows child components to access user information and authentication functions.
  * The context includes the current user object, a login function, and a logout function.
  **/
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily consume AuthContext inside components
export const useAuth = () => useContext(AuthContext);