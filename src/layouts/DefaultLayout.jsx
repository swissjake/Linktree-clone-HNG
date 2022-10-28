import React from "react";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default DefaultLayout;
