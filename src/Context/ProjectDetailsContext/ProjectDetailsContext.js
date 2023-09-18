import React, { Children, createContext, useContext, useState } from "react";

const selectedItemContext = createContext();

const projectDataContext = createContext();

const projectFieldData = createContext();

const useProjectFieldData = () => {
  return useContext(projectFieldData);
};
const useSelectedItemContext = () => {
  return useContext(selectedItemContext);
};

const useProjectDataContext = () => {
  return useContext(projectDataContext);
};

const ProjectDetailsContext = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [projectData, setProjectData] = useState([
    { name: "Project 1", value: "001" },
    { name: "Project 2", value: "002" },
    { name: "Project 3", value: "003" },
    { name: "Project 4", value: "004" },
    { name: "Project 5", value: "004" },
  ]);

  const [fieldData, setFieldData] = useState([
    { label: "TT Project Id", value: "" },
    { label: "TT Project Name", value: "" },
    { label: "Asana Project ID", value: "" },
  ]);

  const fieldDataUpdate = { fieldData, setFieldData };
  const selectionUpdate = { selectedItem, setSelectedItem };
  const projectsData = { projectData, setProjectData };
  return (
    <selectedItemContext.Provider value={selectionUpdate}>
      <projectDataContext.Provider value={projectsData}>
        <projectFieldData.Provider value={fieldDataUpdate}>
          {children}
        </projectFieldData.Provider>
      </projectDataContext.Provider>
    </selectedItemContext.Provider>
  );
};

export {
  ProjectDetailsContext,
  useSelectedItemContext,
  useProjectDataContext,
  useProjectFieldData,
};
