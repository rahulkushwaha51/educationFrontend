import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userAction";
import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = ({ isAuthenticated, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = [
    {
      id: 1,
      link: "Home",
      path: "/",
    },
    {
      id: 2,
      link: "Courses",
      path: "/courses",
    },
    {
      id: 3,
      link: "About Us",
      path: "/about",
    },
    {
      id: 4,
      link: "Contact Us",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActive(!active);
  };
  const logoutHandler = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div
        className={`hamburger  ${active ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          {links.map(({ id, link, path }) => (
            <li key={id} className="link">
              <Link to={path}>{link}</Link>
            </li>
          ))}

          {isAuthenticated ? (
            <>
              <li className="link">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="link btn-primary">
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </li>

              <li className="link">
                <button className="btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
              <li>
                {user && user.role === "admin" && (
                  <Link to="/admin/dashboard">
                    <button className="btn">Dashboard</button>
                  </Link>
                )}
              </li>
            </>
          ) : (
            <>
              <li className="link">
                <Link to="/login">Login</Link>
              </li>
              <li className="link">
                <Link to="/signup"> Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
