import React, { useState } from "react";
import "./survey.css"

export default function Dropdowngoal() {
  const getInitialState = () => {
    const value = "none";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className = "select">
      <select value={value} onChange={handleChange}>
        <option value="Maintain">Maintain</option>
        <option value="Cut">Cut</option>
        <option value="Bulk">Bulk</option>
      </select>
    </div>
  );
}
