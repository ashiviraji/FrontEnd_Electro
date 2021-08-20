import React from "react";
import image from "../../../assets/img/user.png";
import active from "../../../assets/img/active.png";
import { FiHome } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";

import { AiOutlineBook } from "react-icons/ai";
import { Route } from "react-router-dom";
import {ImInsertTemplate} from "react-icons/im";
import { GiTeamIdea } from "react-icons/gi";
import {RiDashboardLine} from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { BrowserRouter as Router } from "react-router-dom";
import DeviceWiseFixed from "../../../views/customer/DeviceWiseFixed";
import TOUSuggestions from "../../../views/customer/TOUSuggestions";
import DashboardUser from "../../../views/customer/DashboardUser";
import CalculateBill from "../../../views/customer/CalculateBill";
import BillCompariosn from "../../../views/customer/BillComparison";
import myBillPlans from "../../../views/customer/billPlans";
import SpecialEventMyBillPlans from "../../../views/customer/SpecialEventBillPlans";
import InformationTable from "../../../views/InformationTable";
import DeviceWisePlans from "../../../views/customer/DeviceWisePlans";
import FixedEventForm from "../../../views/customer/FixedEventForm";
import { BiUserCircle } from "react-icons/bi";
// import AdminUserProfile from "../../../views/Admin/AdminUserProfile";
import CustomerUserProfile from "../../Customer/CustomerUserProfile";
import deviceWiseFixedSeperate from "../../../views/customer/deviceWiseFixedUsageSeperate";
import deviceWiseTOUSeperate from "../../../views/customer/DeviceWiseTOUSeperate";
import SpecialEventDeviceUsage from "../../../views/customer/SpecialEventDeviceUsage";
import TOUEventForm from "../../../views/customer/TOUEventForm";
import {GrObjectUngroup} from "react-icons/gr";
// import UserProfile from "../../../views/customer/AdminUserProfile"

import DevicewiseChart from "../../../views/customer/devicewiseChartTOU";
import DevicewiseChartFixed from "../../../views/customer/devicewiseChartFixed"
import SpecialEventFixedDeviceWise from "../../../views/customer/SpecialEventDeviceWiseFixed";
import  SpecialEventTouDeviceWise from "../../../views/customer/SpecialEventDeviceWiseTOU";
import AddSpecialEventBillPlan from "../../../views/customer/AddSpecialEvent"
import BillMoreDetails from "../../../views/customer/BillMoreDetails";

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
                  <NameList> Tharindu </NameList>
                  <NameList className="role">Customer</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/dashboard-user">
                    <RiDashboardLine />
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
                    <ImInsertTemplate style={{color:"White"}} />
                    &nbsp;&nbsp;&nbsp; My Bill Plans
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/special-event">
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
                path="/tou-device-wise-seperate"
                exact={true}
                component={deviceWiseTOUSeperate}
              />


             <Route
                path="/special-event"
                exact={true}
                component={SpecialEventMyBillPlans}
              />

                 <Route
                path="/special-event-device-wise"
                exact={true}
                component={SpecialEventDeviceUsage}
              /> 
               
              <Route
                path="/device-wise-seperate"
                exact={true}
                component={deviceWiseFixedSeperate}
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
                path="/devicewise-chart-TOU"
                exact={true}
                component={DevicewiseChart}
              />
              <Route
                path="/user-userprofile"
                exact={true}
                component={CustomerUserProfile}
              />
              <Route
                path="/devicewise-chart-fixed"
                exact={true}
                component={DevicewiseChartFixed}
              />
              <Route
                path="/TOU-Event-Form"
                exact={true}
                component={TOUEventForm}
              />

             <Route
                path="/special-tou-device-wise"
                exact={true}
                component={SpecialEventTouDeviceWise}
              />

<Route
                path="/special-fixed-device-wise"
                exact={true}
                component={SpecialEventFixedDeviceWise}
              />



               <Route
                path="/special-event-new-bill"
                exact={true}
                component={AddSpecialEventBillPlan}
                />
              <Route
                path="/Bill-More-Details"
                exact={true}
                component={BillMoreDetails}
              />
              
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Sidebar;
