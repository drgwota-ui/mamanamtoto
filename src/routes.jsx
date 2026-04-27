import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MamaPage from './pages/MamaPage.jsx';
import MtotoPage from './pages/MtotoPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

function AppRoutes() {
  // Authentication logic will be added here
  const isAuthenticated = true; 

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
      <Route path="/mama" element={isAuthenticated ? <MamaPage /> : <Navigate to="/login" />} />
      <Route path="/mtoto" element={isAuthenticated ? <MtotoPage /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
