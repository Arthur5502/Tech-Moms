import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import LoginForm from './components/Home/LoginForm';
import Signup from './components/Home/Signup';
import './styles/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';
import DashBoardUsuario from './pages/DashBoardUsuario';
import NavbarDashboard from './components/Dashboard/NavbarDashboard';

const Main = () => {
  const location = useLocation();

  return (
    <>
       <Routes>
        <Route path="/dashboardUsuario" element={<NavbarDashboard />} />
        <Route path="*" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboardUsuario" element={<DashBoardUsuario />} />
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