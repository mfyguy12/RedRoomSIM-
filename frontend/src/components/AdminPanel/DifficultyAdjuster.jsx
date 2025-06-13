import React, { useState } from "react";

const DifficultyAdjuster = () => {
  const [difficulty, setDifficulty] = useState(3);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">Difficulty Adjuster</h2>
      <input
        type="range"
        min="1"
        max="5"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="w-full"
      />
      <p className="mt-2">Current Difficulty: {difficulty}</p>
    </div>
  );
};

export default DifficultyAdjuster;
