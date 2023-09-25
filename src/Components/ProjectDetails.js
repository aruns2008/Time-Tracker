import React, { useEffect, useState } from "react";
import { Card, Button, Select } from "../UI Components";
import "../Styles/project-details.css";
import myImage from "../images/adarsh.jpg";
import { useProjectDataContext } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";

const ProjectDetails = () => {
  // State for managing the current users list

  const [activeButton, setActiveButton] = useState("");

  const { projectData } = useProjectDataContext();
  const { setProjectData } = useProjectDataContext();

  // State for managing the current project name

  const [selectedProject, setSelectedProject] = useState("");

  const [asaanaUsers, setAsaanaUsers] = useState([
    {
      name: "Adarsh",
      email: "adarsh@au-ki.com",
      image: "./account.svg",
    },
    {
      name: "Sarath",
      email: "sarath@au-ki.com",
      image: "./account.svg",
    },
  ]);

  const [timeTackerUsers, setTimeTackerUsers] = useState([
    {
      name: "Vivek",
      email: "vivek@au-ki.com",
      image: "./account.svg",
    },
  ]);

  // const projectDetails = [
  //   {
  //     name: "Adarsh",
  //     email: "adarsh@au-ki.com",
  //     image: "./account.svg",
  //   },
  //   {
  //     name: "Sarath",
  //     email: "sarath@au-ki.com",
  //     image: "./account.svg",
  //   },
  //   {
  //     name: "Vivek",
  //     email: "vivek@au-ki.com",
  //     image: "./account.svg",
  //   },
  // ];

  const projectNames = [
    { name: "Project 1" },
    { name: "Project 2" },
    { name: "Project 3" },
    { name: "Project 4" },
    { name: "Project 5" },
    { name: "Project 6" },
    { name: "Project 7" },
    { name: "Project 8" },
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    setSelectedProject(inputValue);
    setActiveButton(inputValue === "" ? "" : "TimeTacker");
  };
  const handleUserList = (buttonType) => {
    // setActiveButton(buttonType);
    selectedProject !== "" ? setActiveButton(buttonType) : setActiveButton();
    if (buttonType === "Asaana") {
      console.log("asaana");
    } else if (buttonType === "TimeTacker") {
      console.log("time");
    }
  };
  return (
    <div className="project-details__container">
      <div className="project-details__container-data">
        <div className="project-details__container-heading">Project List</div>
        <div className="project-details__container-dropdown-section">
          <div className="project-details__container-dropdown">
            <Select
              options={projectNames}
              className={"project-details__container-dropdown-list"}
              onChange={(e) => handleInputChange(e)}
            ></Select>
          </div>
          <div className="project-details__container-buttons">
            <span className={`${activeButton === "Asaana" ? "active" : ""}`}>
              <Button
                onClick={() => {
                  handleUserList("Asaana");
                }}
                value={"Asaana"}
              ></Button>
            </span>
            <span
              className={`${activeButton === "TimeTacker" ? "active" : ""}`}
            >
              <Button
                onClick={() => {
                  handleUserList("TimeTacker");
                }}
                value={"Time Tracker"}
              ></Button>
            </span>
          </div>
        </div>
      </div>
      <div
        className={`project-details__cards ${
          selectedProject !== "" ? "project-active" : ""
        }`}
      >
        <Card
          projectDetails={
            activeButton == "Asaana" ? asaanaUsers : timeTackerUsers
          }
        />
      </div>
      <div
        className={`project-details__container-buttons sync-data ${
          activeButton == "TimeTacker" ? "sync-button-active" : ""
        }`}
      >
        <Button value={"Sync"} />
      </div>
    </div>
  );
};

export default ProjectDetails;
