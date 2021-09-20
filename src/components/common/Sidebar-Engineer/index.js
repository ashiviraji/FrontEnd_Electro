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
import { useState } from "react";
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

  const [buttnColor1, setBtnColor1] = useState("");
  const [buttnColor2, setBtnColor2] = useState("");
  const [buttnColor3, setBtnColor3] = useState("");
  const [buttnColor4, setBtnColor4] = useState("");
  const [buttnColor5, setBtnColor5] = useState("");


  function buttonColor(btnNumber) {
    if (btnNumber == 1) {
      setBtnColor1("highlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");

    } else if (btnNumber == 2) {
      setBtnColor1("nonhighlight");
      setBtnColor2("highlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");

    } else if (btnNumber == 3) {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("highlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");

    } else if (btnNumber == 4) {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("highlight");
      setBtnColor5("nonhighlight");

    } else {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("highlight");

    }

  }
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
                  <LinkList to="/dashboard-engineer" className={buttnColor1} onClick={() => buttonColor(1)}>
                    <RiDashboardLine />
                    &nbsp;&nbsp;&nbsp;Dashboard
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-unit-charges-home" className={buttnColor2} onClick={() => buttonColor(2)}>
                    <AiOutlineDollar />
                    &nbsp;&nbsp;&nbsp;Update Unit Charges
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-pending-unit-charges-home" className={buttnColor3} onClick={() => buttonColor(3)}>
                    <BiRevision />
                    &nbsp;&nbsp;&nbsp;Pending Unit Charges
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/engineer-userprofile" className={buttnColor4} onClick={() => buttonColor(4)}>
                    <BiUserCircle />
                    &nbsp;&nbsp;&nbsp;User Profile
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/information" className={buttnColor5} onClick={() => buttonColor(5)}>
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
