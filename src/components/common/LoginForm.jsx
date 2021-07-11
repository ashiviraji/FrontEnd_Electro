import React, { Component } from "react";
import Axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom'
import "../../assets/css/Authentication/loginForm.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useState } from 'react';

export default function LoginForm() {

  let history = useHistory();
  const [userpasswordLog, setUserpasswordLog] = useState("");
  const [useremailLog, setUseremailLog] = useState("");
  const [userLogError, setUserLogError] = useState("");

  const userLogedIn = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/sign-in", {

      userPassword: userpasswordLog,
      userEmail: useremailLog,
    }).then((response) => {
      console.log(response.data.data);
      // history.push("/sign-in")
      console.log("this is response", response);
      if (response.data.status) {
        if (response.data.data == "customer") {
          history.push("/dashboard-user");
          console.log("successfully login customer");
        } else {
          if (response.data.data == "admin") {
            history.push("/dashboard-admin");
            console.log("successfully login admin");
          } else {
            history.push("/dashboard-engineer");
            console.log("successfully login ceb engineer");
          }
        }

      } else {
        history.push("/sign-in");
        console.log("signin");
        setUserLogError("Invalid Username or Password");

      }
    }).catch((error) => {
      console.log("this is response", error);

    });


  };
  return (
    <form className="col" onSubmit={(e) => { userLogedIn(e) }} method="POST">
      <div className="frmLogin">
        <div className="grpLogin">
          <h3>Sign In</h3>

          <div className="form-group">

            <div class="alert-danger" role="alert">
              {userLogError}
            </div>
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
            <button type="submit" className="submitbtn" >
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
