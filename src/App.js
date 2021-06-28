
import './App.css';
import { Route } from "react-router-dom";

import Navbar from './components/common/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Contactus from './views/Contactus';
import Aboutus from './views/Aboutus';

import Home from './views/Home';

import SignIn from './views/SignIn';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Route exact path='/'><Home /></Route>
      <Route exact path='/contact-us'><Contactus /></Route>
      <Route exact path='/about-us'><Aboutus /></Route>
      <Route exact path='/sign-in'><SignIn /></Route>
    </div>
  );
}

export default App;
