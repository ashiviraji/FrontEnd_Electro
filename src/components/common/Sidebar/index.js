import React from "react";
import image from "../../../assets/img/user.png";
import active from "../../../assets/img/active.png";
import { FiHome } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";

import { AiOutlineBook } from "react-icons/ai";
import { Route } from "react-router-dom";
import { GiTeamIdea } from "react-icons/gi";

import { RiBillLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { BrowserRouter as Router } from "react-router-dom";
import DeviceWiseFixed from "../../../views/customer/Devicevicefixed";
import TOUSuggestions from "../../../views/customer/TOUSuggestions";

import CalculateBill from "../../../views/customer/CalculateBill";
import BillCompariosn from "../../../views/customer/BillComparison";

import "../../../assets/css/sidebar-user.css";

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

const Sidebar = ({ show }) => {
  return (
    <>
      <Router>
        <div className="sidebar-main">
          <div className="sidebar-left">
            <SideNav className={show ? "sidenav active " : "sidenav"}>
              <UserName>
                <UserProfile src={image} alt="image"></UserProfile>

                <UlDetailList>
                  <NameList>Ashika Abeysuriya</NameList>
                  <NameList>Customer</NameList>
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
                  <LinkList to="/manage-bill">
                    <RiBillLine />
                    &nbsp;&nbsp;&nbsp;Manage Bill
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/device-wise">
                    <MdEventNote />
                    &nbsp;&nbsp;&nbsp; Device Vice Usage
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/special-events">
                    <MdEventNote />
                    &nbsp;&nbsp;&nbsp; Special Events
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/TOU-suggestions">
                    <GiTeamIdea />
                    &nbsp;&nbsp;&nbsp; View Suggestions
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/calculate-bill">
                    <GiTeamIdea />
                    &nbsp;&nbsp;&nbsp; Calculate Bill
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/information">
                    <RiInformationLine />
                    &nbsp;&nbsp;&nbsp; Information
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/bill-comparison">
                    <AiOutlineBook />
                    &nbsp;&nbsp;&nbsp; Bill Comparison
                  </LinkList>
                </List>
              </UlList>
            </SideNav>
          </div>
          {/* <Route path='/device-wise' exact={true} component={DeviceWiseFixed} />
                <Route path='/TOU-suggestions' exact={true} component={TOUSuggestions} /> */}
          <div claasName="page-load">
            <div className="load-area">
              <Route
                path="/device-wise"
                exact={true}
                component={DeviceWiseFixed}
              />

              <Route
                path="/calculate-bill"
                exact={true}
                component={CalculateBill}
              />

              <Route
                path="/TOU-suggestions"
                exact={true}
                component={TOUSuggestions}
              />
              <Route
                path="/bill-comparison"
                exact={true}
                component={BillCompariosn}
              />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Sidebar;
