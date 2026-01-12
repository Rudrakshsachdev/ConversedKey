import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div>
      {/* Components will be added step-by-step */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
