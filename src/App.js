import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import DashboardUsuario from './components/DashboardUsuario';
import DashboardEmpresa from './components/DashboardEmpresa';
import Header from './components/Header';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard-usuario"
          element={isAuthenticated ? <DashboardUsuario /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard-empresa"
          element={isAuthenticated ? <DashboardEmpresa /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;