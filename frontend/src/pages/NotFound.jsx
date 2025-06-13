/**
 * File: NotFound.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Description: 404 fallback page.
 * Last Updated: Added fallback for unknown routes.
 */

import React from "react";

/**
 * 404 not found page.
 */
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
    </div>
  );
};

export default NotFound;
