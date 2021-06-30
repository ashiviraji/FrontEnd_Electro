import React from "react";
import "../assets/css/billcompare.css";

export default function billcomparison() {
  return (
    <div className="frm">
      <div className="grp">
        <h4>Bill Comparison</h4>

        <div className="row">
          <div className="col-sm-6">
            <div className="card1 card border-success mb-3">
              <div className="card-body">
                <h5 className="card-title">TOU MODEL</h5>
                {/* <p className="card-text">LKR 4590</p> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3"
                    value="LKR: 4590"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card2">
              <div className="card-body">
                <h5 className="card-title">FIXED MODEL</h5>
                {/* <p className="card-text">LKR 3320</p> */}
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3"
                    value="LKR: 3320"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-center1">
          <div className="card-body">
          <h5> Best Model : Fixed </h5>
          </div>
        </div>
        
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Usage of Device Wise</h5>
            <a
              href="#"
              className="btn btn-success btn-lg active"
              role="button"
              aria-pressed="true"
            >
              TOU MODEL
            </a>
            <a
              href="#"
              className="btn btn-success btn-lg active"
              role="button"
              aria-pressed="true"
            >
              FIXED MODEL
            </a>
          </div>
        </div>

        <hr
          style={{
            color: "#FFFFFF",
            backgroundColor: "#FFFFFF",
            height: 0.5,
            borderColor: "#FFFFFF",
          }}
        />

        <div>
          <h5> View TOU Suggestions</h5>
          <a
            href="#"
            className="btn btn-info btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Suggestions
          </a>
        </div>
      </div>
    </div>
  );
}
