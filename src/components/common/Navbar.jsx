import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Heart, Baby, User } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav-wrapper">
      <nav className="bottom-nav glass">
        <NavLink to="/" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Home size={22} className="icon" />
          <span className="label">Nyumbani</span>
        </NavLink>
        <NavLink to="/mama" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Heart size={22} className="icon" />
          <span className="label">MAMA</span>
        </NavLink>
        <NavLink to="/mtoto" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <Baby size={22} className="icon" />
          <span className="label">MTOTO</span>
        </NavLink>
        <NavLink to="/profile" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
          <User size={22} className="icon" />
          <span className="label">Wasifu</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
