import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { AiFillLeftCircle } from "react-icons/ai";

export default function Login() {
  return (
    <div className="login-main-container">
      <div className="elements-container">
        <div className="navbar-login">
          <Link to="/" className="login-navbar-link">
            <AiFillLeftCircle id="backarrow" />
          </Link>
        </div>
        <div className="contents">
          <div className="left-side"></div>
          <div className="right-side">
          <h3 className="title">Please Login to Continue.</h3>
          <form action="" method="get">
              <p className="lebel">Email | Username</p>
              <input type="text" name="username" id="username" className="input-box" />
              <p className="lebel">Password</p>
              <input type="password" name="password" id="password" className="input-box" /><br/>
              <button type="submit" className="login-btn" >Login</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
