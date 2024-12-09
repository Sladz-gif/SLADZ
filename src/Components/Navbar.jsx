
import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <nav className="position">
      <div className="navbar">
        <h2  className='logo'><a href='hero'>SLADZ</a></h2>
        <ul className="nav-menu">
          <li className='nav-home'><a href='home'>Home</a></li>
          <li className='nav-about'><a href='#about'>About</a></li>
          <li className='nav-food'><a href='#food'>Food</a></li>
          
        </ul>
        <button className="nav-connect"><a href='#connect'>Connect With Me</a></button>
      </div>
     
    </nav>
  );
}

export default Navbar;