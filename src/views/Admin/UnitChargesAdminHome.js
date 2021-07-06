import React from "react";

import "../../assets/css/unitchargesadminhome.css";
import { GrDocumentTime } from "react-icons/gr";
import image from "../../assets/img/unitCharge.png";
// import AdminUnitCharges60plus from "../../components/Admin/AdminUnitCharges60plus";
// import DashbordNavbar from "../../components/common/DashboardNavbar";
// import SidebarAdmin from "../../components/common/Sidebar-admin";

//import { Link } from "react-router-dom";
// import { Route } from "react-router-dom";
import { Link } from "react-router-dom";


export default function unitchargesAdminHome() {
  return (
    <form className="col">
      <div className="frm-ucharges">
        <div className="grp-ucharges">
          <div className="title-unitcharges text-center">
            <h4> Unit Charges </h4>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="uchargecard card border-success mb-3">
                <div className="card-body">
                  <h5 className="card-title text-center fixed_title">
                    Fixed Unit Billing Method
                  </h5>
                  {/* <p className="card-text">LKR 4590</p> */}
                  <div className="text-center">
                    <Link className="btn btn-success btn-lg btn-60" to="#">
                      0 - 60
                    </Link>
                    
                    <Link
                      className="btn btn-success btn-lg btn-60+"
                      to="/admin-unitcharges-60plus" 
                    >
                      60+
                    
                    </Link>

                    {/* {/* <Route
                    path="/admin-unitcharges-60plus"
                    component={AdminUnitCharges60plus}
                    exact  */}
                {/* />  */}

                   

                    {/* <Route exact path="/admin-unitcharges-60plus">
                        <DashbordNavbar />
                        <SidebarAdmin />
                        <AdminUnitCharges60plus />
                      </Route> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="uchargecard card border-success mb-3">
                <div className="card-body">
                  <div className="icon">
                    <GrDocumentTime size={35} />
                  </div>
                  <h5 className="card-title text-center">Time of Use MODEL</h5>
                </div>
              </div>
            </div>
          </div>
          <img src={image} alt="unit-charge-admin" width="250" height="250" />
        </div>
      </div>
    </form>
  );
}
