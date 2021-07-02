import "./App.css";
import React from 'react';
import { Route } from "react-router-dom";
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';


// import Table from './components/Table';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import Sidebar from './components/common/Sidebar';
// import DeviceWiseFixed from './views/customer/Devicevicefixed';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashNavbar from './components/common/DashboardNavbar';

import AddNewCebEngineer from "./components/Admin/AddNewCebEngineer";

import Navbar from './components/common/Navbar';

import { BrowserRouter as Router } from "react-router-dom";

// import BillComparison  from './views/BillComparison';

// import BillComparison from './views/customer/BillComparison';
// import Home from "./views/Home";



function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/home'><Navbar /></Route>
        <Route exact path='/dashboard-user'><DashNavbar /><Sidebar /></Route>
        <Route exact path='/sign-in'><SignIn /></Route>
        <Route exact path='/sign-up'><SignUp /></Route>
        <Route exact path="/addnewcebengineer"><AddNewCebEngineer /></Route>
        

       

        {/* <Route exact path='/bill-comparison'><BillComparison /></Route> */}

      </Router>

    </div>
  );
}

export default App;
