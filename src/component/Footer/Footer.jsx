import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="eduman" />
          <p>
            We will not only assist you by taking classes but also the exact and
            pinpoint guidelines to make your preparation better and closer to
            your destination.
          </p>
        </div>
        {/* <div className='courses'>
          <h1>Courses</h1>
          <div>
          <p>course1</p>
          <p>course2</p>
          </div>
        </div> */}
        <div className="footer-links">
          <h2>Quick Links</h2>
          <div>
            <li className="footer-link">Home</li>
            <li className="footer-link">About</li>
            <li className="footer-link">Course</li>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">copyright@eduman</p>
    </footer>
  );
};

export default Footer;
