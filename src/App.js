import React from 'react';
import Navbar from './components/NavBar'; // Ajuste o nome do arquivo ou a importação
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
        </React.Fragment>
    );
}

export default App;
