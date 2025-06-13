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
import React from "react";
import underconstruction from "../assets/uc.png";

// Admin component renders the admin panel landing page with an under construction image
const Admin = () => {
  return (
   
      
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <img src={underconstruction} alt="underconstruction" className="h-80 w-80" />
      </div>

  );
};


// Export the Admin component as default
export default Admin;