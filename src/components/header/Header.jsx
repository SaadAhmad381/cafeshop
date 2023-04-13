import React, { useState } from "react";
import "./style.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import DiningIcon from "@mui/icons-material/Dining";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>
            <DiningIcon className="diningIcon" />
            &nbsp; Cafetaria
          </h1>
        </div>
        <div className="login">
          <PersonIcon className="personIcon" />
          &nbsp;
          <button type="button">Login</button>&nbsp;&nbsp;
          <div className="cart">
            <button onClick={() => navigate("/Cart")}>
              <ShoppingCartOutlinedIcon />
            </button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className="main1">
        <div className="info">
          <span>
            <PhoneIcon />
            &nbsp;
            <p>+923117659439</p>
          </span>
          <span>
            <MailIcon />
            &nbsp;
            <p>abcd@gmail.com</p>
          </span>
        </div>
        <div className="welcom">
          <h2>
            <b> Welcome To Cafeteria</b>
          </h2>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
