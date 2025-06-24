/*
File:                 Simulation.jsx
Path:                 /src/pages/Simulation.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Page for running a simulation scenario.
Changelog:
 - Initial setup for Simulation page.
 - Integrated SimulationEngine components.
 - Added routing for different simulation scenarios.
 - Improved UI/UX for better user interaction.
 - Dark mode support added
*/

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Simulation = () => {
  const { scenarioId } = useParams();
  const [scenario, setScenario] = useState(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchScenario = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/sim/${scenarioId}`);
        setScenario(response.data);
      } catch (error) {
        console.error("Failed to load scenario", error);
      }
    };
    fetchScenario();
  }, [scenarioId]);

  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return;

    const correct = scenario.steps[currentStepIndex].correct_option;
    setSelectedOption(index);

    if (index === correct) {
      setScore((prev) => prev + 1);
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Incorrect. The correct answer was: "${scenario.steps[currentStepIndex].options[correct]}"`);
    }

    setTimeout(() => {
      setSelectedOption(null);
      setFeedback("");
      if (currentStepIndex + 1 < scenario.steps.length) {
        setCurrentStepIndex((prev) => prev + 1);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };

  if (!scenario) return <div className="p-6">Loading scenario...</div>;

  if (completed) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">{scenario.name}</h2>
        <p className="text-xl mb-2">Simulation Complete!</p>
        <p className="text-lg">Score: {score} / {scenario.steps.length}</p>
      </div>
    );
  }

  const step = scenario.steps[currentStepIndex];

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{step.title}</h2>
      <p className="mb-4 text-gray-700 dark:text-gray-300">{step.description}</p>

      <div className="space-y-3">
        {step.options.map((option, index) => (
          <button
            key={index}
            disabled={selectedOption !== null}
            onClick={() => handleOptionSelect(index)}
            className={`w-full text-left p-3 rounded border transition 
              ${selectedOption === index ? "bg-blue-100 dark:bg-blue-700" : "bg-gray-50 dark:bg-gray-900"} 
              hover:bg-gray-200 dark:hover:bg-gray-700`}
          >
            {option}
          </button>
        ))}
      </div>

      {feedback && <div className="mt-4 text-lg font-medium">{feedback}</div>}
    </div>
  );
};

export default Simulation;
