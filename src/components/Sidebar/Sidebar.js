import React from "react";
import close from "../../assets/images/close.svg";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Sidebar = ({ toggleSidebar, activeFilter, setActiveFilter }) => {
  const data = useSelector((state) => state.apps.collections);

  const allCategories = data
    .reduce((app, category) => [...app, ...category.categories], [])
    .filter((elem, index, self) => index === self.indexOf(elem));

  const handleChange = (category) => (event) => {
    setActiveFilter(category);
    event.preventDefault();
  };

  return (
    <>
      <div className="header">
        <h2>Categories</h2>
        <div className="close" onClick={toggleSidebar}>
          <img src={close} alt="close" />
        </div>
      </div>
      <ul className="nav-menu">
        {allCategories.sort().map((category) => (
          <li
            key={category}
            className={activeFilter !== category ? "" : "active"}
            onClick={handleChange(category)}
          >
            <a href="/">{category}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default Sidebar;
