import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/add-new-project.css";
import { useProjectFieldData } from "../Context/ProjectDetailsContext/ProjectDetailsContext.js";

const CreateTask = () => {
  const { fieldData, setFieldData } = useProjectFieldData();

  const [currentFieldData, setCurrentFieldData] = useState([
    { label: "TT Project Id", value: "" },
    { label: "TT Project Name", value: "" },
    { label: "Asana Project ID", value: "" },
  ]);

  const [validState, setValidState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, label) => {
    const inputValue = e.target.value;
    setCurrentFieldData((prev) =>
      prev.map((field) =>
        field.label === label ? { ...field, value: inputValue } : field
      )
    );
  };

//   const handleSubmit = () => {
//     for (let label in currentFieldData) {
//       if (currentFieldData[label].value === "") {
//         setErrorMessage("Please fill all the fields");
//         setValidState(false);
//       } else {
//         setErrorMessage("");
//         setValidState(true);
//       }
//     }
//     if (validState === true) {
        
//       const apiUrl =
//         "https://bb25-116-68-96-99.ngrok-free.app/api/registerWebhook";

//       const postData = currentFieldData.map(({ label, value }) => ({
//         [label]: value,
//       }));
// console.log("true",postData);
//       axios
//         .post(apiUrl, postData)
//         .then((response) => {
//           console.log("Success:", response.data);
//           alert("Webhook Registered Successfully");
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     }
//   };
  const handleSubmit = () => {
    let isValid = true;

    for (let label in currentFieldData) {
      if (currentFieldData[label].value === "") {
        setErrorMessage("Please fill all the fields");
        setValidState(false);
        isValid = false; // Set isValid to false if any field is empty
        break; // No need to check further if one field is empty
      }
    }

    if (isValid) {
      // Only proceed if all fields are filled
      setErrorMessage("");
      setValidState(true);

      const apiUrl =
        "https://bb25-116-68-96-99.ngrok-free.app/api/registerWebhook";

      const postData = currentFieldData.map(({ label, value }) => ({
        [label]: value,
      }));

      axios
        .post(apiUrl, postData)
        .then((response) => {
          console.log("Success:", response.data);
          alert("Webhook Registered Successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
   return (
    <div className="add-new-project">
      {fieldData.map((data, index) => (
        <div key={index} className="add-new-project__field">
          <label className="add-new-project__label">{data.label}</label>
          <input
            type="text"
            className="add-new-project__input"
            onBlur={(e) => handleInputChange(e, data.label)}
          />
        </div>
      ))}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="project-refresh-button">
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
};

export default CreateTask;
