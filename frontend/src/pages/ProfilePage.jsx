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
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase/firebaseConfig";

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
    role: "",
    photoURL: "",
    profilePicture: null
  });
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfile(prev => ({
          ...prev,
          ...data,
          email: user.email,
        }));
      }
      setLoading(false);
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, profilePicture: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    let photoURL = profile.photoURL;

    if (profile.profilePicture) {
      const fileRef = ref(storage, `profilePictures/${user.uid}`);
      await uploadBytes(fileRef, profile.profilePicture);
      photoURL = await getDownloadURL(fileRef);
    }

    const updateData = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      designation: profile.designation,
      photoURL,
    };

    await updateDoc(doc(db, "users", user.uid), updateData);
    setSuccess("Profile updated successfully!");
    setTimeout(() => setSuccess(""), 3000);
  };

  if (loading) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      {success && <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded mb-4">{success}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <div>
          <label className="block font-semibold mb-1">First Name</label>
          <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Last Name</label>
          <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input type="email" name="email" value={profile.email} disabled className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Designation</label>
          <input type="text" name="designation" value={profile.designation} onChange={handleChange} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block font-semibold mb-1">User Role</label>
          <input type="text" name="role" value={profile.role} disabled className="border p-2 rounded w-full bg-gray-100 cursor-not-allowed" />
        </div>

        <div>
          <label className="block font-semibold mb-1">Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded w-full" />
          {profile.photoURL && (
            <div className="mt-2">
              <img src={profile.photoURL} alt="Profile" className="h-24 w-24 rounded-full object-cover border" />
            </div>
          )}
        </div>

        <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Save Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;