import React from "react";
import "../assets/css/billcompare.css";

export default function billcomparison() {
  return (
    <div className="frm">
      <div className="grp">
        <h3>Bill Comparison</h3>

        <div className="row">
          <div className="col-sm-6">
            <div className="card1">
              <div className="card-body">
                <h4 className="card-title">TOU MODEL</h4>
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
                <h4 className="card-title">FIXED MODEL</h4>
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
        <div className="best_one">
        <h3> Best Model : Fixed </h3>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Usage of Device Wise</h5>
            <a
              href="#"
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              TOU MODEL
            </a>{"  "}
            <a
              href="#"
              className="btn btn-primary btn-lg active"
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
            className="btn btn-primary btn-lg active"
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
