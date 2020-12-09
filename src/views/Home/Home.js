import React, { useState } from "react";
import Apps from "../../components/Apps";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [searchApp, setSearchApp] = useState("");

  const toggleSidebar = () => {
    setOpen(!open);
  };

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
        <Header
          open={open}
          toggleSidebar={toggleSidebar}
          setSearchApp={setSearchApp}
        />
        <Apps activeFilter={activeFilter} searchApp={searchApp} />
      </div>
    </div>
  );
};

export default Home;
