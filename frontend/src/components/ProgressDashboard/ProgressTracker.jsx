import React, { useState } from "react";

const mockData = [
  {
    id: 1,
    scenario: "Phishing Attack Response",
    date: "2025-06-01",
    score: 85,
    status: "Passed",
  },
  {
    id: 2,
    scenario: "Insider Threat Detection",
    date: "2025-06-02",
    score: 72,
    status: "Passed",
  },
  {
    id: 3,
    scenario: "Ransomware Containment",
    date: "2025-06-03",
    score: 48,
    status: "Failed",
  },
];

const ProgressTracker = () => {
  const [data] = useState(mockData);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Progress Dashboard</h2>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-[#111827] text-white">
          <tr>
            <th className="py-3 px-6 text-left">Scenario</th>
            <th className="py-3 px-6 text-left">Date</th>
            <th className="py-3 px-6 text-left">Score</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.id} className="border-b">
              <td className="py-3 px-6">{entry.scenario}</td>
              <td className="py-3 px-6">{entry.date}</td>
              <td className="py-3 px-6">{entry.score}%</td>
              <td className={`py-3 px-6 font-semibold ${entry.status === "Passed" ? "text-green-600" : "text-red-600"}`}>
                {entry.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTracker;
