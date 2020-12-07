import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header data-testid="Header_Container">
      <input type="text" placeholder="Search by App" />
    </header>
  );
};

export default Header;
