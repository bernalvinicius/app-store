import React from "react";
import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ toggleSidebar, open }) => {
  return (
    <header data-testid="Header_Container">
      {!open && (
        <div className="burguer-button" onClick={toggleSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <input type="text" placeholder="Search by App" />
    </header>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Header;
