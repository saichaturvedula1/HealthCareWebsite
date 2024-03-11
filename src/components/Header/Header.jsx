import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const headerText = "Jcare Home Health Agency";

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> */}
          <img src={logoImage} alt="Avatar Healthcare Logo" style={{ height: '80px'}} />
        {/* </Link> */}
        <div className="headerText">{headerText}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {/* Simplified Navbar Items */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers">Careers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
