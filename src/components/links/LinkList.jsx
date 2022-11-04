import React from "react";
import { Link } from "react-router-dom";
import "./LinkList.css";

const LinkList = ({ name, id, links, title, link2, index }) => {
  console.log(index);
  return (
    <div className="linkList__container">
      {index === 6 ? (
        <Link to={link2}>
          <a
            href={index === 6 && links}
            target="_blank"
            title={index === 6 && title}
            id={index === 6 && id}
            rel="noreferrer"
          >
            {name}
          </a>
        </Link>
      ) : (
        <a href={links} target="_blank" title={title} id={id} rel="noreferrer">
          {name}
        </a>
      )}
    </div>
  );
};

export default LinkList;
