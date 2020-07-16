import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


const Header = ({ name }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {name}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">

              <Link to="/" className="nav-link">
              <i className="fa fa-home"></i>
              
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
              <i className="fa fa-plus"></i>
               
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fa fa-question"></i>
              
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.protoTypes = {
  branding: PropTypes.object.isRequired,
};

export default Header;
