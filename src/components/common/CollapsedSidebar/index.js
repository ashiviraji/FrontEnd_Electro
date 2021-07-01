import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink
} from './CollapseSidebar'
const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='home' onClick={toggle}>HOME </SidebarLink>
                        <SidebarLink to='about-us' onClick={toggle}>ABOUT US </SidebarLink>
                        <SidebarLink to='contact-us' onClick={toggle}>CONTACT US </SidebarLink>
                        <SidebarLink to='/sign-in' onClick={toggle}>SIGN IN </SidebarLink>
                        <SidebarLink to='/sign-up' onClick={toggle}>SIGN UP </SidebarLink>

                    </SidebarMenu>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
