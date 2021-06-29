import "./App.css";
import { Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Contactus from "./views/Contactus";
import Aboutus from "./views/Aboutus";

import Home from "./views/Home";
import Term from "./views/Term";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import AddNewCebEngineer from "./components/Admin/AddNewCebEngineer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact-us">
        <Contactus />
      </Route>
      <Route exact path="/about-us">
        <Aboutus />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUp />
      </Route>
      <Route exact path="/term">
        <Term />
      </Route>
      <Route exact path="/addnewcebengineer">
        <AddNewCebEngineer />
      </Route>
    </div>
  );
}

export default App;
