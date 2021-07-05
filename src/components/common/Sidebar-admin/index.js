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
import UnitChargesAdminHome from "../../../views/Admin/UnitChargesAdminHome";
import AdminUserProfile from "../../../views/Admin/AdminUserProfile";
import "../../../assets/css/sidebar-admin.css";

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
        <div className="sidebar-main">
          <div className="sidebar-left">
            <SideNav className={show ? "sidenav active " : "sidenav"}>
              <UserName>
                <UserProfile src={image} alt="image"></UserProfile>

                <UlDetailList>
                  <NameList>Miss. Hasini </NameList>
                  <NameList>Administrator</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/home" >
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
                  <LinkList to="/admin-userprofile">
                    <BiUserCircle />
                    &nbsp;&nbsp;&nbsp;User Profile
                  </LinkList>
                </List>
              </UlList>
            </SideNav>
          </div>
          {/* <Route
          path="/manage-cebengineer"
          exact={true}
          component={ManageCebEngineer}
        />
        <Route
          path="/addnewcebengineer"
          exact={true}
          component={AddNewCebEngineer}
        /> */}

         <div claasName="page-load">
          <div className="load-area">
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
            <Route
              path="/admin-unit-charges"
              exact={true}
              component={UnitChargesAdminHome}
            />
              path="/admin-userprofile"
              exact={true}
              component={AdminUserProfile}
            />
          </div>
        </div>
        </div>
      </Router>
    </>
  );
};

export default SidebarAdmin;
