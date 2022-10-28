import React from "react";
import "./LinkList.css";

const LinkList = ({ name, id, links }) => {
  return (
    <div className="linkList__container">
      <a href={links} target="_blank" rel="noreferrer">
        <button id={id}>{name}</button>
      </a>
    </div>
  );
};

export default LinkList;
