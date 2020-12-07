import React from "react";
import "./Home.scss";
import Apps from "../../components/Apps";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="flex-container">
      <div className="nav-categories">
        <Sidebar />
      </div>
      <div className="apps-list">
        <Header />
        <Apps />
      </div>
    </div>
  );
};

export default Home;
