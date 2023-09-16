import React from "react";
import "../Styles/add-new-project.css";
import { useProjectFieldData } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";
const AddNewProject = () => {
  const { fieldData } = useProjectFieldData();
  const { setFieldData } = useProjectFieldData();

  return (
    <div className="add-new-project">
      {fieldData.map((data, index) => (
        <div key={index} className="add-new-project__field">
          <label className="add-new-project__label">{data.label}</label>
          <input type="text" className="add-new-project__input" />
        </div>
      ))}
      <div className="project-refresh-button">
        <button>Create</button>
      </div>
    </div>
  );
};

export default AddNewProject;
