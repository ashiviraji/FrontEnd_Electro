import React from 'react'
import { Link } from "react-router-dom";

import '../../assets/css/loginForm.css';


export default function SignUpForm() {
    return (

        <form className="col">
            <div className="frm">
                <div className="grp">
                    <h3>Sign Up</h3>

                    <div className="form-group">

                        <input type="text" name="firstName" className="form-control my-3" placeholder="First name" required />
                    </div>

                    <div className="form-group">

                        <input type="text" name="lastName" className="form-control my-3" placeholder="Last name" required />
                    </div>

                    <div className="form-group">

                        <input type="email" name="email" className="form-control my-3" placeholder="Enter email" required />
                    </div>

                    <div className="form-group">

                        <input type="password" name="password" className="form-control my-3" placeholder="Enter password" required />
                    </div>
                    <div className="form-group">

                        <input type="password" name="confirmPassword" className="form-control my-3" placeholder="Confirm password" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn submitbtn my-3">Sign Up</button>

                        <p className="forgot-password text-center">
                            Already registered<Link className="nav-link" to="/sign-in">sign in?</Link>
                        </p>


                    </div>
                </div>
            </div>

        </form >

    )
}
