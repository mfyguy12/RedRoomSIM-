/**
 * File: Topbar.jsx
 * Path: /src/components/Shared/Topbar.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Top navigation bar containing menu icons and profile access.
 * Last Updated: Cleaned up UI, left-aligned icons, added tooltip placeholders.
 */

// Import necessary libraries and components
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userAvatar from "../../assets/user.png";
import logo from "../../assets/logo.png";
import logoutImage from "../../assets/logout.png"; 

// Topbar component renders the top navigation bar with menu icons and user profile access
const Topbar = ({ sidebarOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-white text-black h-16 px-4 shadow-md w-full">
      <div className="flex items-center space-x-4">
        
        {/* Only show logo + name when sidebar collapsed */}
        {!sidebarOpen && (
          <>
            <img src={logo} alt="logo" className="h-8 w-8" />
            <h1 className="font-bold text-xl whitespace-nowrap">RedRoomSim</h1>
          </>
        )}
      </div>

      {/* Topbar right menu */}
      <div className="flex items-center space-x-6">
        
        {/* Contact and Help links with icons */}
        <Link to="/contact" className="hover:text-red-600" title="Contact Us">
          <span className="text-2xl">📞</span>
        </Link>

        {/* Help link with icon */}
        <Link to="/help" className="hover:text-red-600" title="Help">
          <span className="text-2xl">❓</span>
        </Link>

        {/* Settings link with icon */}
        <Link to="/settings" className="hover:text-red-600" title="Settings">
          <span className="text-2xl">⚙️</span>
        </Link>

        {/* User profile link */}
        <Link to="/profile" className="hover:text-red-600" title="My Profile">
          <img
            src={userAvatar}
            alt="User"
            className="h-10 w-10 rounded-full border border-gray-300 object-cover"
          />
        </Link>

        {/* Logout button */}
        <Link to="/login" className="hover:text-red-600" title="Logout">
          <img src={logoutImage} alt="Logout" className="h-8 w-8"/>
        </Link>
        {/*<button onClick={handleLogout} className="hover:text-red-600" title="Logout">
          <img src={logout} alt="Logout" className="h-8 w-8"/>
        </button>*/}
      </div>
    </div>
  );
};

// Export the Topbar component for use in other parts of the application.
export default Topbar;
