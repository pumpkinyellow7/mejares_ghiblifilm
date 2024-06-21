

import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/hehe.jpg";
import "./main-app.scss";

const MainApp: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Welcome to Ghibli Film Shops</h1>
        <small>Explore the Magic of Ghibli Films</small>
      </header>
      <Outlet />
      <footer className="app-footer">
        <p>&copy; 2024 Ghibli Film Shops. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainApp;
