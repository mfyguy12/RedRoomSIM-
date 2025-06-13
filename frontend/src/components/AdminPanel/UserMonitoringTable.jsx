import React from "react";

const UserMonitoringTable = () => {
  const mockUsers = [
    { name: "John Doe", status: "Active", lastSession: "2025-05-25" },
    { name: "Jane Smith", status: "Active", lastSession: "2025-05-24" }
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">User Monitoring</h2>
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Name</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Last Session</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.status}</td>
              <td className="border px-4 py-2">{user.lastSession}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserMonitoringTable;
