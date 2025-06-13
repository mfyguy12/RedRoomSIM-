/**
 * File: ProfilePage.jsx
 * Path: /src/pages/ProfilePage.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: User profile information and update screen.
 * Last Updated: Form allows profile editing and image upload.
 */

// Import necessary libraries and components
import React, { useState } from "react";

// ProfilePage component renders the user profile form
const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    role: "",
    profilePicture: null
  });

  // Initial state for the profile form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle file input change for profile picture
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
  };

  // Handle form submission to save profile changes
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile saved:", profile);
    alert("Profile updated successfully!");
  };

  // Render the profile form with input fields for user information
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={profile.firstName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Designation</label>
          <input
            type="text"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">User Role</label>
          <input
            type="text"
            name="role"
            value={profile.role}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Save Profile
        </button>
      </form>
    </div>
  );
};

// Export the ProfilePage component as default
export default ProfilePage;