import React from "react";
import "./input.css";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="input__container">
      <label className="inputComponent__label" htmlFor="">
        {label}
      </label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
