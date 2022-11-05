import React from "react";
import "./input.css";

const Input = ({ label, type, placeholder, id, handleChange, name }) => {
  return (
    <div className="input__container">
      <label className="inputComponent__label" htmlFor="">
        {label}
      </label>
      <input
        className={""}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

export default Input;
