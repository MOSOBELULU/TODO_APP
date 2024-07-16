import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from '../src/componets/Authentication/Register';
import NavBar from "./componets/Layout/NavBar";
import "./App.css";
import TodoPage from "./componets/TodoPage";
import Login from "./componets/Authentication/Login";
import { UseAuth } from "./contexts/authContext/index";

function App() {
  const { currentUser } = UseAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!currentUser);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/todo" 
          element={isLoggedIn ? <TodoPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
