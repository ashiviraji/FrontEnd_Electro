import React from "react";
import { Card as card2 } from "react-bootstrap";
import "../../assets/css/Admin/adminupdateunitcharges.css";
import { MdNotificationsActive } from "react-icons/md";

export default function AdminUnitCharges0to60() {
  return (
    <div className="admin-unit-body">
      <div id="admin-unit-title-heading">
        <h2>
          <b>
            <label>FIXED BILLING MODEL (BETWEEN 0-60 kWh)</label>
          </b>
        </h2>
      </div>

      <div class="admin-unit-table-0to60">
        <ul id="admin-unit-horizontal-list">
          <li id="admin-unit-title-category">Category</li>
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
                id="admin-unit-inside-category"
              >
                00-30
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                2.50
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
                id="admin-unit-inside-fixedCharge"
              >
                30.00
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
                id="admin-unit-inside-category"
              >
                31-60
              </label>
            </li>
            <li>
              <label
                className="admin-unit-label-list-inside"
                id="admin-unit-inside-unitCharge"
              >
                4.85
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
                id="admin-unit-inside-fixedCharge"
              >
                60.00
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
    </div>
  );
}
