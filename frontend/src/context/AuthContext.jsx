/*
File:                 AuthContext.jsx
Path:                 /src/context/AuthContext.jsx
Author:               Umair Asad
Last Modified By:     Umair Asad
Last Modified Date:   2025-06-15
Version:              1.0.0
Project:              RedRoomSim
License:              MIT
Copyright (c) 2025 RedRoomSim Team
Description:          Context API for managing user authentication state in the Red Room Simulation application.
Changelog:
 - Initial setup for AuthContext.
 - Added support for user role management.
 - Integrated Firebase authentication and Firestore for user data.
 - Implemented login and logout functionality.
 - Improved error handling and loading states.
*/

// import necessary libraries
import React, { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Fetch role from Firestore
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          const role = userDoc.exists() ? userDoc.data().role?.toLowerCase().trim() : null;

          // Store role-enhanced user object
          setUser({ ...firebaseUser, role });
        } catch (error) {
          console.error("Error fetching user role:", error);
          setUser({ ...firebaseUser, role: null });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await firebaseSignOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);