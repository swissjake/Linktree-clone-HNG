import React from "react";
import "./LinkList.css";

const LinkList = ({ name, id, links }) => {
  return (
    <div className="linkList__container">
      <a href={links} target="_blank" id={id} rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default LinkList;
