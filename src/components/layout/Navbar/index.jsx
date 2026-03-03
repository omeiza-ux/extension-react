import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/img1.svg';
import lightModeSwitch from '../../../assets/images/img0.svg';

function Navbar() {
  ``;
  return (
    <nav className='navbar glass-effect'>
      <div>
        <img src={logo} alt='project logo' />
      </div>
       <div className="navbar-buttons">
        <Link to="/" className="btn">Home</Link>
        <span>|</span>
        <Link to="/about" className="btn">About</Link>
        <span>|</span>
        <Link to="/notFound" className="btn">NotFoundPage </Link>                                                     
      </div>
      <div className='glass-effect__light-mode-switch light-mode-switch'>
        <img src={lightModeSwitch} alt='light mode switch' />
      </div>
    </nav>
  );
}

export default Navbar;