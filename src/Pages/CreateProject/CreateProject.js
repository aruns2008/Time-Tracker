import React, { useEffect, useState, useRef } from "react";
import "./add-new-project.css";
import { useProjectFieldData } from "../../Context/ProjectDetailsContext/ProjectDetailsContext.js";
import { Label, Button, InputField, Select } from "../../Components";

const CreateProject = () => {
  const { fieldData, setFieldData } = useProjectFieldData();
  
  const clients = [
    {
      id: "358946",
      name: "77 agency Ltd",
      datecreated: "2020-01-01",
      description: "",
      email: "",
      website: "https://www.77agency.com",
      phone: "",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "15",
      localid: "00015",
    },
    {
      id: "368425",
      name: "Ashburn LLC",
      datecreated: "2022-01-19",
      description: "<p>AEM resource project for Ashburn LLC</p>",
      email: "",
      website: "",
      phone: "",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "18",
      localid: "00018",
    },
    {
      id: "324789",
      name: "AUKI",
      datecreated: "2018-08-11",
      description: "",
      email: "mailto:supi@au-ki.com",
      website: "au-ki.com",
      phone: "9995438403",
      fax: "",
      address: "MM towers, 4th floor\r\nSeaport Airport Road, Kakkanad",
      active: "t",
      localidunpadded: "1",
      localid: "00001",
    },
    {
      id: "355071",
      name: "AUKI Academy",
      datecreated: "2020-10-11",
      description:
        "<p>A subsidiary of the parent company AUKI that purely concerns with training.</p>",
      email: "mailto:supi@au-ki.com",
      website: "http://www.au-ki.com",
      phone: "+919995438403",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "14",
      localid: "00014",
    },
    {
      id: "354656",
      name: "AUKI Internal",
      datecreated: "2020-09-25",
      description: "",
      email: "",
      website: "",
      phone: "",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "13",
      localid: "00013",
    },
    {
      id: "373378",
      name: "Enautics",
      datecreated: "2022-08-19",
      description: "<p>Enautics</p>",
      email: "mailto:dj@enautics.com",
      website: "https://www.enautics.com/",
      phone: "+1-512-686-4600",
      fax: "",
      address: "11801 Domain Blvd. Fl 3, Austin, TX 78758",
      active: "t",
      localidunpadded: "22",
      localid: "00022",
    },
    {
      id: "370856",
      name: "Fiora LTD",
      datecreated: "2022-04-27",
      description: "",
      email: "mailto:accounts@fiora.agency",
      website: "",
      phone: "",
      fax: "",
      address: "52 Great Eastern Street, Shoreditch, London EC2A3EP",
      active: "t",
      localidunpadded: "20",
      localid: "00020",
    },
    {
      id: "327345",
      name: "Freelancers",
      datecreated: "2018-05-01",
      description: "",
      email: "",
      website: "",
      phone: "",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "6",
      localid: "00006",
    },
    {
      id: "364842",
      name: "LEAD",
      datecreated: "2021-08-31",
      description: "",
      email: "",
      website: "",
      phone: "",
      fax: "",
      address:
        "LEAD DIGITAL LIMITED\r\n20 Cranley Mews, London SW7 3BX, UK (CRN 11808526; registered office at 29/30 Fitzroy Square, London, W1T 6LQ, UK",
      active: "t",
      localidunpadded: "16",
      localid: "00016",
    },
    {
      id: "370543",
      name: "Lewis Communications",
      datecreated: "2022-04-01",
      description: "",
      email: "mailto:jami@lewiscommunications.com",
      website: "",
      phone: "",
      fax: "",
      address: "2030 1st\r\nAvenue North Birmingham, AL 35203 United States",
      active: "t",
      localidunpadded: "19",
      localid: "00019",
    },
    {
      id: "367901",
      name: "Liberate Foods Pvt Ltd",
      datecreated: "2021-12-23",
      description: "<p>Shakaharry - plant based meat snacks.</p>",
      email: "mailto:saira.r@liberatefoods.com",
      website: "shakaharry.com",
      phone: "918040709000",
      fax: "",
      address:
        "Liberate Foods Pvt Ltd\r\n\r\nNo 5, Domlur Service Road, Domlur, Bangalore 560071\r\n\r\nPh+918040709000",
      active: "t",
      localidunpadded: "17",
      localid: "00017",
    },
    {
      id: "372337",
      name: "NEON WINGS MARKETING",
      datecreated: "2022-07-04",
      description: "",
      email: "mailto:ishanibehari1@gmail.com",
      website: "",
      phone: "",
      fax: "",
      address:
        "NEON WINGS MARKETING\r\nF-302, CENTRAL PARK-I,\r\nSECTOR 42, DLF GOLF\r\nCOURSE, ROAD, GURURGAM\r\nGurgaon, Haryana 122009 India",
      active: "t",
      localidunpadded: "21",
      localid: "00021",
    },
    {
      id: "348133",
      name: "North Republic",
      datecreated: "2020-02-26",
      description: "",
      email: "mailto:prabhath@au-ki.com",
      website:
        "Auki Digital Innovations Pvt Ltd, 4th floor, MM towers, Near TV tower, Seaport Airport road , Kakkanad",
      phone: "08618740401",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "10",
      localid: "00010",
    },
    {
      id: "350527",
      name: "Platypus Studios",
      datecreated: "2020-05-20",
      description:
        "<p>Adobe experience client from US in the financial domain.</p>",
      email: "mailto:mark@platypusstudios.com",
      website: "",
      phone: "8583426739",
      fax: "",
      address: "",
      active: "t",
      localidunpadded: "11",
      localid: "00011",
    },
  ];

const [selectedClient, setSelectedClient] = useState("");  
// Handle Status

  const [taskCreationStatus, setTaskCreationStatus] = useState(false);

  const [clientId, setClientId] = useState();

  // Check all the fields are entered or not
  const [emptyFields, setEmptyFields] = useState([]);

  // Check all the fileds are entered or not

  const [validState, setValidState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e, label, index) => {
    const inputValue = e.target.value;

    if (label === "Client") {
      setClientId(e.target.value);

      const client_name = e.target.options[e.target.selectedIndex].text;
      setSelectedClient(client_name);
      setFieldData((prev) =>
        prev.map((field) =>
          field.label === label
            ? {
                ...field,
                value: client_name,
              }
            : field
        )
      );
    } else {
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
    }
  };

  const handleSubmit = () => {
    const emptyFields = fieldData
      .map((field, index) => (field.value === "" ? index : null))
      .filter((index) => index !== null);
    console.log(emptyFields);
    if (emptyFields.length > 0) {
      setEmptyFields(emptyFields);
      //   return;
    }
    let isValid = true;
    for (let label in fieldData) {
      if (fieldData[label].value === "") {
        setErrorMessage("Kindly complete all the required fields....!!!");
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
      const postData = [];
      fieldData.forEach((item) => {
        postData[item.label] = item.value;
      });
      postData["clientId"] = clientId;
      setTaskCreationStatus(true);
      console.log(postData);

      setFieldData((prev) =>
        prev.map((item) => ({
          ...item,
          value:
            item.label === "Active" || item.label === "Billable" ? false : "",
        }))
      );
      setEmptyFields([]);
      setSelectedClient("");
      console.log("From Parent",selectedClient)
    }

    // console.log(postData);
  };

  const removeOverlay = () => {
    setTaskCreationStatus(false);
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
    <>
      <div
        onClick={() => {
          removeOverlay();
        }}
        className={`project-creation-status-overlay ${
          taskCreationStatus === true ? "active" : ""
        }`}
      >
        <div className="project-creation-status">
          <p>Project Creation Status</p> <p>Success...!!!</p>
        </div>
      </div>
      <div className="add-new-project">
        {fieldData.map((data, index) => (
          <div key={index} className="add-new-project__field">
            <label className="add-new-project__label">{data.label}</label>
            {data.label === "Billable" || data.label === "Active" ? (
              <InputField
                type="checkbox"
                className="add-new-project__checkbox"
                checked={data.value}
                onChange={(e) => handleCheckboxChange(e, data.label)}
              />
            ) : data.label === "Client" ? (              
              <Select
                className={`add-new-project__select ${
                  emptyFields.includes(index) ? "empty-field" : ""
                }`}
                onChange={(e) => handleInputChange(e, data.label, index)}
                options={clients}
                selectedValue={selectedClient}
              ></Select>
            ) : 
            data.label === "StartDate" ? (
              <InputField
                type="date"
                className={`add-new-project__date ${
                  emptyFields.includes(index) ? "empty-field" : ""
                }`}
                value={data.value}
                onChange={(e) => handleInputChange(e, data.label)}
              />
            ) : (
              <InputField
                type="text"
                className={`add-new-project__input ${
                  emptyFields.includes(index) ? "empty-field" : ""
                }`}
                value={data.value}
                placeholder="Project name*"
                onChange={(e) => handleInputChange(e, data.label)}
              />
            )}
          </div>
        ))}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="add-new-project__create-button">
          <Button
            onClick={() => {
              handleSubmit();
            }}
            value="Create"
          ></Button>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
