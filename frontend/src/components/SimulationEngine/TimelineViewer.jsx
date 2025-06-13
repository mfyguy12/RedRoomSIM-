import React from "react";

const TimelineViewer = ({ timeline }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-bold mb-3">Decision Timeline</h3>
      <ul className="space-y-2">
        {timeline.map((entry, idx) => (
          <li key={idx} className="border p-2 rounded">
            <p><b>Decision:</b> {entry.decision}</p>
            <p><b>Feedback:</b> {entry.feedback}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineViewer;