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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DecisionPrompt from "../components/SimulationEngine/DecisionPrompt";
import FeedbackOverlay from "../components/SimulationEngine/FeedbackOverlay";
import ScoringBar from "../components/SimulationEngine/ScoringBar";
import TimelineViewer from "../components/SimulationEngine/TimelineViewer";
import { allScenarios } from "../data/scenarios";

const Simulation = () => {
  const { id } = useParams();
  const scenarioId = parseInt(id);
  const scenario = allScenarios[scenarioId];

  if (!scenario) {
    return (
      <div className="p-6 text-gray-900 dark:text-white">
        Scenario not found for ID: {id}
      </div>
    );
  }

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [timeline, setTimeline] = useState([]);

  const getColorByScore = (score) => {
    if (score >= 10) return "text-green-600";
    if (score >= 5) return "text-yellow-600";
    if (score < 5) return "text-red-600";
  };

  const handleDecision = (opt) => {
    const newScore = Math.min(score + opt.score, 100);
    setScore(newScore);
    setFeedback({
      message: opt.feedback,
      sdlc: opt.sdlc,
      color: getColorByScore(opt.score),
    });
    setTimeline([...timeline, { decision: opt.text, feedback: opt.feedback }]);

    if (step + 1 < scenario.simulation.length) {
      setStep(step + 1);
    }
  };

  return (
    <div className="p-6 space-y-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl transition-colors">
      <h2 className="text-lg font-bold">
        {scenario.title} (Scenario ID: {scenarioId})
      </h2>

      <ScoringBar score={score} />
      <FeedbackOverlay feedback={feedback} />

      {step < scenario.simulation.length ? (
        <DecisionPrompt
          prompt={scenario.simulation[step].prompt}
          options={scenario.simulation[step].options}
          onDecision={handleDecision}
        />
      ) : (
        <TimelineViewer timeline={timeline} />
      )}
    </div>
  );
};

export default Simulation;