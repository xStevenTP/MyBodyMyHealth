import React, { useState } from "react";
import "./survey.css"

export default function Dropdownmuscle() {
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
        <option value="Arms">Arms</option>
        <option value="Back">Back</option>
        <option value="Legs">Legs</option>
        <option value="Legs">Abs</option>
        <option value="Legs">Shoulders</option>
      </select>
    </div>
  );
}
