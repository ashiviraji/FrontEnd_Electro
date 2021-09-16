import React, { Component } from "react";
import '../../assets/css/ForgotPassword/forgotPasswordForm.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link, useHistory } from "react-router-dom";
import Axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

export default function ForgotPasswordForm() {

  let history = useHistory();
  const [useremail, setUseremail] = useState("");


  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_BASE_URL);

    Axios.post(`${process.env.REACT_APP_BASE_URL}/forgot-password`, {
      userEmail: useremail,
    }).then((response) => {

      // console.log("this is response", response);
      if (response.data.status) {
        toast.success('Please Check Your Mails', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push("/forgot-password");

      } else {
        toast.error('Please Enter Valid Email', {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });


        history.push("/forgot-password");

      }
    }).catch((error) => {
      console.log("this is response", error);

    });


  };
  return (
    <form className="col" onSubmit={(e) => { sendEmail(e) }}>
      <div className="frmForgotPassword">
        <div className="grpForgotPassword">


          <h3>Forgot Password</h3>


          <div className="form-group1">

            <input type="email" name="email" className="form-control my-4" placeholder="Enter email" required
              onChange={(e) => { setUseremail(e.target.value); }} />
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