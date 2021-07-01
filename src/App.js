import "./App.css";
import { Route } from "react-router-dom";
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Sidebar from './components/common/Sidebar';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DashNavbar from './components/common/DashboardNavbar';
// import DeviceWiseFixed from './views/customer/Devicevicefixed';
import AddNewCebEngineer from "./components/Admin/AddNewCebEngineer";
import Navbar from './components/common/Navbar';

//  import { BrowserRouter as Router } from "react-router-dom";

// import BillComparison  from './views/BillComparison';


function App() {
  return (
    <div className="App">
      <Route exact path='/home'><Navbar /></Route>
      <Route exact path='/dashboard-user'><DashNavbar /><Sidebar/></Route>
      <Route exact path='/sign-in'><SignIn /></Route>
      <Route exact path='/sign-up'><SignUp /></Route>

     
      <Route exact path="/addnewcebengineer"><AddNewCebEngineer /></Route>

      {/* <Route exact path='/dashboard'><Sidebar /></Route>
      <Route exact path='/manage-bill'><Sidebar /><DeviceWiseFixed /></Route> */}

      {/* <Route exact path='/bill-comparison'><BillComparison /></Route> */}

    </div>
  );
}

export default App;
