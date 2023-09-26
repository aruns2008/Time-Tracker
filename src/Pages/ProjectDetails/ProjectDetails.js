import React, { useEffect, useState } from "react";
import { Card, Button, Select } from "../../Components";
import "./project-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ProjectDetails = () => {
  // State for managing the current users list

  const [activeButton, setActiveButton] = useState("");

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


  const projectNames = [
    { name: "Project 1" },
    { name: "Project 2", key: "1" },
    { name: "Project 3", key: "1 " },
    { name: "Project 4", key: "1 " },
    { name: "Project 5", key: "1 " },
    { name: "Project 6", key: "1 " },
    { name: "Project 7", key: "1 " },
    { name: "Project 8", key: "1 " },
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
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
              firstOption={"Select a TT Project"}
              options={projectNames}
              className={"project-details__container-dropdown-list"}
              onChange={(e) => handleInputChange(e)}
            ></Select>
           
          </div>
         
        </div>
        <div className="project-details__container-buttons users-list">
          <span className={`${activeButton === "Asaana" ? "active" : ""}`}>
            <Button
              onClick={() => {
                handleUserList("Asaana");
              }}
              value={"Asana"}
            ></Button>
          </span>
          <span className={`${activeButton === "TimeTacker" ? "active" : ""}`}>
            <Button
              onClick={() => {
                handleUserList("TimeTacker");
              }}
              value={"Time Task"}
            ></Button>
          </span>
        </div>
      </div>
      <div
        className={`project-details__cards ${
          selectedProject !== "" ? "project-active" : ""
        }`}
      >
        <div
          className={`project-details__container-buttons sync-data ${
            activeButton == "TimeTacker" ? "sync-button-active" : ""
          }`}
        >
          <Button value={"Sync"} />
        </div>
        <Card
          projectDetails={
            activeButton == "Asaana" ? asaanaUsers : timeTackerUsers
          }
        />
      </div>
    </div>
  );
};

export default ProjectDetails;
