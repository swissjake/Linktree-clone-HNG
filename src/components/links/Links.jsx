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
          <LinkList {...item} key={index} />
        ))}
        <div className="socials__container">
          <img src={slack} alt="slack" />
          <img src={github} alt="github" />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Links;
