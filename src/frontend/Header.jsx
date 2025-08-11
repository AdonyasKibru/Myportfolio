import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <nav className="nav-box">
        <div className="spacer"></div>
        <div className="link-container">
          <Link to='/' className="link">Home</Link>
          <Link to='/about' className="link">About</Link>
          <Link to='/suggestion' className="link">Suggestion</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
