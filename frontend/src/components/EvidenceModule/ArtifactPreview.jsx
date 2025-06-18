/*
File:                 ArtifactPreview.jsx
Path:                 /src/components/EvidenceModule/ArtifactPreview.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Artifact preview component for displaying submitted files in the evidence module.
Changelog:
 - Initial setup for ArtifactPreview component.
*/

import React from "react";

const ArtifactPreview = ({ files }) => {
  if (!files.length) return null;

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-2">Submitted Artifacts</h3>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="border p-2 rounded">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtifactPreview;