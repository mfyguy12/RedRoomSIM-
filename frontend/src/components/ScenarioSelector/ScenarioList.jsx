/*
File:                 ScenarioList.jsx
Path:                 /src/components/ScenarioSelector/ScenarioList.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Component for displaying a list of scenarios in the Red Room Simulation application.
Changelog:
 - Initial setup for ScenarioList component.
 - Integrated ScenarioCard component for individual scenario display.
 - Added support for dark mode styling.
*/

import React from "react";
import ScenarioCard from "./ScenarioCard";

const ScenarioList = ({ scenarios }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {scenarios.map((scenario) => (
        <ScenarioCard key={scenario.id} scenario={scenario} />
      ))}
    </div>
  );
};

export default ScenarioList;