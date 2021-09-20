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
} from "./NavabarElement";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="electro">ELECTRO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="electro">
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">
                OUR SERVICES
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="aboutus">
                ABOUT US
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contactus">
                CONTACT US
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavBtn>
                <NavBtnLinks to="/information">Information</NavBtnLinks>
              </NavBtn>
            </NavItem>
            <NavItem>
              <NavBtn>
                <NavBtnLinks to="/sign-in">Sign In</NavBtnLinks>
              </NavBtn>
            </NavItem>
            <NavItem>
              <NavBtn>
                <NavBtnLinks to="/sign-up">Sign Up</NavBtnLinks>
              </NavBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
