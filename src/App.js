import React, { useState } from "react";
import "./App.css";

import { ProjectDetails, SideBar, CreateTask, AddUser, UpdateTask } from "./Components";

import { useSelectedItemContext } from "./Context/ProjectDetailsContext/ProjectDetailsContext";

function App() {
  const { selectedItem } = useSelectedItemContext();
  const { setSelectedItem } = useSelectedItemContext();

  return (
    <div className="App">
      <div>
        <div className="dashboard-header">
          <h3>Time Tracker</h3>
        </div>
        <div className="dashBoard-container">
          <div className="dashBoard-container__side-bar">
            <SideBar />
          </div>
          <div className="dashBoard-container__dash-board">
            {selectedItem === 0 && <ProjectDetails />}
            {selectedItem === 1 && <CreateTask />}
            {selectedItem === 2 && <UpdateTask />}
            {selectedItem === 3 && <AddUser />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
