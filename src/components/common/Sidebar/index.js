import React from "react";
import image from "../../../assets/img/user.png";
import active from "../../../assets/img/active.png";
import { FiHome } from "react-icons/fi";
import { RiInformationLine } from "react-icons/ri";
import { AiOutlineBook } from "react-icons/ai";
import { Route } from "react-router-dom";
import { ImInsertTemplate } from "react-icons/im";
import { GiTeamIdea } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";
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
import FixedEventForm from "../../../views/customer/SpecialFixedEditBill";
import { BiUserCircle } from "react-icons/bi";
// import AdminUserProfile from "../../../views/Admin/AdminUserProfile";
import CustomerUserProfile from "../../Customer/CustomerUserProfile";
import deviceWiseFixedSeperate from "../../../views/customer/deviceWiseFixedUsageSeperate";
import deviceWiseTOUSeperate from "../../../views/customer/DeviceWiseTOUSeperate";
import SpecialEventDeviceUsage from "../../../views/customer/SpecialEventDeviceUsage";
import TOUEventForm from "../../../views/customer/SpecialTOUEditBill";
import { GrObjectUngroup } from "react-icons/gr";
// import UserProfile from "../../../views/customer/AdminUserProfile"

import DevicewiseChart from "../../../views/customer/devicewiseChartTOU";
import DevicewiseChartFixed from "../../../views/customer/devicewiseChartFixed"
import SpecialEventFixedDeviceWise from "../../../views/customer/SpecialEventDeviceWiseFixed";
import SpecialEventTouDeviceWise from "../../../views/customer/SpecialEventDeviceWiseTOU";
import AddSpecialEventBillPlan from "../../../views/customer/AddSpecialEvent"
import BillMoreDetails from "../../../views/customer/BillMoreDetails";
import BillPlansMoreAndEdit from "../../../views/customer/BillPlansMoreAndEdit";
import DeviceChartSpFixed from "../../Customer/DeviceChartSpFixed";
import DeviceChartSpTOU from "../../Customer/DeviceChartSpTOU";

import "../../../assets/css/Sidebar-user.css";
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

const Sidebar = ({ show }) => {
  const [buttnColor1, setBtnColor1] = useState("");
  const [buttnColor2, setBtnColor2] = useState("");
  const [buttnColor3, setBtnColor3] = useState("");
  const [buttnColor4, setBtnColor4] = useState("");
  const [buttnColor5, setBtnColor5] = useState("");
  const [buttnColor6, setBtnColor6] = useState("");

  function buttonColor(btnNumber) {
    if (btnNumber == 1) {
      setBtnColor1("highlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");
      setBtnColor6("nonhighlight");
    } else if (btnNumber == 2) {
      setBtnColor1("nonhighlight");
      setBtnColor2("highlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");
      setBtnColor6("nonhighlight");
    } else if (btnNumber == 3) {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("highlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");
      setBtnColor6("nonhighlight");
    } else if (btnNumber == 4) {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("highlight");
      setBtnColor5("nonhighlight");
      setBtnColor6("nonhighlight");
    } else if (btnNumber == 5) {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("highlight");
      setBtnColor6("nonhighlight");
    } else {
      setBtnColor1("nonhighlight");
      setBtnColor2("nonhighlight");
      setBtnColor3("nonhighlight");
      setBtnColor4("nonhighlight");
      setBtnColor5("nonhighlight");
      setBtnColor6("highlight");
    }

  }

  return (
    <>
      <Router>
        <div className="sidebar-main">
          <div className="sidebar-left">
            <SideNav className={show ? "sidenav active " : "sidenav"}>
              <UserName>
                <UserProfile src={image} alt="image"></UserProfile>

                <UlDetailList>
                  <NameList> {document.cookie
                    .split(';')
                    .map(cookie => cookie.split('='))
                    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).name} </NameList>
                  <NameList className="role">Customer</NameList>
                  <NameList>
                    <ActiveIcon src={active}></ActiveIcon>&nbsp;&nbsp;Active
                  </NameList>
                </UlDetailList>
              </UserName>
              <UlList>
                <List>
                  <LinkList to="/dashboard-user" className={buttnColor1}
                    onClick={() => buttonColor(1)}
                  >
                    <RiDashboardLine />
                    &nbsp;&nbsp;&nbsp;Dashboard
                  </LinkList>

                </List>

                <List>
                  <LinkList to="/manage-bill" className={buttnColor2} onClick={() => buttonColor(2)} >
                    <RiBillLine />
                    &nbsp;&nbsp;&nbsp;Manage Bill
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/my-bill-plans" className={buttnColor3} onClick={() => buttonColor(3)}>
                    <ImInsertTemplate style={{ color: "White" }} />
                    &nbsp;&nbsp;&nbsp; My Bill Plans
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/special-event" className={buttnColor4} onClick={() => buttonColor(4)}>
                    <MdEventNote />
                    &nbsp;&nbsp;&nbsp; Special Events
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/user-userprofile" className={buttnColor5} onClick={() => buttonColor(5)}>
                    <BiUserCircle />
                    &nbsp;&nbsp;&nbsp;User Profile
                  </LinkList>
                </List>

                <List>
                  <LinkList to="/information" className={buttnColor6} onClick={() => buttonColor(6)}>
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
                path="/my-bill-plans-moreAndEdit"
                exact={true}
                component={BillPlansMoreAndEdit}
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

              <Route
                path="/devicewise-chart-spfixed"
                exact={true}
                component={DeviceChartSpFixed}
              />

              <Route
                path="/devicewise-chart-spTOU"
                exact={true}
                component={DeviceChartSpTOU}
              />

            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Sidebar;
