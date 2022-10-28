import React from "react";
import profile__img from "../../assets/images/profile__img.png";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./profile.css";

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="profile__container">
        <img id="profile__img" src={profile__img} alt="profile__img" />
        <p id="twitter">swissjake001</p>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
