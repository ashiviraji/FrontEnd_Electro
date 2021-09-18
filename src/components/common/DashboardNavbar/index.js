import React from "react";
import ConfirmDialog from "../../Customer/bill_control/ConfirmDialog";

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
import { useHistory } from "react-router";
import { useState } from "react";


const DashbordNavbar = ({ toggle }) => {
  let history = useHistory();

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  /**
    * function of delete all cookies when user log out
    */
  function deleteAllCookies() {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    history.push("/");
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
            {/* <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem></NavItem>
            <NavItem>
              <NavLinks to="aboutus">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contactus">Contact Us</NavLinks>
            </NavItem> */}
            {/* <NavItem>
                            <NavBtn>
                                <NavBtnLinks to="/information">Information</NavBtnLinks>
                            </NavBtn>
                        </NavItem> */}
            <NavItem>
              <NavBtn>
                <NavBtnLinks onClick={() => {
                  setConfirmDialog({
                    isOpen: true,
                    title: "Do You Want Leave From Electro",
                    subTitle: "Click 'Yes' to Sign Out",
                    btnStatus: "success",
                    onConfirm: () => {
                      deleteAllCookies();
                    },
                  });
                }}>Log Out</NavBtnLinks>
              </NavBtn>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default DashbordNavbar;
