import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import LoginForm from './components/Home/LoginForm';
import Signup from './components/Home/Signup';
import './styles/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';
import DashboardUsuario from './pages/DashboardUsuario';
import DashboardEmpresa from './pages/DashboardEmpresa';
import NavbarUsuario from './components/DashboardUsuario/NavbarUsuario';
import NavbarBusiness from './components/DashboardEmpresa/NavbarBusiness';
import UserProfile from './components/DashboardUsuario/UserProfile';
import ProjectsEmpresa from './pages/ProjectsEmpresa';
import UserFeed from './pages/UserFeed';
import BusinessFeed from './pages/BusinessFeed';

function Main() {
  return (
    <>
       <Routes>
        <Route path="/dashboardUsuario" element={<NavbarUsuario />} />
        <Route path="/userProfile" element={<NavbarUsuario />} />
        <Route path="/dashboardEmpresa" element={<NavbarBusiness />} />
        <Route path="/signup" element={<Navbar />} />
        <Route path="/login" element={<Navbar />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboardUsuario" element={<DashboardUsuario />} />
        <Route path="/dashboardEmpresa" element={<DashboardEmpresa />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/userFeed" element={<UserFeed />} />
        <Route path="/businessFeed" element={<BusinessFeed />} />
        <Route path="/postedProjects" element={<ProjectsEmpresa />} />
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