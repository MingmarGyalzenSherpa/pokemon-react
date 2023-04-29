import React from "react";
import logo from "../assets/images/logo.svg";
import "../assets/style/logo-wrapper.css";
export default function LogoWrapper() {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="pokemon logo"></img>
    </div>
  );
}
