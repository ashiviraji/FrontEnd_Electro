import React, { Component } from "react";
import Axios from 'axios';

import "../../assets/css/Authentication/loginForm.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from 'react';

export default function LoginForm() {


  const [userpasswordLog, setUserpasswordLog] = useState("");
  const [useremailLog, setUseremailLog] = useState("");

  const userLogedIn = async () => {
    await Axios.post("http://localhost:3001/sign-in", {

      userPassword: userpasswordLog,
      userEmail: useremailLog,
    }).then((response) => {
      console.log(response);
      // history.push("/sign-in")
    }).catch((error) => {
      console.log(error);
    })


  };
  return (
    <form className="col" onSubmit={userLogedIn} method="POST">
      <div className="frmLogin">
        <div className="grpLogin">
          <h3>Sign In</h3>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control my-4"
              placeholder="Enter email"
              required
              onChange={(e) => { setUseremailLog(e.target.value); }}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control my-2"
              placeholder="Enter password"
              required
              onChange={(e) => { setUserpasswordLog(e.target.value); }}
            />
          </div>

          <div className="">
            <button type="submit" className="submitbtn">
              Sign In
            </button>
          </div>
          <div>
            <p className="forgot-password">
              Forgot <a href="forgotpassword">password?</a>
            </p>
          </div>
          <hr />
          <div className="signIcons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </form>
  );

}
