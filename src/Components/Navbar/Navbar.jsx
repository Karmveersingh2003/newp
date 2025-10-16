import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // ---- FIX: State to manage the mobile dropdown's open/closed status ----
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle the main hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // If we are closing the main menu, also close the dropdown
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };
  
  // ---- FIX: This function handles the CLICK on "Services" in mobile view ----
  const handleDropdownToggle = (e) => {
    // Check if we are on a mobile screen
    if (window.innerWidth <= 992) {
      e.preventDefault(); // This stops the page from trying to navigate
      setIsDropdownOpen(!isDropdownOpen); // Toggle the state: true to false, or false to true
    }
  };

  return (
    <nav id="secureity-navbar" className={isScrolled ? 'secureity-scrolled' : ''}>
      <div className="secureity-nav-container">
        <a href="#home" className="secureity-logo-container">
          <svg className="secureity-logo-svg" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="secureity-company-name">Innovate Corp</span>
        </a>

        <div className={`secureity-hamburger-menu ${isMenuOpen ? 'secureity-open' : ''}`} onClick={toggleMenu}>
          <div className="secureity-bar1"></div>
          <div className="secureity-bar2"></div>
          <div className="secureity-bar3"></div>
        </div>

        <ul className={`secureity-nav-links ${isMenuOpen ? 'secureity-open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#blog">Blog</a></li>
          
          {/* ---- FIX: We add a dynamic class and the onClick event handler here ---- */}
          <li className={`secureity-dropdown ${isDropdownOpen ? 'secureity-dropdown-open' : ''}`}>
            <a href="#services" onClick={handleDropdownToggle}>
              Services
              <svg className="secureity-dropdown-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </a>
            <div className="secureity-dropdown-content">
              <a href="#security" style={{'--delay': 1}}>Security</a>
              <a href="#maritime" style={{'--delay': 2}}>Maritime</a>
              <a href="#risk" style={{'--delay': 3}}>Risk Analysis</a>
              <a href="#management" style={{'--delay': 4}}>Management</a>
            </div>
          </li>
          <li className="secureity-cta-link"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;