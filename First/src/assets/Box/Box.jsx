import React from "react";
import { MdLockOutline } from "react-icons/md";
import Chef from "../../assets/grapeschef.png";
import "./Box.css";

const Box = () => {
  return (
    <>
      <div className="boxes">
        <div className="leftbox">
          <h1>Safety first</h1>
          <p className="para">We'll help protect your data and identity</p>
          <MdLockOutline className="lock" />
          <p className="paul" >Paul Campos</p>
          <small>STUDIOLASKA.COM.BR</small>
        </div>
        <div className="rightbox">
          <img src={Chef} alt="" />
        </div>
      </div>
      
    </>
  );
};

export default Box;
