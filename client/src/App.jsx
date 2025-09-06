import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/forgotpassword/forgotpassword';
import ResetPassword from './Components/resetpassword/resetpassword';
import EmailVerification from './Components/email.verify/emailverify';
import ProfileForm from './Components/profile/Profileform';
import Body from "./Components/Dashboard/BodySection/Body";
import Vitals from './Components/Dashboard/pages/vitals';
import Analytics from './Components/Dashboard/pages/Analytics';
import Results from './Components/Dashboard/pages/result';
import ApiKeys from './Components/Dashboard/pages/APIKeys';
import Profile from './Components/Dashboard/pages/Profile';

// Import your Camera component here
import Camera from './Components/Dashboard/pages/Camera';

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';

// Protected Route component using Outlet for nested content
const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Dashboard Routes (uses Outlet pattern) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profileform" element={<ProfileForm />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Body />} /> {/* Main dashboard landing (Body) */}
            <Route path="vitals" element={<Vitals />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="results" element={<Results />} />
            <Route path="api-keys" element={<ApiKeys />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Camera" element={<Camera />} />
            {/* Add new routes here as needed */}
          </Route>
        </Route>

        {/* Catch-all: Redirect everything else to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
