import React from "react";
// import shop from "../../assets/shop.jpg";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import "./style.css";
import Fastfood from "../../pages/fastfood/fastfood";
import Header from "../header/Header";

const Menu = () => {
  return (
    <div className="main">
      <div className="sidebar">
        <img
          src="https://fxplus.ac.uk/wp-content/uploads/2022/03/ESI-CAFE-website-930x620-1.jpg"
          alt="no image"
          width="180px"
          height="180px"
        />{" "}
        <br />
        <br />
        <div className="link">
          <NavLink
            className="shakes"
            to="/FastFood"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "orange" : "",
            })}
          >
            <b>FastFood </b>
          </NavLink>
          <br />
          <NavLink
            className="shakes"
            to="/frits"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "orange" : "",
            })}
          >
            <b>Fruits </b>
          </NavLink>
          <br />

          <NavLink
            className="shakes"
            to="/Products"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "orange" : "",
            })}
          >
            <b>Products </b>
          </NavLink>
        </div>
      </div>
      <div className="component">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Menu;
