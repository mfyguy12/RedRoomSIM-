/*
File:                 SettingsPage.jsx
Path:                 /src/pages/SettingsPage.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          User settings and preferences screen.
Changelog:
  - Initial setup for SettingsPage component.
  - Added dark mode toggle functionality.
*/

import React from "react";
import { useTheme } from "../context/ThemeContext";

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow text-gray-900 dark:text-white">
            <div className="flex items-center justify-between">
            <span className="font-medium">Enable Dark Mode</span>

            <label className="relative inline-flex items-center cursor-pointer">
                <input
                type="checkbox"
                className="sr-only peer"
                checked={theme === "dark"}
                onChange={toggleTheme}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {theme === "dark" ? "On" : "Off"}
                </span>
            </label>
            </div>
        </div>
    </div>

  );
};

export default SettingsPage;