import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './componets/Authentication/Login';
import Register from './componets/Authentication/Register';
import NavBar from './componets/Layout/NavBar';
import TodoPage from './componets/TodoPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login or registration
  const handleLoginOrRegister = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <Routes>
        {/* Redirect to Login page if not logged in */}
        {!isLoggedIn && <Route path="/" element={<Navigate to="/login" />} />}
        {/* Login and Register routes */}
        <Route path="/login" element={<Login onLogin={handleLoginOrRegister} />} />
        <Route path="/register" element={<Register onRegister={handleLoginOrRegister} />} />
        {/* TodoPage route */}
        {isLoggedIn && <Route path="/" element={<TodoPage />} />}
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
