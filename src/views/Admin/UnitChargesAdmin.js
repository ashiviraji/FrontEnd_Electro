import React from "react";
import "../../assets/css/unitchargesadmin.css";
import { GrDocumentTime } from 'react-icons/gr';


import { Link } from "react-router-dom";

export default function unitchargesAdmin() {
  return (
    <div className="frm">
      <div className="grp">
        <div className="title-unitcharges">
         <h4> Unit Charges </h4>
        </div>

        <div className="row both">
          <div className="col-sm-6">
            <div className="card card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Fixed Unit Billing Method</h5>
                {/* <p className="card-text">LKR 4590</p> */}
                <Link className="btn btn-success btn-lg btn-60" to="#">0 - 60</Link>
                <Link className="btn btn-success btn-lg btn-60+" to="#">60+</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card card border-success mb-3">
              <div className="card-body">
                  <div className="icon"><GrDocumentTime size={35}/></div>
                  <h5 className="card-title">Time of Use MODEL</h5>
                {/* <p className="card-text">LKR 3320</p> */}
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
}
