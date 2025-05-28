import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar: React.FC<{ onLogout: () => void; onAvatarClick: () => void }> = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-home-link">
          <div className="navbar-logo-title">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <span className="navbar-title">
              <span className="site-main">Vietnamese</span>
              <span className="site-sub">Church</span>
            </span>
          </div>
        </Link>
      </div>
      <div className={`navbar-center${menuOpen ? ' open' : ''}`}>
        <Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="navbar-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/graduates" className="navbar-link" onClick={() => setMenuOpen(false)}>Graduates</Link>
        <Link to="/contact" className="navbar-link" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/skills" className="navbar-link" onClick={() => setMenuOpen(false)}>Skills</Link>
      </div>
      <div className="navbar-right">
        <img
          src="https://i.pravatar.cc/32"
          alt="Avatar"
          className="navbar-avatar"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/user')}
        />
        <button
          className="navbar-logout"
          onClick={() => {
            onLogout();
            navigate('/login');
          }}
        >
          Logout
        </button>
        <div
          className="navbar-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;