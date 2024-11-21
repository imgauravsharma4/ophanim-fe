import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assests/images/logo.svg";

const Navbar = () => {
  return (
    <nav className='navbar navbar-sticky-top  navbar-expand-lg'>
      <div className='container'>
        <Link className='navbar-brand navbar-logo' to={"/"}>
          <img src={LOGO} alt='Logo' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
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
            <li class='nav-item dropdown navbarItem-hover'>
              <Link
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Pricing
              </Link>
              <ul class='dropdown-menu dropMenu active'>
                <li>
                  <Link to={'/seo'}>SEO Pricing</Link>
                </li>
                <li>
                  <Link to={'/smo'}>SMO Pricing</Link>
                </li>
                <li>
                  <Link to={'/ppc'}>PPC Pricing</Link>
                </li>
                <li>
                  <Link to={"/web-development"}>Web Development</Link>
                </li>
              </ul>
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
