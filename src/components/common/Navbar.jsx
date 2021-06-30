import React from 'react'
import { Link } from "react-router-dom";
import "../../assets/css/navbar.css";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
                <div className="container">

                    <Link className="navbar-brand" to="/">ElectrO</Link>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item ">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/sign-in">Login</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/sign-up">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/tablelist">Table</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>

                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    )
}
