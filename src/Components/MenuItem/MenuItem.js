import React, { useState } from "react";
import "./menuitem.css";

import { useSelectedItemContext } from "../../Context/ProjectDetailsContext/ProjectDetailsContext";

const MenuItem = ({ menuList }) => {
  const { selectedItem } = useSelectedItemContext();

  const { setSelectedItem } = useSelectedItemContext();

  const selectMenu = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="menu">
      {menuList.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${selectedItem === index ? "active" : ""}`}
          onClick={() => selectMenu(index)}
         >
          <div className="menu-item__active"></div><img src={item.image}></img>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
