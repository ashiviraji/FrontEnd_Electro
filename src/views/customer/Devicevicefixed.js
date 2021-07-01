import React from 'react';



import "../../assets/css/deviceViceFixed.css";
import DevicesIcon from '@material-ui/icons/Devices';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';



function Devicevicefixed() {
  

  return (
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
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><div>< DevicesIcon /></div>Applicance</th>
            <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Quantity</th>
            <th scope="col"><div><LocalAtmIcon /></div>Total Units</th>
            <th scope="col"><div><LocalAtmIcon /></div>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="device-wise-tr">
            <th scope="row">1</th>
            <td className="device-wise-td" >Television</td>
            <td>1</td>
            <td>100</td>
            <td>LKR : 1340</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">2</th>
            <td className="device-wise-td" >Rice Cooker</td>
            <td>2</td>
            <td>25</td>
            <td>LKR : 500</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">3</th>
            <td className="device-wise-td" >Radio</td>
            <td>1</td>
            <td>170</td>
            <td>LKR : 6100</td>
          </tr>
          <tr className="device-wise-tr">
            <th scope="row">4</th>
            <td className="device-wise-td" >Washing Machine</td>
            <td>1</td>
            <td>290</td>
            <td>LKR : 9700</td>
          </tr>

          <tr className="device-wise-tr">
            <th scope="row">5</th>
            <td className="device-wise-td" >Multi Cooker</td>
            <td>1</td>
            <td>120</td>
            <td>LKR : 4200</td>
          </tr>


        </tbody>
      </table>

      <div className="device-wise-chart">
        View Chart Of Usage
      </div>
    </div>
  )
}

export default Devicevicefixed
