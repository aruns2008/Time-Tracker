import React, { useState } from "react";
import "./App.css";

import {
  ProjectDetails,
  SideBar,
  CreateTask,
  AddUser,
  UpdateTask,CreateProject
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
            {selectedItem === 0 && <CreateProject />}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
