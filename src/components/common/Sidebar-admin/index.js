import React from "react";
import image from "../../../assets/img/user.png";
import active from "../../../assets/img/active.png";
import { FiHome } from "react-icons/fi";
// import { RiInformationLine } from "react-icons/ri";
import { Route } from "react-router-dom";

import { RiBillLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { BrowserRouter as Router } from "react-router-dom";
import AddNewCebEngineer from "../../../views/Admin/AddNewCebEngineer";

import {
  SideNav,
  UlList,
  List,
  LinkList,
  UserProfile,
  UserName,
  UlDetailList,
  NameList,
  ActiveIcon,
} from "./SidebarElement";

const SidebarAdmin = ({ show }) => {
  return (
    <>
      <Router>
        <SideNav className={show ? "sidenav active " : "sidenav"}>
          <UserName>
            <UserProfile src={image} alt="image"></UserProfile>

            <UlDetailList>
              <NameList>Hasini Hatharasinghe</NameList>
              <NameList>Administrator</NameList>
              <NameList>
                <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
              </NameList>
            </UlDetailList>
          </UserName>
          <UlList>
            <List>
              <LinkList to="/home">
                <FiHome />
                &nbsp;&nbsp;&nbsp;Home
              </LinkList>
            </List>

            <List>
              <LinkList to="/admin-unit-charges">
                <RiBillLine />
                &nbsp;&nbsp;&nbsp;Unit Charges
              </LinkList>
            </List>

            <List>
              <LinkList to="/addnewcebengineer">
                <MdEventNote />
                &nbsp;&nbsp;&nbsp;Manage CEB Engineer
              </LinkList>
            </List>

            <List>
              <LinkList to="/user-profile">
                <MdEventNote />
                &nbsp;&nbsp;&nbsp;User Profile
              </LinkList>
            </List>
          </UlList>
        </SideNav>
        <Route
          path="/addnewcebengineer"
          exact={true}
          component={AddNewCebEngineer}
        />
      </Router>
    </>
  );
};

export default SidebarAdmin;
