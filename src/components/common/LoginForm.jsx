import React, { Component } from "react";
import "../../assets/css/Authentication/loginForm.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="col">
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
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control my-2"
                placeholder="Enter password"
                required
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
}
