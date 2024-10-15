import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo */}
        <div className='navbar-logo'>
          <img src='/../images/logo.svg' alt='Logo' />
        </div>

        {/* Links */}
        <ul className='navbar-links'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/service"}>Services</Link>
          </li>
          <li>
            <Link to={"/pricing"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/news"}>News</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Register Button */}
        <button className='register-btn'>Register</button>
      </div>
    </nav>
  );
};
export default Navbar;
