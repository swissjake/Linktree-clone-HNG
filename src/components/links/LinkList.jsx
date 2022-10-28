import React from "react";
import "./LinkList.css";

const LinkList = ({ name, id, links }) => {
  return (
    <div className="linkList__container">
      <div>
        <a id={id} href={links}>
          {name}
        </a>
      </div>
    </div>
  );
};

export default LinkList;
