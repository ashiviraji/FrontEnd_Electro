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
    const [emailWarningReg, setemailWarningReg] = useState("");
    const [PassWarningReg, setPassWarningReg] = useState("");
    const [btnEnable, setbtnEnable] = useState("true");

    let history = useHistory();

    const userRegister = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_BASE_URL}/sign-up`, {
            firstName: firstnameReg,
            lastName: lastnameReg,
            userPassword: conpasswordReg,
            userEmail: useremailReg,
        }).then((response) => {
            console.log(response);
            if (response.data.status) {
                history.push("/sign-in");
                console.log("registered");
            } else {
                history.push("/sign-up");
                console.log("unregistered");
                setemailWarningReg("Email  Already Used")
            }
        }).catch((error) => {
            console.log("this is response" + error);

        });


    };

    const checkPassword = (e) => {
        e.preventDefault();
        const conPass = e.target.value;
        // setbtnEnable(false)
        if (userpasswordReg != conPass) {
            setPassWarningReg("Invalid Confirm Password");
            setbtnEnable(true)
        } else {
            setPassWarningReg("")
            setConpasswordReg(conPass);
            setbtnEnable(false)
        }
    }


    return (

        <form className="col" onSubmit={(e) => { userRegister(e) }} method="POST">
            <div className="frmLogin">
                <div className="grpLogin">
                    <h3>Sign Up</h3>
                    <div class="alert-danger" role="alert">
                        {emailWarningReg}
                    </div>
                    <div className="form-group">

                        <input type="text" name="firstName" className="form-control " placeholder="First name" required onChange={(e) => { setFirstnameReg(e.target.value); }} />
                    </div>

                    <div className="form-group">

                        <input type="text" name="lastName" className="form-control " placeholder="Last name" required onChange={(e) => { setLastnameReg(e.target.value); }} />
                    </div>

                    <div className="form-group">


                        <input type="email" name="email" className="form-control " placeholder="E-mail" required onChange={(e) => { setUseremailReg(e.target.value); }} />
                    </div>

                    <div className="form-group">

                        <input type="password" name="password" className="form-control " placeholder="Password" required onChange={(e) => { setUserpasswordReg(e.target.value); }} />
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" className="form-control " placeholder="Confirm password" required onChange={(e) => { checkPassword(e); }} />
                    </div>
                    <div>
                        <p style={{ color: "red", float: "left", fontSize: 13, marginTop: 17 }}>{PassWarningReg}</p>
                    </div>
                    <button type="submit" className="submitbtn" disabled={btnEnable} >Sign Up</button>

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
