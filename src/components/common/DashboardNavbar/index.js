import React from "react";

import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLinks,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./DashboardElement";



const DashbordNavbar = ({ toggle }) => {

  /**
    * function of delete all cookies when user log out
    */
  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">ELECTRO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem></NavItem>
            <NavItem>
              <NavLinks to="aboutus">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contactus">Contact Us</NavLinks>
            </NavItem>
            {/* <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="/information">Information</NavBtnLinks>
                            </NavBtn>
                        </NavItem> */}
            <NavItem>
              <NavBtn>
                <NavBtnLinks onClick={deleteAllCookies} to="/electro">Log Out</NavBtnLinks>
              </NavBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default DashbordNavbar;
