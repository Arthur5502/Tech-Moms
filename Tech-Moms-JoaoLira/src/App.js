import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import './stylesHome/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';
import DashBoardUsuario from './pages/DashBoardUsuario';
import Workflow from './components/Workflow';


const Main = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/dashboard-usuario' && <Navbar />}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard-usuario" element={<DashBoardUsuario />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;