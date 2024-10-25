import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import CommunitySection from './components/CommunitySection';
=======
import Home from './pages/Home';
>>>>>>> main
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import './styles/Global.css';
import Carousel from './components/Carousel';
import CommunitySection from './components/CommunitySection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <CommunitySection />
    </Router>
  );
};

export default App;
