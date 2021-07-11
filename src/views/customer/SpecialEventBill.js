import React from "react";
import "../../assets/css/Customer/specialeventbill.css";
import { FaThList } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function SpecialEventBill() {
  return (
    <div className="frm-specialeventbill">
      <div className="grp-specialeventbill">
        <div className="text-center main-title-specialevent ">
          <h4>BILL SPECIAL EVENT</h4>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card-specialeventbill card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title text-center">TOU MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="Total Units -  80"
                    required
                    disabled
                  />
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="Total Cost - LKR: 540.00"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card-specialeventbill card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title text-center">FIXED MODEL</h5>
                <div className="form-group total-unit">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="Total Units - 80"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="card text-center card border-success mb-3">
          <div className="card-body">
            <h5 className="card-title">Device Wise Usage</h5>

            <Link
              className="btn btn-success btn-lg btn-tou-special"
              to="/tou-device-wise-seperate"
            >
              TOU Model
            </Link>

            <Link
              className="btn btn-success btn-lg btn-fixed-special"
              to="/device-wise-seperate"
            >
              FIXED Model
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h5> View TOU Suggestions</h5>

          <Link
            className="btn btn-info btn-lg btn-suggest-special"
            to="/TOU-suggestions"
          >
            <FaThList /> Suggestions
          </Link>
        </div>
      </div>
    </div>
  );
}
