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
import DeviceWiseFixed from "../../../views/customer/DeviceWiseFixed";
import TOUSuggestions from "../../../views/customer/TOUSuggestions";
import DashboardUser from "../../../views/customer/DashboardUser";
import CalculateBill from "../../../views/customer/CalculateBill";
import BillCompariosn from "../../../views/customer/BillComparison";
import myBillPlans from "../../../views/customer/billPlans";
import InformationTable from "../../../views/InformationTable";
import DeviceWisePlans from "../../../views/customer/DeviceWisePlans";
import FixedEventForm from "../../../views/customer/FixedEventForm";
import { BiUserCircle } from "react-icons/bi";
import AdminUserProfile from "../../../views/Admin/AdminUserProfile";

// import BillDetails from "../../../views/customer/BillDetails";


import DevicewiseUsageChart from "../../../views/customer/DevicewiseChart";



import "../../../assets/css/Sidebar-user.css";

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
                  <NameList> Ms . Ashika </NameList>
                  <NameList className="role">Customer</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/dashboard-user">
                    <FiHome />
                    &nbsp;&nbsp;&nbsp;Dashboard
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/manage-bill">
                    <RiBillLine />
                    &nbsp;&nbsp;&nbsp;Manage Bill
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/my-bill-plans">
                    <RiInformationLine />
                    &nbsp;&nbsp;&nbsp; My Bill Plans
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/special-event-fixed">
                    <MdEventNote />
                    &nbsp;&nbsp;&nbsp; Special Events
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/user-userprofile">
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
                path="/dashboard-user"
                exact={true}
                component={DashboardUser}
              />

              <Route
                path="/manage-bill"
                exact={true}
                component={CalculateBill}
              />

              <Route
                path="/special-event-fixed"
                exact={true}
                component={FixedEventForm}
              />

              <Route
                path="/TOU-suggestions"
                exact={true}
                component={TOUSuggestions}
              />
              <Route
                path="/my-bill-plans"
                exact={true}
                component={DeviceWisePlans}
              />
              <Route
                path="/bill-comparison"
                exact={true}
                component={BillCompariosn}
              />
              <Route
                path="/information"
                exact={true}
                component={InformationTable}
              />
              <Route
                path="/devicewise-chart"
                exact={true}
                component={DevicewiseUsageChart}
              />
              <Route
                path="/user-userprofile"
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

export default Sidebar;
