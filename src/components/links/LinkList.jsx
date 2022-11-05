import React from "react";
import { Link } from "react-router-dom";
import "./LinkList.css";

const LinkList = ({ name, id, links, title, link2, index }) => {
  // console.log(index === 6 && id);
  return (
    <>
      {index === 6 ? (
        <Link to={link2}>
          <div className="linkList__container">
            <a
              href={index === 6 && links}
              target="_blank"
              title={index === 6 && title}
              id={index === 6 && id}
              rel="noreferrer"
            >
              {name}
            </a>
          </div>
        </Link>
      ) : (
        <div className="linkList__container">
          <a
            href={links}
            target="_blank"
            title={title}
            id={id}
            rel="noreferrer"
          >
            {name}
          </a>
        </div>
      )}
    </>
  );
};

export default LinkList;
