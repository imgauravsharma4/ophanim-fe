import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../assests/images/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useNavigate();

  const handleRegister = () => {
    router("/contact");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`mainNavBarContainer ${
        isScrolled ? "sticky-top" : ""
      } navbar navbar-expand-lg `}
    >
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
          <ul className=' navbar-nav navbar-links'>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li className='nav-item dropdown navbarItem-hover'>
              <Link
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Services
              </Link>
              <ul className='dropdown-menu dropMenu active'>
                <li>
                  <Link to={"/seo-services"}>SEO Services</Link>
                </li>
                <li>
                  <Link to={"/smo-services"}>SMO Services</Link>
                </li>
                <li>
                  <Link to={"/online-reputation-management"}>
                    Online Reputation
                  </Link>
                </li>
                <li>
                  <Link to={"/small-business-seo"}>Small Business SEO</Link>
                </li>
                <li>
                  <Link to={"/ecommerce-seo"}>ECommerce SEO</Link>
                </li>
                <li>
                  <Link to={"/local-seo-services"}>Local SEO Services</Link>
                </li>
                <li>
                  <Link to={"/white-label-seo"}>White Label SEO</Link>
                </li>
                <li>
                  <Link to={"/pay-per-click"}>Pay Per Click</Link>
                </li>
                <li>
                  <Link to={"/content-marketing"}>Content Marketing</Link>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown navbarItem-hover'>
              <Link
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Pricing
              </Link>
              <ul className='dropdown-menu dropMenu active'>
                <li>
                  <Link to={"/seo"}>SEO Pricing</Link>
                </li>
                <li>
                  <Link to={"/smo"}>SMO Pricing</Link>
                </li>
                <li>
                  <Link to={"/ppc"}>PPC Pricing</Link>
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
            <li>
              <button
                className='primary-button register-btn'
                onClick={handleRegister}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
