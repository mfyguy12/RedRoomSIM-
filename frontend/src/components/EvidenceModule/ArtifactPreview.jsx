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