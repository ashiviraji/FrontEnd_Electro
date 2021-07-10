import React from 'react';
import "../../assets/css/Customer/deviceWiseFixed.css";
import DevicesIcon from '@material-ui/icons/Devices';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
export default function DeviceWiseFixed() {
    return(
       
             <div className="main">
      <div className="device-wise-title">
        Your Device Wise Usage
      </div>
      <div className="selection-card">
        <text className="selection-title">Select Method</text>
        <select className="selection-method" >
          <option className="option-method" value="Time-Of-Use">Time Of Use(TOU)</option>
          <option className="option-method" value="Fixed-Bill-model">Fixed Billing Model</option>
        </select>
      </div>
      <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col -3 ">#</th>
            <th scope="col" class="application-name"><div>< DevicesIcon /></div>Applicance</th>
            <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Quantity</th>
            <th scope="col"><div><LocalAtmIcon /></div>Total Units</th>
            <th scope="col"><div><LocalAtmIcon /></div>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="device-wise-tr">
            <th scope="row">1</th>
            <td className="device-wise-td" >Television</td>
            <td className="center-td">1</td>
            <td className="center-td">100</td>
            <td className="center-td">LKR : 1340</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">2</th>
            <td className="device-wise-td" >Rice Cooker</td>
            <td className="center-td">2</td>
            <td className="center-td">25</td>
            <td className="center-td">LKR : 500</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">3</th>
            <td className="device-wise-td" >Radio</td>
            <td className="center-td">1</td>
            <td className="center-td">170</td>
            <td className="center-td">LKR : 6100</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">4</th>
            <td className="device-wise-td" >Washing Machine</td>
            <td className="center-td">1</td>
            <td className="center-td">290</td>
            <td className="center-td">LKR : 9700</td>
          </tr>

          <tr className="device-wise-tr">
            <th scope="row">5</th>
            <td className="device-wise-td" >Multi Cooker</td>
            <td className="center-td">1</td>
            <td className="center-td">120</td>
            <td className="center-td">LKR : 4200</td>
          </tr>


        </tbody>
      </table>
      </div>

      <div className="device-wise-chart">
        View Chart Of Usage
      </div>
    </div>
        
    )
}