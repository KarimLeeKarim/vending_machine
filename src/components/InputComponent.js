import React from "react";

export const InputComponent = ({
  textLabeL,
  type,
  name,
  value,
  handleChange,
  errors,
}) => {
  return (
    <div className="input-content">
      <label>{textLabeL}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={(event) => handleChange(event, name)}
        min={1}
        max={1000}
        className="input"
      />
      <p className="text-danger">{errors}</p>
    </div>
  );
};
