import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import './styles/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
