/*
File:                 layout.jsx
Path:                 /src/components/Shared/Layout.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Layout component wrapping the main application structure.
Changelog:
 - Initial setup for Layout component.
 - Integrated responsive design for better user experience.
 - Added support for dark mode styling.
 - Implemented dynamic sidebar toggle.
 - Improved accessibility features.
*/

// Import necessary libraries and components
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/**
* Layout component wraps the main content with Sidebar and Topbar.  It manages the sidebar state and applies appropriate styles for responsiveness.
**/
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar state to control visibility

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Sidebar rendered with toggle */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main content area */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Topbar sidebarOpen={sidebarOpen} />
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

// Export the Layout component for use in other parts of the application.
export default Layout;
