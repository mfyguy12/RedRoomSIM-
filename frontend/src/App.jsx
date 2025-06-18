[/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ScenarioSelectorPage from "./pages/ScenarioSelectorPage";
import Upload from "./pages/Upload";
import Admin from "./pages/Admin";
import Simulation from "./pages/Simulation";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import HelpPage from "./pages/HelpPage";
import ProfilePage from "./pages/ProfilePage";
import ProgressDashboardPage from "./pages/ProgressDashboardPage";
import LoginForm from "./components/Auth/LoginForm";
import SecureRoute from "./components/Auth/SecureRoute";
import RegisterForm from "./components/Auth/RegisterForm";
import RoleBasedRedirect from "./components/Auth/RoleBasedRedirect";
import RoleProtectedRoute from "./components/Auth/RoleProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<SecureRoute><Layout><Dashboard /></Layout></SecureRoute>} />
        <Route path="/" element={<SecureRoute><Layout><Home /></Layout></SecureRoute>} />
        <Route path="/scenarios" element={<SecureRoute><Layout><ScenarioSelectorPage /></Layout></SecureRoute>} />
        <Route path="/upload" element={<SecureRoute><Layout><Upload /></Layout></SecureRoute>} />
        <Route path="/admin" element={<SecureRoute><Layout><Admin /></Layout></SecureRoute>} />
        <Route path="/simulation/:id" element={<SecureRoute><Layout><Simulation /></Layout></SecureRoute>} />
        <Route path="*" element={<SecureRoute><Layout><NotFound /></Layout></SecureRoute>} />
        <Route path="/contact" element={<SecureRoute><Layout><ContactPage /></Layout></SecureRoute>} />
        <Route path="/help" element={<SecureRoute><Layout><HelpPage /></Layout></SecureRoute>} />
        <Route path="/profile" element={<SecureRoute><Layout><ProfilePage /></Layout></SecureRoute>} />
        <Route path="/progress" element={<SecureRoute><Layout><ProgressDashboardPage /></Layout></SecureRoute>} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/redirect" element={<SecureRoute><RoleBasedRedirect /></SecureRoute>} />
        <Route path="/admin" element={<SecureRoute><RoleProtectedRoute allowedRoles={["Administrator"]}><Layout><AdminPanel /></Layout></RoleProtectedRoute></SecureRoute>}/>
        <Route path="/dashboard" element={<SecureRoute><Layout><ProgressTracker /></Layout></SecureRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;*/]



// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext"; 
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";
import RoleBasedRedirect from "./components/Auth/RoleBasedRedirect";
import SecureRoute from "./components/Auth/SecureRoute";
import RoleProtectedRoute from "./components/Auth/RoleProtectedRoute";
import Layout from "./components/Shared/Layout";
import Admin from "./pages/Admin";
import SettingsPage from "./pages/SettingsPage";
import ContactPage from "./pages/ContactPage";
import Dashboard from "./pages/Dashboard";
import HelpPage from "./pages/HelpPage";
import ProfilePage from "./pages/ProfilePage";
import ProgressDashboardPage from "./pages/ProgressDashboardPage";
import ScenarioSelectorPage from "./pages/ScenarioSelectorPage";
import Simulation from "./pages/Simulation";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import Underconstruction from "./pages/UnderConstruction";
import AdminPendingUsers from "./components/AdminPanel/AdminPendingUsers";



const App = () => {
  return (

    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/admin/pending-users" element={<SecureRoute><RoleProtectedRoute allowedRoles={["admin"]}><Layout><AdminPendingUsers /></Layout></RoleProtectedRoute></SecureRoute>} />
            <Route path="/redirect" element={<SecureRoute><RoleBasedRedirect /></SecureRoute>} />
            <Route path="/admin" element={<SecureRoute><RoleProtectedRoute allowedRoles={["admin"]}><Layout><Admin /></Layout></RoleProtectedRoute></SecureRoute>} />
            <Route path="/underconstruction" element={<SecureRoute><RoleProtectedRoute allowedRoles={["admin"]}><Layout><Underconstruction /></Layout></RoleProtectedRoute></SecureRoute>} />
            <Route path="/dashboard" element={<SecureRoute><Layout><Dashboard /></Layout></SecureRoute>} />
            <Route path="/scenarios" element={<SecureRoute><Layout><ScenarioSelectorPage /></Layout></SecureRoute>} />
            <Route path="/upload" element={<SecureRoute><Layout><Upload /></Layout></SecureRoute>} />
            <Route path="/simulation/:id" element={<SecureRoute><Layout><Simulation /></Layout></SecureRoute>} />
            <Route path="/profile" element={<SecureRoute><Layout><ProfilePage /></Layout></SecureRoute>} />
            <Route path="/contact" element={<SecureRoute><Layout><ContactPage /></Layout></SecureRoute>} />
            <Route path="/help" element={<SecureRoute><Layout><HelpPage /></Layout></SecureRoute>} />
            <Route path="/settings" element={<SecureRoute><Layout><SettingsPage /></Layout></SecureRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

