import React from "react";
import "../Styles/sidebar.css";
import { MenuItem } from "../UI Components";

const SideBar = () => {
  const menuList = ["TT Project Id", "Create Task", "Update Task", "Add User",];
  return (
    <div>
      <MenuItem menuList={menuList} />      
    </div>
  );
};
export default SideBar;
