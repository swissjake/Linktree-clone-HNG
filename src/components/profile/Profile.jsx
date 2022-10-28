import React from "react";
import profile__img from "../../assets/images/profile__img.png";
import arrow from "../../assets/images/arrow.svg";
import menu from "../../assets/images/menu.svg";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./profile.css";

const Profile = () => {
  return (
    <DefaultLayout>
      <figure className="profile__container">
        <img id="profile__img" src={profile__img} alt="profile__img" />
        <div>
          <p id="twitter">Swissjake001</p>
          <span>/</span>
          <p id="slack">Sofiritari</p>
        </div>

        <div className="profile__arrow">
          <img src={arrow} alt="" />
        </div>

        {/* mobile device menu */}
        <div className="profile__menu">
          <img src={menu} alt="" />
        </div>
      </figure>
    </DefaultLayout>
  );
};

export default Profile;
