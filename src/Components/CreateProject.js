import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/add-new-project.css";
import { useProjectFieldData } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";

const CreateProject = () => {
  const { fieldData, setFieldData } = useProjectFieldData();

  const clients = ["Au-Ki", "Platypus", "Deon", "Vodafone"];

  const [clientId, setClientId] = useState();

  // Check all the fileds are entered or not

  const [validState, setValidState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, label, index) => {
    setClientId(index);
    const inputValue = e.target.value;
    if (inputValue === "" && label !== "Billable" && label !== "Active") {
      e.target.classList.add("empty-field"); // Add class if input is empty
    } else {
      e.target.classList.remove("empty-field"); // Remove class if input is not empty
    }

    // setFieldData((prev) =>
    //   prev.map((field) =>
    //     field.label === label ? { ...field, value: inputValue } : field
    //   )
    // );
    setFieldData((prev) =>
      prev.map((field) =>
        field.label === label
          ? {
              ...field,
              value: inputValue,
            }
          : field
      )
    );
  };
  //   useEffect(() => {
  //     console.log(fieldData);
  //   }, [fieldData]);

  const handleSubmit = () => {
    let isValid = true;
    for (let label in fieldData) {
      if (fieldData[label].value === "") {
        setErrorMessage("Please fill all the fields");
        isValid = false;

        break;
      } else {
        setValidState(true);
      }
    }

    if (isValid) {
      //   Only proceed if all fields are filled
      setErrorMessage("");
      setValidState(true);
      const postData = {};
      fieldData.forEach((item) => {
        postData[item.label] = item.value;
      });
      postData["Client-id"] = clientId;
      console.log("post", postData);
    }
    // setFieldData((prev) =>
    //   prev.map((item) => ({
    //     ...item,
    //     value:
    //       item.label === "Active" || item.label === "Billable" ? false : "",
    //   }))
    // );
  };

  const handleCheckboxChange = (e, label) => {
    const inputValue = e.target.checked;

    setFieldData((prev) =>
      prev.map((field) =>
        field.label === label ? { ...field, value: inputValue } : field
      )
    );
  };

  return (
    <div className="add-new-project">
      {fieldData.map((data, index) => (
        <div key={index} className="add-new-project__field">
          <label className="add-new-project__label">{data.label}</label>
          {data.label === "Billable" || data.label === "Active" ? (
            <input
              type="checkbox"
              className="add-new-project__checkbox"
              checked={data.value}
              onChange={(e) => handleCheckboxChange(e, data.label)}
            />
          ) : data.label === "Client" ? (
            <select
              className="add-new-project__select"
              onChange={(e) => handleInputChange(e, data.label, index)}
            >
              <option value=""></option>
              {clients.map((client, index) => (
                <option key={index}>{client}</option>
              ))}
            </select>
          ) : data.label === "Start Date" ? (
            <input
              type="date"
              className="add-new-project__date"
              value={data.value}
              onChange={(e) => handleInputChange(e, data.label)}
            />
          ) : (
            <input
              type="text"
              className="add-new-project__input"
              value={data.value}
              placeholder="Project name*"
              onChange={(e) => handleInputChange(e, data.label)}
            />
          )}
        </div>
      ))}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="project-refresh-button">
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateProject;
