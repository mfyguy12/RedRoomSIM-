import React from "react";

const ScenarioFilterPanel = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">Filter Scenarios</h2>
      <div className="grid grid-cols-2 gap-4">
        <select
          name="difficulty"
          className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={filters.difficulty}
          onChange={handleChange}
        >
          <option value="">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <select
          name="type"
          className="p-2 border rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          value={filters.type}
          onChange={handleChange}
        >
          <option value="">All Types</option>
          <option value="ransomware">Ransomware</option>
          <option value="data breach">Data Breach</option>
          <option value="hacktivism">Hacktivism</option>
        </select>
      </div>
    </div>
  );
};

export default ScenarioFilterPanel;
