import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/About/About';


function App() {
  return (
    <div>
      {/* Components will be added step-by-step */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
