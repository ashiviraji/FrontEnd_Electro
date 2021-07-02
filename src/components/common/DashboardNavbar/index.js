import React from 'react';

import { FaBars } from 'react-icons/fa';


import {
    Nav, NavbarContainer, NavBtn, 
    NavBtnLinks, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem,
} from './DashboardElement';
const DashbordNavbar = ({ toggle }) => {
    
    return (
        <>
              <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Electro
                    </NavLogo>
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
                        <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="/dashboard-user">Dashboard</NavBtnLinks>
                            </NavBtn>
                        </NavItem>
                        <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="/log-out">Log Out</NavBtnLinks>
                            </NavBtn>

                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            

        </>
    );
};

export default DashbordNavbar;

