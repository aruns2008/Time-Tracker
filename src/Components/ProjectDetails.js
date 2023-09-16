import React from "react";
import "../Styles/ProjectDetails.css";
import { useProjectDataContext } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";

const ProjectDetails = () => {
  const { projectData } = useProjectDataContext();
  const { setProjectData } = useProjectDataContext();
  
  return (
    <div className="project-details">
      <table className="project-details__table">
        <thead>
          <tr>
            <th>No</th>
            <th>Project Name</th>
            <th>Project Id</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((project, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{project.name}</td>
              <td>{project.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="project-refresh-button">
        <button>Refresh</button>
      </div>
    </div>
  );
};

export default ProjectDetails;
