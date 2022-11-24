import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Discovery from './components/Discovery';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className=''>
        <div className='Navbar w-full h-auto py-9 px-5'>
          <Navbar />
          <Header />
        </div>
        <div className='feature-section h-screen w-full py-11'>
          <Features />
        </div>
        <div className='discovery-section h-screen w-full'>
          <Discovery />
        </div>
        <div className='about-section bg-[#020410] w-full'>
          <About />
        </div>
        <div className='footer-section bg-[#9A37E7] w-full'>
          <Footer />
        </div>
      </div>
    </div>
  );

}

export default App;
