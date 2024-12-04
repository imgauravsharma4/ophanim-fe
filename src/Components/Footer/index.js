import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { quickLinks, Terms } from "../../utlis/variables";
import LOGO from "../../assests/images/logo.svg";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="container">
        <div className="row footer-section footer-divider">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="footer-touch">
              <h4>Get in touch</h4>
              <div className="icon">
                <ul>
                  <li>
                    <Link to={"#"}>
                      <i>
                        <FaFacebookF />
                      </i>
                      <span>facebook</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i>
                        <FaLinkedinIn />
                      </i>
                      <span>linkedin</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i>
                        <FaTwitter />
                      </i>
                      <span>twitter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      <i>
                        <FaInstagram />
                      </i>
                      <span>instagram</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <p>+1 307 357 3070</p>
                <p>info@ophanimtechnologies.com</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 justify-content-end">
            <div className="contact-form">
              <form action="">
                <div className="input-field">
                  <i>
                    <AiOutlineUser />
                  </i>
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-field">
                  <i>
                    <MdEmail />
                  </i>
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-field">
                  <i>
                    <BiMessageAlt />
                  </i>
                  <input type="text" placeholder="Enter your message" />
                </div>
                <div className="button-wrapper">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row footer-section footer-divider">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="footer-log">
              <div className="logo">
                <img src={LOGO} alt="Logo" className="img-fluid" />
              </div>
              <p>We growing up your business with personal AI manager.</p>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <div className="row">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                    key={`i${index}`}
                  >
                    <div className="quick-links">
                      <ul>
                        {quickLinks
                          .slice(index * 4, index * 4 + 4)
                          .map((item, i) => (
                            <li key={`item${index + i}`}>
                              <Link to={item.link}>{item.name}</Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="row footer-section">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <p className="m-0">
              © 2024 Ophanim Technologies, All Right Reserved.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="terms">
              <ul>
                {Terms.map((item, index) => (
                  <li key={`item${index}`}>
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
