import React from "react";
import "../../assets/css/billcompare.css";
import { FaThList } from 'react-icons/fa';


import { Link } from "react-router-dom";

export default function billcomparison() {
  return (
    <div className="frm-billcomparison">
      <div className="grp-billcomparison">
        <div className="text-center main-title ">
         <h4> Bill Comparison</h4>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card1-billcomparison card border-success mb-3">
              <div className="card-body tou-billcomparison">
                <h5 className="card-title text-center">TOU MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="LKR: 4590"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card2-billcomparison card border-success mb-3">
              <div className="card-body fixed-billcomparison">
                <h5 className="card-title text-center">FIXED MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="LKR: 3320"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-center best-model card border-success mb-3">
          <div className="card-body best">
          <h5> Best Model : Fixed </h5>
          </div>
        </div>
        
        <div className="card text-center card border-success mb-3">
          <div className="card-body usage-of-device">
            <h5 className="card-title">Device Wise Usage</h5>
            
            <Link className="btn btn-success btn-lg btn-tou" to="#">TOU Model</Link>

            <Link className="btn btn-success btn-lg btn-fixed" to="#">FIXED Model</Link>

          </div>
        </div>

        <div className="text-center">
          <h5> View TOU Suggestions</h5>
          
          <Link className="btn btn-info btn-lg btn-suggest" to="#"><FaThList /> Suggestions</Link>

        </div>
      </div>
    </div>
  );
}
