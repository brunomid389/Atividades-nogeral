import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🦷 Clínica Odonto</Link>
      </div>
      
      <ul className="navbar-menu">
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/pacientes">Pacientes</Link>
        </li>
        <li>
          <Link to="/consultas">Consultas</Link>
        </li>
        <li>
          <Link to="/dentistas">Dentistas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
