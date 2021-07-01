import React, { Component } from "react";
import '../../assets/css/loginForm.css';


export default class LoginForm extends Component {
    render() {
        return (
            <form className="col">
                <div className="frm">
                    <div className="grp">


                        <h3>Sign In</h3>

                        <div className="form-group">

                            <input type="email" name="email" className="form-control my-4" placeholder="Enter email" required />
                        </div>

                        <div className="form-group">

                            <input type="password" name="password" className="form-control my-2" placeholder="Enter password" required />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
                        <div className="">
                            <button type="submit" className="submitbtn">Sign In</button>
                        </div>
                        <div>
                            <p className="forgot-password">
                                Forgot {/*<a href="#">password?</a> */}
                            </p>
                        </div>

                    </div>
                </div>
            </form>
        );
    }
}