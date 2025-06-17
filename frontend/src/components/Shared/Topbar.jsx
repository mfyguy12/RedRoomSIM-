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
 * Last Updated: Added top navigation bar with menu icons and profile access, including logout confirmation and toast messages.
 */

// Import necessary libraries and components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userAvatar from "../../assets/user.png";
import logo from "../../assets/logo.png";
import logoutImage from "../../assets/logout.png";

const Topbar = ({ sidebarOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const confirmLogout = () => {
    setShowConfirm(true);
  };

  const handleLogout = async () => {
    setShowConfirm(false);
    await logout();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/login", { state: { message: "You have been logged out." }, replace: true });
    }, 1500);
  };

  return (
    <>
      {/* Custom Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="bg-white rounded shadow p-6 w-80 text-center">
            <p className="mb-4 text-gray-800 font-medium">Are you sure you want to logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Message */}
      {showToast && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-4 rounded shadow-lg border border-gray-300 z-50">
          <p className="mb-2 font-medium">You have been logged out.</p>
          <div className="flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
              OK
            </button>
          </div>
        </div>
      )}

      {/* Topbar */}
      <div className="flex items-center justify-between bg-[#1f2937] text-white h-16 px-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold hidden sm:block">Red Room Simulation</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/help" className="hover:text-red-600" title="Help">
            <span className="text-2xl">❓</span>
          </Link>
          <Link to="/contact" className="hover:text-red-600" title="Contact">
            <span className="text-2xl">📞</span>
          </Link>
          <Link to="/settings" className="hover:text-red-600" title="Settings">
            <span className="text-2xl">⚙️</span>
          </Link>
          <Link to="/profile" className="hover:text-red-600" title="My Profile">
            <img
              src={userAvatar}
              alt="User"
              className="h-10 w-10 rounded-full border border-gray-300 object-cover"
            />
          </Link>
          <button onClick={confirmLogout} title="Logout">
            <img src={logoutImage} alt="Logout" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;