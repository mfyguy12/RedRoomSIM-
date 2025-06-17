/**
 * File: Admin.jsx
 * Path: /src/pages/Admin.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Admin panel landing page.
 * Last Updated: Placeholder for full AdminPanel module (ScenarioConfigurator + UserMonitoringTable).
 */

// Import necessary libraries and components
import underconstruction from "../assets/uc.png";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [hasPendingUsers, setHasPendingUsers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkPendingUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const pending = querySnapshot.docs.some(doc => doc.data().role === "pending");
      setHasPendingUsers(pending);
    };
    checkPendingUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {hasPendingUsers && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 flex justify-between items-center rounded">
          <div>There are users pending approval.</div>
          <button
            onClick={() => navigate("/admin/pending-users")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
          >
            Review
          </button>
        </div>
      )}

      {/* Add more admin content here */}
      <p>Welcome to the admin panel. You can manage users, content, and settings here.</p>
    </div>
  );
};

export default Admin;
