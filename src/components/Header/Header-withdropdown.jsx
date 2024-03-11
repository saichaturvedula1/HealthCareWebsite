import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../images/logo.png';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState({
    home: false,
    aboutUs: false,
    services: false,
    careers: false,
    contact: false,
  });
  const headerText = "Jcare Home Health Agency";

  const dropdownItems = {
    home: [
      { name: "Home", link: "#" },
      { name: "Hospice Care", link: "#" },
      { name: "Personal Home Care", link: "#" },
      { name: "Specialty Services", link: "#" },
      { name: "Avatar Staffing", link: "#" }
    ],
    aboutUs: [
      { name: "Hospitals", link: "#" },
      { name: "Patient Population", link: "#" },
      { name: "Senior Communities", link: "#" }
    ],
    services: [
      { name: "Home Health", link: "/services" },
      { name: "Hospice Care", link: "#" },
      { name: "Personal Home Care", link: "#" },
      { name: "Specialty Services", link: "#" },
      { name: "Avatar Staffing", link: "#" }
    ],
    careers: [
      { name: "Home Careers", link: "#" },
      { name: "Hospice Care", link: "#" },
      { name: "Personal Home Care", link: "#" },
      { name: "Specialty Services", link: "#" },
      { name: "Avatar Staffing", link: "#" }
    ],
    contact: [
      { name: "Inquire Services", link: "#" },
      { name: "Locations", link: "#" },
      { name: "Support", link: "#" }
    ],
  };

  // Function to handle toggling a specific dropdown
  const toggleDropdown = (dropdown) => {
    // Close all dropdowns first
    const resetDropdowns = Object.keys(isDropdownOpen).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});

    // Then toggle the clicked dropdown, ensuring only it can be open at a time
    setDropdownOpen({
      ...resetDropdowns,
      [dropdown]: !isDropdownOpen[dropdown],
    });
  };

  // Effect to add a global click listener to close dropdowns when clicking outside
  useEffect(() => {
    const closeDropdownsOnClickAway = (event) => {
      // Check if the click is outside of a dropdown
      if (!event.target.matches('.nav-link.dropdown-toggle')) {
        setDropdownOpen({
          home: false,
          aboutUs: false,
          services: false,
          careers: false,
          contact: false,
        });
      }
    };

    // Add when the component mounts
    document.body.addEventListener('click', closeDropdownsOnClickAway);

    // Cleanup to remove the listener when the component unmounts
    return () => document.body.removeEventListener('click', closeDropdownsOnClickAway);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logoImage} alt="Avatar Healthcare Logo" style={{ height: '140px' , width:'136px'}} />
        </Link>
        <div className="headerText">{headerText}</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {Object.keys(isDropdownOpen).map((dropdownKey) => (
              <li key={dropdownKey} className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id={`${dropdownKey}Dropdown`} role="button" data-bs-toggle="dropdown" aria-expanded={isDropdownOpen[dropdownKey]} onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(dropdownKey);
                }}>
                  {dropdownKey.charAt(0).toUpperCase() + dropdownKey.slice(1)}
                </a>
                <ul className={isDropdownOpen[dropdownKey] ? 'dropdown-menu show' : 'dropdown-menu'} aria-labelledby={`${dropdownKey}Dropdown`}>
                  {dropdownItems[dropdownKey].map((item) => (
                    <li key={item.name}><Link className="dropdown-item" to={item.link}>{item.name}</Link></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
