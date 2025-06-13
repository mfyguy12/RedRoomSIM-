/**
 * File: ScenarioSelectorPage.jsx
 * Path: /src/pages/ScenarioSelectorPage.jsx
 * Author: Umair Asad
 * Last Modified: 2025-06-07
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Scenario selection screen.
 * Last Updated: Connected to ScenarioSelector module.
 */

// Import necessary libraries and components
import React, { useState } from "react";
import { ScenarioFilterPanel, ScenarioList } from "../components/ScenarioSelector";
import { scenarioList } from "../data/scenarios";

// ScenarioSelectorPage component renders the scenario selection interface with filters and scenario list
const ScenarioSelectorPage = () => {
  // State to manage selected filters for scenarios
  const [filters, setFilters] = useState({ difficulty: "", type: "" });
  // Filter scenarios based on selected filters
  const filteredScenarios = scenarioList.filter((s) => {
    // Check if scenario matches the selected difficulty and type
    const matchDifficulty = filters.difficulty ? s.difficulty.toLowerCase() === filters.difficulty.toLowerCase() : true;
    // Check if scenario matches the selected type
    const matchType = filters.type ? s.type.toLowerCase() === filters.type.toLowerCase() : true;
    // Return true if both conditions match, otherwise false
    return matchDifficulty && matchType;
  });

  // Render the scenario selection page with filter panel and scenario list
  return (
    <div className="p-6 space-y-6">
      <ScenarioFilterPanel filters={filters} setFilters={setFilters} />
      <ScenarioList scenarios={filteredScenarios} />
    </div>
  );
};

// Export the ScenarioSelectorPage component as default
export default ScenarioSelectorPage;