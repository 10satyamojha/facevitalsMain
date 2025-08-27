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
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken');
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Dashboard Routes - Protected */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes - These will render in the Outlet */}
          <Route index element={<Body />} /> {/* Default dashboard page */}
          <Route path="vitals" element={<Vitals />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="results" element={<Results />} />
          <Route path="api-keys" element={<ApiKeys />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Catch all - redirect to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;