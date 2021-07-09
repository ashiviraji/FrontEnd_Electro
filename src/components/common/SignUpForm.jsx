import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Axios from 'axios';
import '../../assets/css/Authentication/loginForm.css';
import { useState } from 'react';


export default function SignUpForm() {
    const [firstnameReg, setFirstnameReg] = useState("");
    const [lastnameReg, setLastnameReg] = useState("");
    const [userpasswordReg, setUserpasswordReg] = useState("");
    const [useremailReg, setUseremailReg] = useState("");
    const [conpasswordReg, setConpasswordReg] = useState("");
    // let history = useHistory();
    const userRegister = async () => {
        await Axios.post("http://localhost:3001/sign-up", {
            firstName: firstnameReg,
            lastName: lastnameReg,
            userPassword: userpasswordReg,
            userEmail: useremailReg,
        }).then((response) => {
            console.log(response);
            // history.push("/sign-in")
        }).catch((error) => {
            console.log(error);
        })


    };


    return (

        <form className="col" onSubmit={userRegister} method="Post">
            <div className="frmLogin">
                <div className="grpLogin">
                    <h3>Sign Up</h3>

                    <div className="form-group">

                        <input type="text" name="firstName" className="form-control " placeholder="First name" required onChange={(e) => { setFirstnameReg(e.target.value); }} />
                    </div>

                    <div className="form-group">

                        <input type="text" name="lastName" className="form-control " placeholder="Last name" required onChange={(e) => { setLastnameReg(e.target.value); }} />
                    </div>

                    <div className="form-group">


                        <input type="email" name="email" className="form-control " placeholder="Enter email" required onChange={(e) => { setUseremailReg(e.target.value); }} />
                    </div>

                    <div className="form-group">

                        <input type="password" name="password" className="form-control " placeholder="Enter password" required onChange={(e) => { setConpasswordReg(e.target.value); }} />
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" className="form-control " placeholder="Confirm password" required onChange={(e) => { setUserpasswordReg(e.target.value); }} />
                    </div>
                    <button type="submit" className="submitbtn">Sign Up</button>

                    <p className="forgot-password ">
                        Already registered<Link className="nav-link" to="/sign-in">sign in?</Link>
                    </p>
                    <hr />
                    <div className="signIcons">
                        <FaFacebook />
                        <FaInstagram /><FaTwitter /><FaLinkedinIn />

                    </div>

                </div>
            </div>

        </form >

    )
}
