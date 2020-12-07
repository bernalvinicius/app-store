import React from "react";
import "./Sidebar.scss";
import close from "../../assets/images/close.svg";
import PropTypes from "prop-types";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="header">
        <h2>Categories</h2>
        <div className="close" onClick={toggleSidebar}>
          <img src={close} alt="close" />
        </div>
      </div>
      <ul className="nav-menu">
        <li className="active">
          <a href="/">Channels</a>
        </li>
        <li>
          <a href="/">Dialer</a>
        </li>
        <li>
          <a href="/">Optimization</a>
        </li>
        <li>
          <a href="/">Reporting</a>
        </li>
        <li>
          <a href="/">Voice Analytics</a>
        </li>
      </ul>
    </>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
