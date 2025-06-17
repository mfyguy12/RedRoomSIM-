import React, { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";

const AdminPendingUsers = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.role === "pending") {
          users.push({ id: docSnap.id, ...data });
        }
      });
      setPendingUsers(users);
    };
    fetchUsers();
  }, []);

  const assignRole = async (userId, role) => {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, { role });
    setPendingUsers(pendingUsers.filter(user => user.id !== userId));
  };

  const rejectUser = async (userId) => {
    await deleteDoc(doc(db, "users", userId));
    setPendingUsers(pendingUsers.filter(user => user.id !== userId));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pending User Requests</h2>
      {pendingUsers.length === 0 ? (
        <p>No pending users.</p>
      ) : (
        <ul className="space-y-4">
          {pendingUsers.map(user => (
            <li key={user.id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <p><strong>{user.name}</strong> ({user.email})</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => assignRole(user.id, "student")} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Approve as Student</button>
                <button onClick={() => assignRole(user.id, "admin")} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Approve as Admin</button>
                <button onClick={() => rejectUser(user.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Reject</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminPendingUsers;
