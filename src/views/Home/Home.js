import React, { useState } from "react";
import "./Home.scss";
import Apps from "../../components/Apps";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  let opened = !open ? "closed" : "open";
  console.log(open);
  console.log(opened);

  return (
    <div className="flex-container">
      <div className={`nav-categories ${opened}`}>
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>
      <div className="apps-list">
        <Header open={open} toggleSidebar={toggleSidebar} />
        <Apps />
      </div>
    </div>
  );
};

export default Home;
