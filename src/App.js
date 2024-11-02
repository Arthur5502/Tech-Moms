import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import Home from './components/Home';
import './styles/Global.css';
=======
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import NavbarDashboard from './components/Dashboard/NavbarDashboard';
import Home from './pages/Home';
import LoginForm from './components/Home/LoginForm';
import Signup from './components/Home/Signup';
import './styles/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';
import DashBoardUsuario from './pages/DashBoardUsuario';

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
>>>>>>> Stashed changes

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default App;