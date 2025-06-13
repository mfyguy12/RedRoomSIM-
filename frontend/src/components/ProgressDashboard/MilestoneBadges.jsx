import React from "react";

const MilestoneBadges = ({ badges }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">Milestones</h2>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full"
          >
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneBadges;
