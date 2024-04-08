import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          User Management System {/* Display the system name */}
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
              About Us
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
