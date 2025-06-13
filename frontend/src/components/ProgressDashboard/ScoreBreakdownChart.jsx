import React from "react";

const ScoreBreakdownChart = ({ score }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">Score Breakdown</h2>
      <p className="text-gray-600">Your current score is {score}/100</p>
      <div className="h-4 w-full bg-gray-200 rounded mt-2">
        <div
          className="h-4 bg-green-500 rounded"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScoreBreakdownChart;
