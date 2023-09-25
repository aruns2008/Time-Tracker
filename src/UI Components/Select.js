import { OpacityOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";

const Select = ({ className, onChange, options, selectedValue }) => {
  return (
    <select className={className} onChange={onChange} >
      <option value="">Select an option</option>

      {options.map((client, index) => (
        <option key={index} value={client.id}>
          {client.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
