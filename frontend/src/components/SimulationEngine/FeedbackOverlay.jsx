import React from "react";

const FeedbackOverlay = ({ feedback }) => {
  if (!feedback) return null;

  return (
    <div className={`border p-4 rounded shadow ${feedback.color || "text-gray-800"}`}>
      <h3 className="font-semibold mb-2">Feedback</h3>
      <p>{feedback.message}</p>
      <p className="mt-1 text-sm italic">SDLC Phase: {feedback.sdlc}</p>
    </div>
  );
};

export default FeedbackOverlay;
