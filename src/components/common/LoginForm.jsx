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
    // console.log(process.env.REACT_APP_BASE_URL);

    Axios.post(`${process.env.REACT_APP_BASE_URL}/sign-in`, {

      userPassword: userpasswordLog,
      userEmail: useremailLog,
    }).then((response) => {
      // console.log(response.data.token);
      // history.push("/sign-in")
      // console.log("this is response", response);
      if (response.data.status) {
        document.cookie = `name=${response.data.data[0].First_name + " " + response.data.data[0].Last_name}`;
        document.cookie = `token=${response.data.token}`;

        // console.log(document.cookie);

        // console.log(document.cookie
        //   .split(';')
        //   .map(cookie => cookie.split('='))
        //   .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).name
        // );

        if (response.data.data[0].Role === "customer") {
          document.cookie = `userId=${response.data.data[0].Cust_id}`;

          history.push("/dashboard-user");
          // console.log("successfully login customer");

        } else {
          if (response.data.data[0].Role === "admin") {

            document.cookie = `userId=${response.data.data[0].Emp_id}`;
            history.push("/dashboard-admin");
            // console.log("successfully login admin");

          } else {

            document.cookie = `userId=${response.data.data[0].Emp_id}`;
            history.push("/dashboard-engineer");
            // console.log("successfully login ceb engineer");

          }

        }

        window.location.reload();//reload browser

      } else {
        history.push("/sign-in");
        // console.log("signin");
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
              Not Registerd <a href="sign-up">Register</a>
            </p>
          </div>
          <div>
            <p className="forgot-password">
              Forgot <a href="forgot-password">password?</a>
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
