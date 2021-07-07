import React from "react";
import "../../src/assets/css/informationTable.css";

export default function InformationTable() {
  return (
    <div className="infotable-form">
      <div className="infotable-title">
        <h4>Tariff Plan</h4>
        <p>The following Electricity Tariffs have been approved by the Public Utility Commission of Sri Lanka.</p>
        <h5>Domestic (D-1) </h5>
        <p>If 30 day Consumption is between 0-60 kWh per month the following tariffs will be applicable.</p>
      </div>
      <div className="infotable-group">
        <table className="table table-hover tableD1">
          <thead>
            <tr>
              <th scope="col title1"> Monthly Consumption (kWh)</th>
              <th scope="col title2">Unit Charge (LKR/kWh)</th>
              <th scope="col title3">Fixed Charge (LKR/month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-30</td>
              <td>2.50</td>
              <td>30.00</td>
            </tr>
            <tr>
              <td>31-60</td>
              <td>4.85</td>
              <td>60.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
