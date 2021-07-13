import React from 'react'
import { Link as LinkS } from 'react-scroll'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import '../../../assets/css/footer.css'
export default function Footer() {
    return (

        <section className="footer1">
            <section className="banner1">
                <div className="footercontainer" >
                    <div className="footterrow row" >
                        <div className="col-md-12 companyName" >
                            <h3>Electro</h3>

                        </div>
                        <div className="col-md-12" id="footer-col2">
                            <div className="socialmedia">
                                <FaFacebook />
                                <FaInstagram /><FaTwitter /><FaLinkedinIn />

                            </div>

                        </div>

                        <div className="col-md-12 fotterlinks" >

                            <LinkS className="fotterlinks1" to="electro">Home</LinkS>
                            <LinkS className="fotterlinks1" to="services">Services</LinkS>
                            <LinkS className="fotterlinks1" to="aboutus">Aboutus</LinkS>
                            <LinkS className="fotterlinks1" to="contactus">Contactus</LinkS>
                        </div>


                        <hr />


                        <div className="col-md-12 copyright" id="footer-col2">
                            <p>© 2021, All rights reserved by Electro</p>

                        </div>


                    </div>

                </div>
            </section>
        </section >
    )
}
