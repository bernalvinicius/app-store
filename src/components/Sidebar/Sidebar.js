import React from "react";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <h2>Categories</h2>

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

export default Sidebar;
