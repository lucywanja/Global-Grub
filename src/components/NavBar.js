import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar.css';  

const NavBar = ({ handleSearch }) => {
  return (
    <nav>
      <ul>
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/recipes">Recipes</Link></li>
        <li className="navbar-item"><Link to="/feedback">Feedback</Link></li>
        <li className="navbar-item"><Link to="/favorites">Favorites</Link></li>
      </ul>
      <input
        type="text"
        placeholder="Search by ingredient..."
        onChange={handleSearch}
      />
    </nav>
  );
};

export default NavBar;




