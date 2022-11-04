import React from "react";
import "./LinkList.css";
import { useNavigate } from "react-router-dom";

const LinkList = ({ name, id, links, title, link2 }) => {
  const navigate = useNavigate();
  return (
    <div className="linkList__container">
      <a
        onClick={() => {
          link2 && navigate(link2);
        }}
        href={links}
        target="_blank"
        title={title}
        id={id}
        rel="noreferrer"
      >
        {name}
      </a>
    </div>
  );
};

export default LinkList;
