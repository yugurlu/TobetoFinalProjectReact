import { useState } from "react";
import "./ProfileSidebarElement.css";

function ProfileSidebarElement({ svg, header }) {
  return (
    <div className="profile-side-bar-element">
      <a className="btn mb-2 text-start">
        <img src={svg}></img>
        <span className="sidemenu-text"> {header}</span>
      </a>
    </div>
  );
}

export default ProfileSidebarElement;
