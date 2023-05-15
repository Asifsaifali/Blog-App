import "./Setting.css";
import Sidebar from "../../components/Sidebar/Sidebar"
import picture from "../../images/computer.jpg"

import React from "react";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingTitleUpdate">Update Your Account</span>
          <span className="settingTitleDelete">Delete Account</span>
        </div>
        <form className="settingForm">
              <label>Profile Picture</label>
              <div className="settingPropic">
                <img src={picture}  alt="" 
                />
              <label htmlFor="fileInput">
                <i className="settingproIcon far fa-user-circle"></i>{" "}
              </label>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                className="settingProInput"
              />
         </div>
         <label>Username</label>
         <input className="UserInput"  type="text" placeholder="AsifSaif"></input>
         <label>Email</label>
         <input  type="email" placeholder="asif@gmail.com"></input>
         <label>Password</label>
         <input  type="email"></input>
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
}
