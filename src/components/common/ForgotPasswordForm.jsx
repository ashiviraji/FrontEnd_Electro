import React, { Component } from "react";
import '../../assets/css/ForgotPassword/forgotPasswordForm.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


export default class ForgotPasswordForm extends Component {
  render() {
    return (
      <form className="col">
        <div className="frmForgotPassword">
          <div className="grpForgotPassword">


            <h3>Forgot Password</h3>

            <div className="form-group1">

              <input type="email" name="email" className="form-control my-4" placeholder="Enter email" required />
            </div>



            <div className="">
              <button type="submit" className="submitbtn">Submit</button>
            </div>

            <hr />
            <div className="SocialIcons">
              <FaFacebook />
              <FaInstagram /><FaTwitter /><FaLinkedinIn />

            </div>
          </div>
        </div>
      </form>
    );
  }
}