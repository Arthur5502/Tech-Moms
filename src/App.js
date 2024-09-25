import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import DashboardUsuario from './components/DashboardUsuario';
import DashboardEmpresa from './components/DashboardEmpresa';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/dashboard-usuario" element={<DashboardUsuario />} />
        <Route path="/dashboard-empresa" element={<DashboardEmpresa />} />
      </Routes>
    </Router>
  );
}

export default App;