import React from "react";
import "./LinkList.css";

const LinkList = ({ name, id, links, title }) => {
  return (
    <div className="linkList__container">
      <a href={links} title={title} id={id} rel="noreferrer">
        {name}
      </a>
    </div>
  );
};

export default LinkList;
