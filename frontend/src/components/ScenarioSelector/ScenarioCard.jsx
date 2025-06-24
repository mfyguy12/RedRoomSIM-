import React from "react";

const typeColors = {
  "Ransomware": "bg-red-100 text-red-800",
  "Data Breach": "bg-blue-100 text-blue-800",
  "Hacktivism": "bg-yellow-100 text-yellow-800",
  "Insider Threat": "bg-green-100 text-green-800",
  "Phishing": "bg-orange-100 text-orange-800",
};

const ScenarioCard = ({ scenario, onSelect }) => {
  const handleStart = () => {
    if (typeof onSelect === "function") {
      onSelect(scenario.id);
    } else {
      console.warn("onSelect is not a function");
    }
  };

  return (
    <div className={`p-6 rounded-xl shadow ${typeColors[scenario.type] || "bg-gray-100 text-gray-800"}`}>
      <h3 className="text-lg font-bold mb-2">{scenario.name}</h3>
      <p className="mb-3">{scenario.description}</p>
      <p className="text-sm mb-4">
        <span className="font-semibold">Type:</span> {scenario.type} |{" "}
        <span className="font-semibold">Difficulty:</span> {scenario.difficulty}
      </p>
      <button
        onClick={handleStart}
        className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
      >
        Start Simulation
      </button>
    </div>
  );
};

export default ScenarioCard;
