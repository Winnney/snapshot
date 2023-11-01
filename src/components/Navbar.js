// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navlink.css"
import SearchPage from './SearchPage';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/mountain">Mountain</Link></li>
        <li><Link to="/beaches">Beaches</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/food">Food</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;
