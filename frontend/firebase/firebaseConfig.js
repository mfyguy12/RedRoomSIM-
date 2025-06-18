/**
 * File: firebaseConfig.js
 * Path: /src/firebase/firebaseConfig.js
 * Author: Umair Asad
 * Last Modified: 2025-06-15
 * Version: 1.0.0
 * Project: RedRoomSim
 * License: MIT
 * Copyright (c) 2025 RedRoomSim Team
 * Description: Firebase configuration and initialization.
 * Last Update: 2025-06-15
 * changelog:
 * - Initial setup for Firebase configuration.
 * - Integrated Firestore and Authentication.
 * - Added environment variable support for sensitive data.
 */

// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  
export const db = getFirestore(app);
