import React, { useState, useRef } from 'react';
import useClickAwayListener from './clickAwayListener';
import './Header.css';
import logoImage from '../../images/logo.png'; 
const Header = () => {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showwhoweAreDropdown, setwhoWeAreDropdown] = useState(false);
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [careersDropdown, setcareersDropdown] = useState(false);
  const [contactDropdown, setContactDropdown] = useState(false);
  // Refs for dropdowns
  const servicesDropdownRef = useRef(null);
  const whoweAreDropdownRef = useRef(null);
  const homeDropdownRef = useRef(null);
  const careersDropdownRef = useRef(null);
  const contactDropdownRef = useRef(null);
  // Hook to handle clicking away
  useClickAwayListener(servicesDropdownRef, () => setShowServicesDropdown(false));
  useClickAwayListener(whoweAreDropdownRef, () => setwhoWeAreDropdown(false));
  // Add click-away listeners for other dropdowns if necessary

  return (
    <header className="header">
     <div className="logo-container">
        <img src={logoImage} alt="Avatar Healthcare Logo" className="logo" />
      </div>
      <nav className="nav-container">
      <div className="nav-item" 
          onMouseEnter={() => setHomeDropdown(true)}
          onMouseLeave={() => setHomeDropdown(false)}
          ref={homeDropdownRef}
        >
          <a href="#Home" className="nav-link">Home</a>
          {homeDropdown && (
            <div className="dropdown-content">
             <a href="#">Home </a>
             <a href="#">Hospice Care</a>
             <a href="#">Personal Home Care</a>
             <a href="#">Specialty Services</a>
             <a href="#">Avatar Staffing</a>
            </div>
          )}
        </div>

        <div className="nav-item" 
          onMouseEnter={() => setwhoWeAreDropdown(true)}
          onMouseLeave={() => setwhoWeAreDropdown(false)}
          ref={whoweAreDropdownRef}
        >
          <a href="#whoweare" className="nav-link">About us</a>
          {showwhoweAreDropdown && (
            <div className="dropdown-content">
             <a href="#">Hospitals</a>
             <a href="#">Patient Population</a>
             <a href="#">Senior Communities</a>
            </div>
          )}
        </div>

        <div className="nav-item" 
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
          ref={servicesDropdownRef}
        >
          <a href="#services" className="nav-link">Services</a>
          {showServicesDropdown && (
            <div className="dropdown-content">
             <a href="#">Home Health</a>
             <a href="#">Hospice Care</a>
             <a href="#">Personal Home Care</a>
             <a href="#">Specialty Services</a>
             <a href="#">Avatar Staffing</a>
            </div>
          )}
        </div>

        <div className="nav-item" 
          onMouseEnter={() => setcareersDropdown(true)}
          onMouseLeave={() => setcareersDropdown(false)}
          ref={careersDropdownRef}
        >
          <a href="#services" className="nav-link">Careers</a>
          {careersDropdown && (
            <div className="dropdown-content">
             <a href="#">Home Careers</a>
             <a href="#">Hospice Care</a>
             <a href="#">Personal Home Care</a>
             <a href="#">Specialty Services</a>
             <a href="#">Avatar Staffing</a>
            </div>
          )}
        </div>

        <div className="nav-item" 
          onMouseEnter={() => setContactDropdown(true)}
          onMouseLeave={() => setContactDropdown(false)}
          ref={contactDropdownRef}
        >
          <a href="#services" className="nav-link">Contact</a>
          {contactDropdown && (
            <div className="dropdown-content">
             <a href="#">Home Careers</a>
             <a href="#">Hospice Care</a>
             <a href="#">Personal Home Care</a>
             <a href="#">Specialty Services</a>
             <a href="#">Avatar Staffing</a>
            </div>
          )}
        </div>

        
      </nav>
      
    </header>
  );
};

export default Header;
