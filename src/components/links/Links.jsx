import React from "react";
import { items } from "../data";
import slack from "../../assets/images/slack.svg";
import github from "../../assets/images/github.svg";
import LinkList from "./LinkList";
import "./Links.css";
import DefaultLayout from "../../layouts/DefaultLayout";

const Links = () => {
  return (
    <DefaultLayout>
      <div>
        {items?.map((item, index) => (
          <LinkList {...item} index={index} key={index} />
        ))}
        <div className="socials__container">
          <a href="/">
            <img src={slack} alt="slack" />
          </a>
          <a
            href="https://github.com/swissjake"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Links;
