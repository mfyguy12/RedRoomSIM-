import React from "react";

const ScoringBar = ({ score }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
      <div
        className="bg-red-600 h-6 rounded-full text-white text-center text-sm"
        style={{ width: `${score}%` }}
      >
        {score}%
      </div>
    </div>
  );
};

export default ScoringBar;