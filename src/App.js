import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import CalculateBill from "./views/customer/CalculateBill";
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
// import ManageCebEngineer from "./components/Admin/ManageCebEngineer";
// import AddNewCebEngineer from "./components/Admin/AddNewCebEngineer";

// import { BrowserRouter as Router } from "react-router-dom";

import BillComparison from "./views/customer/BillComparison";
// import Home from "./views/Home";
import DashbordNavbar from "./components/common/DashboardNavbar/index";

function App() {
  return (
    <div className="App">
      <Route exact path="/home">
        <Home id="home" />
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

      <Route exact path="/manage-cebengineer">
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

      <Route exact path="/calculate-bill">
        <DashbordNavbar />
        <SidebarUser />
      </Route>
    </div>
  );
}

export default App;
