import React from "react";

const SimulationSummaryCard = ({ simulation }) => {
  return (
    <div className="bg-white border rounded-xl shadow p-4">
      <h3 className="text-lg font-bold mb-2">{simulation.title}</h3>
      <p className="text-sm text-gray-600 mb-1">Date: {simulation.date}</p>
      <p className="text-sm text-gray-600 mb-1">Score: {simulation.score}</p>
      <p className="text-sm text-gray-600">Takeaway: {simulation.takeaway}</p>
    </div>
  );
};

export default SimulationSummaryCard;
