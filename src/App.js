import React, { useState } from "react";
import "./App.css";
import "../src/Styles/log-in-page.css";
import {
  ProjectDetails,
  SideBar,  
  CreateProject,
} from "./Components";

import { useSelectedItemContext } from "./Context/ProjectDetailsContext/ProjectDetailsContext";

function App() {
  const { selectedItem } = useSelectedItemContext();
  const { setSelectedItem } = useSelectedItemContext();

  return (
    <div className="App">
      <div>
        <div className="dashBoard-container">
          <div className="dashBoard-container__side-bar">
            <SideBar />
          </div>

          <div className="dashBoard-container__dash-board">
            <div className="dashboard-container__header-container">
              <div className="dashboard-container__header">
                <img src="./logout.svg"></img> Logout
              </div>
            </div>
            <div className="dashBoard-container__dash-board-component">
              {selectedItem === 0 && <CreateProject />}
              {selectedItem === 1 && <ProjectDetails />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
