import React, { useState } from "react";
import "./Home.scss";
import Apps from "../../components/Apps";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const toggleSidebar = () => {
    setOpen(!open);
  };

  console.log("activeFilter: ", activeFilter);

  let opened = !open ? "closed" : "open";

  return (
    <div className="flex-container">
      <div className={`nav-categories ${opened}`}>
        <Sidebar
          toggleSidebar={toggleSidebar}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />
      </div>
      <div className="apps-list">
        <Header open={open} toggleSidebar={toggleSidebar} />
        <Apps />
      </div>
    </div>
  );
};

export default Home;
