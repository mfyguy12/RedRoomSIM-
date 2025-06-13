import React from "react";

const AdminAuditLog = () => {
  const mockLogs = [
    { action: "Created new scenario", timestamp: "2025-05-20 12:00" },
    { action: "Updated difficulty settings", timestamp: "2025-05-22 15:45" }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">Admin Audit Log</h2>
      <ul className="space-y-2">
        {mockLogs.map((log, index) => (
          <li key={index} className="border p-2 rounded">
            <p>{log.action}</p>
            <p className="text-xs text-gray-500">{log.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAuditLog;
