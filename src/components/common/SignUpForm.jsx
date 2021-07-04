import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import '../../assets/css/Authentication/loginForm.css';


export default function SignUpForm() {
    return (

        <form className="col">
            <div className="frmLogin">
                <div className="grpLogin">
                    <h3>Sign Up</h3>

                    <div className="form-group">

                        <input type="text" name="firstName" className="form-control " placeholder="First name" required />
                    </div>

                    <div className="form-group">

                        <input type="text" name="lastName" className="form-control " placeholder="Last name" required />
                    </div>

                    <div className="form-group">

                        <input type="email" name="email" className="form-control " placeholder="Enter email" required />
                    </div>

                    <div className="form-group">

                        <input type="password" name="password" className="form-control " placeholder="Enter password" required />
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" className="form-control " placeholder="Confirm password" required />
                    </div>
                    <button type="submit" className="submitbtn ">Sign Up</button>

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
