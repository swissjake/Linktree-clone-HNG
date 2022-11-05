import React from "react";
import "./input.css";

const Input = ({ label, type, placeholder, id, setInput, input, errors }) => {
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
