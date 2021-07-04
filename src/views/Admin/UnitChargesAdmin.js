import React from "react";
import "../../assets/css/unitchargesadmin.css";
import { GrDocumentTime } from 'react-icons/gr';


import { Link } from "react-router-dom";

export default function unitchargesAdmin() {
  return (
    <form className="col">
    <div className="frm-ucharges">
      <div className="grp-ucharges">
        <div className="title-unitcharges text-center">
         <h4> Unit Charges </h4>
        </div>

        <div className="row both">
          <div className="col-sm-6">
            <div className="card card border-success mb-3 fixed-unit">
              <div className="card-body">
                <h5 className="card-title text-center fixed_title">Fixed Unit Billing Method</h5>
                {/* <p className="card-text">LKR 4590</p> */}
                <div className="text-center">
                  <Link className="btn btn-success btn-lg btn-60" to="#">0 - 60</Link>
                  <Link className="btn btn-success btn-lg btn-60+" to="#">60+</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card card border-success mb-3 tou-unit">
              <div className="card-body">
                  <div className="icon text-center"><GrDocumentTime size={35}/></div>
                  <h5 className="card-title text-center">Time of Use MODEL</h5>
              </div>
            </div>
          </div>
       </div>
      </div>
    </div>
  </form>
  );
}
