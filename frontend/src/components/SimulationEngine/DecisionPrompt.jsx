import React from "react";

const DecisionPrompt = ({ prompt, options, onDecision }) => {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">{prompt}</h2>
      <div className="space-y-2">
        {options.map((opt, index) => (
          <button
            key={index}
            onClick={() => onDecision(opt)}
            className="w-full text-left p-3 border rounded hover:bg-gray-100"
          >
            {opt.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DecisionPrompt;
