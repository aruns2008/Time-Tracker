import React from "react";
import "./sidebar.css";
import { MenuItem } from "../../Components";

const SideBar = () => {
  const menuList = [
    { name: "Create Project", image: "/add_circle.svg" },
    { name: "Projects", image: "/list.svg" },
    { name: "Registered Webhooks", image: "/webhook.svg" },
    { name: "Analytics", image: "/monitoring.svg" },
    { name: "Users", image: "/group.svg" },
  ];

  return (
    <div className="side-bar">
      <div className="side-bar__logo">
        <div className="side-bar__logo-image">
          <img src="time.svg"></img>
          <p className="side-bar__logo-text">Time Tracker</p>
        </div>
      </div>
      <div className="side-bar__header">
        <img
          className="side-bar__header-icon"
          src="menu_book.svg"
          alt="Dashboard Icon"
        />
        <h2 className="side-bar__header-title">Dashboard</h2>
      </div>
      <MenuItem menuList={menuList} />
    </div>
  );
};

export default SideBar;
