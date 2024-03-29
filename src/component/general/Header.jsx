import React from "react";
import { Link } from "react-router-dom";

const Header = ({ link,to, title }) => {
  return (
    <div className="header">
      <h1> {title}</h1>
      <span>
        <Link to={`/${to}`}>{link}</Link>
      </span>
      <span className="arrow">{title}</span>
    </div>
  );
};

export default Header;
