import React from "react";
import { useNavigate } from "react-router-dom";

const ScenarioCard = ({ scenario }) => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 dark:bg-green-900";
      case "Medium": return "bg-yellow-100 dark:bg-yellow-900";
      case "Hard": return "bg-red-100 dark:bg-red-900";
      default: return "bg-gray-100 dark:bg-gray-800";
    }
  };

  const getTypeButtonColor = (type) => {
    switch (type) {
      case "Ransomware": return "bg-purple-600 hover:bg-purple-700";
      case "Data Breach": return "bg-blue-600 hover:bg-blue-700";
      case "Hacktivism": return "bg-orange-600 hover:bg-orange-700";
      default: return "bg-gray-600 hover:bg-gray-700";
    }
  };

  const handleStart = () => {
    navigate(`/simulation/${scenario.id}`);
  };

  return (
    <div className={`${getDifficultyColor(scenario.difficulty)} shadow rounded-xl p-4 hover:shadow-lg transition text-gray-900 dark:text-white`}>
      <h3 className="text-xl font-bold mb-2">{scenario.title}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{scenario.description}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Type: {scenario.type} | Difficulty: {scenario.difficulty}
      </div>
      <button
        onClick={handleStart}
        className={`text-white py-1 px-3 rounded ${getTypeButtonColor(scenario.type)}`}
      >
        Start Simulation
      </button>
    </div>
  );
};

export default ScenarioCard;
