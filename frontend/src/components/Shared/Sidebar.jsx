/**
 * File: Sidebar.jsx
 * Path: /src/components/Shared/Sidebar.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Sidebar navigation with role-based menu rendering.
 * Last Updated: Added sidebar component with role-based menu rendering and responsive design.
 */

// Import necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

// Sidebar component renders the navigation sidebar with links and user role-based menu items
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useAuth();

  // Render the sidebar with links and user role-based menu items
  return (
    <div className={`fixed top-0 left-0 h-full bg-[#111827] text-white shadow-lg z-40 transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      
      {/* Hamburger icon aligned left */}
      <div className="flex items-center justify-start mt-4 px-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* App logo and title displayed only when sidebar expanded */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4">
          <img src={logo} alt="logo" className="h-12 w-12" />
          <h1 className="font-bold text-lg mt-2">Red Room Simulation</h1>
        </div>
      )}

      {/* Sidebar navigation links */}
      <div className="mt-10 space-y-4 flex flex-col">
        
        {/* Dashboard link */}
        <Link to="/dashboard" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
          <span className="text-2xl">📊</span>
          {isOpen && <span>Dashboard</span>}
        </Link>

        {/* Scenario Selector */}
        <Link to="/scenarios" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
          <span className="text-2xl">🧩</span>
          {isOpen && <span>Scenarios</span>}
        </Link>

        {/* Upload Evidence */}
        <Link to="/upload" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
          <span className="text-2xl">📤</span>
          {isOpen && <span>Upload Evidence</span>}
        </Link>

        {/* Admin Panel only visible for Admin */}
        {user?.role === "admin" && (
          <Link to="/admin" className="flex items-center space-x-3 py-2 px-4 rounded hover:bg-gray-700">
            <span className="text-2xl">⚙️</span>
            {isOpen && <span>Admin Panel</span>}
          </Link>
        )}
      </div>
    </div>
  );
};

// Export the Sidebar component for use in other parts of the application
export default Sidebar;

