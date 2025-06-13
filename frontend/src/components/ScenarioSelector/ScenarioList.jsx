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