import React from "react";
import CEBEngineer1 from "../../../assets/img/CEBEngineer1.png";
import active from "../../../assets/img/active.png";

import { FiHome } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";

import { BiUserCircle } from "react-icons/bi";
import { RiInformationLine } from "react-icons/ri";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import "../../../assets/css/sidebar-admin.css";
import updateUnitCharges from "../../CEBEnginner/updateUnitCharges";
import EngineerUserProfile from "../../../views/CEBEnginner/EngineerUserProfile";
import InformationTable from "../../../views/InformationTable";

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

const SidebarEngineer = ({ show }) => {
  return (
    <>
      <Router>
        <div className="sidebar-main">
          <div className="sidebar-left">
            <SideNav className={show ? "sidenav active " : "sidenav"}>
              <UserName>
                <UserProfile src={CEBEngineer1} alt="image"></UserProfile>

                <UlDetailList>
                  <NameList>Mr. Buthsara </NameList>
                  <NameList>CEB Engineer</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/dashboard-engineer">
                    <FiHome />
                    &nbsp;&nbsp;&nbsp;Dashboard
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/manage-unitCharges">
                    <AiOutlineDollar />
                    &nbsp;&nbsp;&nbsp;Unit Charges
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-userprofile">
                    <BiUserCircle />
                    &nbsp;&nbsp;&nbsp;User Profile
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/information">
                    <RiInformationLine />
                    &nbsp;&nbsp;&nbsp; Information
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
                path="/manage-unitCharges"
                exact={true}
                component={updateUnitCharges}
              />
              <Route
                path="/engineer-userprofile"
                exact={true}
                component={EngineerUserProfile}
              />
              <Route
                path="/information"
                exact={true}
                component={InformationTable}
              />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default SidebarEngineer;
