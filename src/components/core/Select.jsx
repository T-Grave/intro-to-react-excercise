import React from "react";
import "./Select.css";

const Select = (props) => {
  const { options } = props;

  return (
    <select className="select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
