import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ResetPassword from "./views/ResetPassword";

import Home from "./views/Home";

import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

// import Table from './components/Table';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SidebarUser from "./components/common/Sidebar";
// import DeviceWiseFixed from './views/customer/Devicevicefixed';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashNavbar from "./components/common/DashboardNavbar";

import SidebarAdmin from "./components/common/Sidebar-admin";
import SidebarEngineer from "./components/common/Sidebar-Engineer";

// import Home from "./views/Home";
import DashbordNavbar from "./components/common/DashboardNavbar/index";
import ForgotPassword from "./views/ForgotPassword";

import InfoTable from "./views/InformationTable";
import SpecialEventBill from "./views/customer/SpecialEventBill";
import DevicewiseChartFixed from "./views/customer/devicewiseChartFixed"
// import DevicewiseChart from "./views/customer/devicewiseChart";
// import { Bar } from 'react-chartjs-2';


function App() {
  return (
    <div className="App">
      <Route exact path="/electro">
        <Home id="electro" />
      </Route>
      <Route exact path="/forgotpassword">
        <ForgotPassword />
      </Route>
      <Route exact path="/dashboard-user">
        <DashNavbar />
        <SidebarUser />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/reset-password">
        <ResetPassword />
      </Route>

      <Route exact path="/device-wise">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/TOU-suggestions">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/dashboard-admin">
        <DashNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/addnewcebengineer">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/myBillPlans">
        <DashbordNavbar />
        <SidebarUser />
      </Route>


      <Route exact path="/home-user">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/manage-cebengineer">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/cebengineer-details1">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/cebengineer-details2">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/admin-userprofile">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/bill-comparison">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/dashboard-engineer">
        <DashNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/engineer-unit-charges-home">
        <DashbordNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/engineer-unitcharges-60plus">
        <DashbordNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/engineer-unitcharges-ToU">
        <DashbordNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/engineer-userprofile">
        <DashbordNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/engineer-unitcharges-0to60">
        <DashbordNavbar />
        <SidebarEngineer />
      </Route>

      <Route exact path="/calculate-bill">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/admin-unit-charges">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/admin-unitcharges-60plus">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/admin-unitcharges-0to60">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/admin-unitcharges-ToU">
        <DashbordNavbar />
        <SidebarAdmin />
      </Route>

      <Route exact path="/information">
        <InfoTable />
      </Route>

      <Route exact path="/devicewise-chart-TOU">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/devicewise-chart-fixed">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/manage-bill">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/tou-device-wise-seperate">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/my-bill-plans">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/device-wise-seperate">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/special-event">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/user-userprofile">
        <DashbordNavbar />
        <SidebarUser />
      </Route>

      <Route exact path="/special-event-new-bill">
        <DashbordNavbar />
        <SidebarUser />
      </Route>


    </div>
  );
}

export default App;
