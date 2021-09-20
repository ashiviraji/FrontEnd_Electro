import React from "react";
import "../../assets/css/CEBEngineer/unitchargesengineerhome.css";
import { GrDocumentTime } from "react-icons/gr";
import unitchargeupdates from "../../assets/img/unitchargeupdates.png";
// import { Route } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from "react-router-dom";

export default function EngineerUnitChargesHome() {
  return (
    <form className="col">
      <Breadcrumbs aria-label="breadcrumb" style={{ marginTop: '2rem', marginLeft: '2rem' }} separator={<NavigateNextIcon fontSize="small" />}>
        <Link underline="hover" color="blue" href="/dashboard-engineer">
          Dashboard
        </Link>
        <Typography color="text.primary">Unit Charges</Typography>
      </Breadcrumbs>
      <div className="frm-ucharges">
        <div className="eng-grp-ucharges">
          <div className="eng-title-unitcharges text-center">
            <h4> Unit Charges </h4>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="end-uchargecard card border-success mb-3">
                <div className="card-body">
                  <h5 className="card-title text-center eng-fixed_title">
                    Fixed Unit Billing Method
                  </h5>
                  {/* <p className="card-text">LKR 4590</p> */}
                  <div className="text-center">
                    <NavLink
                      className="btn btn-success btn-lg eng-btn-60"
                      to="/engineer-unitcharges-0to60"
                    >
                      0 - 60
                    </NavLink>
                    <NavLink
                      className="btn btn-success btn-lg eng-btn-60+"
                      to="/engineer-unitcharges-60plus"
                    >
                      60+
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="eng-uchargecard card border-success mb-3">
                <div className="card-body">
                  <h5 className="card-title text-center eng-fixed_title">
                    Time of Use MODEL
                  </h5>
                  <div className="eng-icon">
                    <NavLink
                      className="btn btn-success btn-lg eng-btn-60+"
                      to="/engineer-unitcharges-ToU"
                    >
                      {" "}
                      <GrDocumentTime size={25} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src={unitchargeupdates}
            alt="unit-charge-update-admin"
            width="350"
            height="250"
          />
        </div>
      </div>
    </form>
  );
}
