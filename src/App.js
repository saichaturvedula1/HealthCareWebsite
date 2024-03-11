import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/Home';
import About from './components/About/About';
import Careers from './components/Careers/Careers';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  const [footerHeight, setFooterHeight] = useState(0);

  

  useEffect(() => {
    // Function to calculate the footer height
    const updateFooterHeight = () => {
      const footerElement = document.querySelector('.footer-container');
      if (footerElement) {
        setFooterHeight(footerElement.offsetHeight);
      }
    };

    // Calculate the footer height on initial load
    updateFooterHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateFooterHeight);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

    return (
      <Router>
        <div className="app-container"> {/* Encapsulate Header, Content, and Footer */}
          <Header />
          <div className="content-area"> {/* This is where your route-handled components will be rendered */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  
}

export default App;



