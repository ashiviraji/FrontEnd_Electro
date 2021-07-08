import React from "react";
import "../../src/assets/css/informationTable.css";

export default function InformationTable() {
  return (
    <div className="infotable-form">
      <div className="infotable-grp">
      <div className="infotable-title">
        <h4>Tariff Plan</h4>
        <p>
          The following Electricity Tariffs have been approved by the Public
          Utility Commission of Sri Lanka.
        </p>
        <h5>Domestic (D-1) </h5>
      </div>
      <div className="infotable-group1">
        <p>
          If 30 day Consumption is between 0-60 kWh per month the following
          tariffs will be applicable.
        </p>
        <table className="table table-hover">
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
      <div className="infotable-group2">
        <p>
        If 30 day consumption is above 60kWh per month the following tariffs will be applicable.
        </p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col title1"> Monthly Consumption (kWh)</th>
              <th scope="col title2">Unit Charge (LKR/kWh)</th>
              <th scope="col title3">Fixed Charge (LKR/month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0-60</td>
              <td>7.85</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>61-90</td>
              <td>10.00</td>
              <td>90.00</td>
            </tr>
            <tr>
              <td>91-120</td>
              <td>27.75</td>
              <td>480.00</td>
            </tr>
            <tr>
              <td>121-180</td>
              <td>32.00</td>
              <td>480.00</td>
            </tr>
            <tr>
              <td>More than 180</td>
              <td>32.00</td>
              <td>540.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="infotable-group3">
        <p>
          Domestic Time of Use
        </p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col title1">Time of Use</th>
              <th scope="col title2">Unit Charge (LKR/kWh)</th>
              <th scope="col title3">Fixed Charge (LKR/month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Off Peak (2230-0530 hrs)</td>
              <td>13.00</td>
              <td>540.00</td>
            </tr>
            <tr>
              <td>Day (0530-1830 hrs)</td>
              <td>25.00</td>
              <td>540.00</td>
            </tr>
            <tr>
              <td>Peak (1830-2230 hrs)</td>
              <td>54.00</td>
              <td>540.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}
