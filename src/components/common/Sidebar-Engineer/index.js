import React from "react";
import CEBEngineer1 from "../../../assets/img/engineer1.png";
import active from "../../../assets/img/active.png";
import { RiDashboardLine } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { AiOutlineDollar } from "react-icons/ai";

import { BiUserCircle } from "react-icons/bi";
import { RiInformationLine } from "react-icons/ri";
import { BiRevision } from "react-icons/bi";

import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

import "../../../assets/css/sidebar-admin.css";
import EngineerUnitChargesHome from "../../../views/CEBEnginner/EngineerUnitChargesHome";
import EngineerUnitCharges0to60 from "../../../views/CEBEnginner/EngineerUnitCharges0to60";
import EngineerUnitCharges60plus from "../../../views/CEBEnginner/EngineerUnitCharges60plus";
import EngineerUnitChargesToU from "../../../views/CEBEnginner/EngineerUnitChargesToU";
import EngineerUserProfile from "../../../views/CEBEnginner/EngineerUserProfile";
import InformationTable from "../../../views/InformationTable";
import DashboardEngineer from "../../../views/CEBEnginner/DashboardCEBEngineer";
import PendingUnitChargesMain from "../../../views/CEBEnginner/EngineerPendingUnitChargesMain";

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
                  <NameList>
                    {
                      document.cookie
                        .split(";")
                        .map((cookie) => cookie.split("="))
                        .reduce(
                          (accumulator, [key, value]) => ({
                            ...accumulator,
                            [key.trim()]: decodeURIComponent(value),
                          }),
                          {}
                        ).name
                    }{" "}
                  </NameList>
                  <NameList>CEB Engineer</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/dashboard-engineer">
                    <RiDashboardLine />
                    &nbsp;&nbsp;&nbsp;Dashboard
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-unit-charges-home">
                    <AiOutlineDollar />
                    &nbsp;&nbsp;&nbsp;Update Unit Charges
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-pending-unit-charges-home">
                    <BiRevision />
                    &nbsp;&nbsp;&nbsp;Pending Unit Charges
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

          <div claasName="page-load">
            <div className="load-area">
              <Route
                path="/engineer-unit-charges-home"
                exact={true}
                component={EngineerUnitChargesHome}
              />

              <Route
                path="/engineer-unitcharges-60plus"
                exact={true}
                component={EngineerUnitCharges60plus}
              />

              <Route
                path="/engineer-unitcharges-0to60"
                exact={true}
                component={EngineerUnitCharges0to60}
              />

              <Route
                path="/engineer-unitcharges-ToU"
                exact={true}
                component={EngineerUnitChargesToU}
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
              <Route
                path="/dashboard-engineer"
                exact={true}
                component={DashboardEngineer}
              />
              <Route
                path="/engineer-pending-unit-charges-home"
                exact={true}
                component={PendingUnitChargesMain}
              />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default SidebarEngineer;
