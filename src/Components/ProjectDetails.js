import React from "react";
import axios from "axios";
import "../Styles/ProjectDetails.css";
import { useProjectDataContext } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";

const ProjectDetails = () => {
  const { projectData } = useProjectDataContext();
  const { setProjectData } = useProjectDataContext();

  const getTableData =async () => {

   const response = await axios
      .get("https://bb25-116-68-96-99.ngrok-free.app/api/getProjects");

console.log("response",response);

  };

  return (
    <div className="project-details">
      <div className="project-details__table-container">
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
      </div>
      <div className="project-refresh-button">
        <button
          onClick={() => {
            getTableData();
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
