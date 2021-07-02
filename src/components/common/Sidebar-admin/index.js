import React from "react";
import image from "../../../assets/img/user.png";
import active from "../../../assets/img/active.png";

import { FiHome } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import ManageCebEngineer from "../../../views/Admin/ManageCebEngineer";
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
                <AiOutlineDollar />
                &nbsp;&nbsp;&nbsp;Unit Charges
              </LinkList>
            </List>

            <List>
              <LinkList to="/manage-cebengineer">
                <FaUserTie />
                &nbsp;&nbsp;&nbsp;Manage CEB Engineer
              </LinkList>
            </List>

            <List>
              <LinkList to="/addnewcebengineer">
                <FaUserTie />
                &nbsp;&nbsp;&nbsp;Add New CEB Engineer
              </LinkList>
            </List>

            <List>
              <LinkList to="/user-profile">
                <BiUserCircle />
                &nbsp;&nbsp;&nbsp;User Profile
              </LinkList>
            </List>
          </UlList>
        </SideNav>
        <Route
          path="/manage-cebengineer"
          exact={true}
          component={ManageCebEngineer}
        />
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
