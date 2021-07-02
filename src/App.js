import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import CalculateBill from "./views/customer/CalculateBill";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

// import Table from './components/Table';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/common/Sidebar";
// import DeviceWiseFixed from './views/customer/Devicevicefixed';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashNavbar from "./components/common/DashboardNavbar";

import SidebarAdmin from "./components/common/Sidebar-admin";
import ManageCebEngineer from "./components/Admin/ManageCebEngineer";
import AddNewCebEngineer from "./components/Admin/AddNewCebEngineer";

import { BrowserRouter as Router } from "react-router-dom";

// import BillComparison  from './views/BillComparison';

// import BillComparison from './views/customer/BillComparison';
// import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard-user">
        <DashNavbar />
        <Sidebar />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/manage-cebengineer">
        <ManageCebEngineer />
      </Route>
      <Route exact path="/addnewcebengineer">
        <AddNewCebEngineer />
      </Route>
      <Route exact path="/dashboard-admin">
        <DashNavbar />
        <SidebarAdmin />
      </Route>
      <Route exact path="/calculate-bill">
        <CalculateBill />
      </Route>

      {/* <Route exact path='/bill-comparison'><BillComparison /></Route> */}
      {/* </Router> */}

    </div>
  );
}

export default App;
