import React from "react";
import { Card as card2 } from "react-bootstrap";
import "../../assets/css/Admin/adminupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";

export default function AdminUnitChargesToU() {
  return (
    <div className="admin-unit-body">
      <div id="admin-tou-title-heading">
        <h2>
          <b>
            <label>ToU BILLING MODEL</label>
          </b>
        </h2>
      </div>

      <div class="admin-unit-table-0to60">
        <ul id="admin-unit-horizontal-list">
          <li id="admin-unit-title-category">Time of Use(ToU)</li>
          <li>Unit Charge(LKR/kWh)</li>
          <li>Fixed Charge(LKR/month)</li>
        </ul>
      </div>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                Peak (18.30-22.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                54.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                540.00
              </label>
            </li>
            <li>
             
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
              
            </li>
          </ul>
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                Day (5.30-18.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                25.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                540.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>

      <card2>
        <card2.Body className="card2-body">
          <ul id="admin-unit-horizontal-list-inside">
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-category"
              >
                Off-peak (22.30-05.30)
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-unitCharge"
              >
                13.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update">
                UPDATE&nbsp;
                <MdNotificationsActive
                  style={{ width: "1.2rem", height: "1.2rem" }}
                ></MdNotificationsActive>
              </button>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-tou-inside-fixedCharge"
              >
                540.00
              </label>
            </li>
            <li>
              <button className="admin-unit-label-list-update" disabled>
                UPDATE
              </button>
            </li>
          </ul>
        </card2.Body>
      </card2>
    </div>
  );
}
