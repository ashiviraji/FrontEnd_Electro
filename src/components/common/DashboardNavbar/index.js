import React from 'react';
 import {useState} from 'react';
import { FaBars } from 'react-icons/fa';
 import Sidebar from '../Sidebar';

import MenuIcon from '../../../assets/img/menu.png';
import {
    Nav, NavbarContainer, NavBtn,HamburgerIcon,
    NavBtnLinks, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem,
} from './DashboardElement';
const DashbordNavbar = () => {
    const [showNav,setShowNav] =useState(false)
    return (
        <>
            <Nav>
                <NavbarContainer>
                   <HamburgerIcon src={MenuIcon}  onClick={() => setShowNav(!showNav)}></HamburgerIcon>
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
                                <NavBtnLinks to="signin">Tharindu</NavBtnLinks>
                            </NavBtn>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="signup">Logout</NavBtnLinks>
                            </NavBtn>

                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            <Sidebar show={showNav}/>
            
        </>
    );
};

export default DashbordNavbar;

