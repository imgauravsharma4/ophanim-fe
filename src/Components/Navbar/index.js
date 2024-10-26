import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assests/images/logo.svg";

const Navbar = () => {
  return (
    <nav class='navbar navbar-sticky-top  navbar-expand-lg'>
      <div class='container'>
        <Link class='navbar-brand navbar-logo' to={"/"}>
          <img src={LOGO} alt='Logo' />
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div
          class='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <ul className=' navbar-nav navbar-links me-5'>
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
          <button className='primary-button register-btn'>Register</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
