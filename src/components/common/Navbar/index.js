import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav, NavbarContainer, NavBtn,
    NavBtnLinks, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem
} from './NavabarElement';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Electro
                    </NavLogo>
                    <MobileIcon>
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
                        <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="signin">Sign In</NavBtnLinks>
                            </NavBtn>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="signup">Sign Up</NavBtnLinks>
                            </NavBtn>

                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;

