/**
 * File: Upload.jsx
 * Path: /src/pages/Upload.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Upload evidence screen.
 * Last Updated: Connected to EvidenceModule.
 */

// Import necessary libraries and components
import React from "react";
import UploadEvidence from "../components/EvidenceModule/UploadEvidence";

// Upload component renders the evidence upload interface
const Upload = () => {
  return (
    <div className="p-6">
      <UploadEvidence />
    </div>
  );
};

// Export the Upload component as default
export default Upload;
