
import React from 'react';
import DevicesIcon from '@material-ui/icons/Devices';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export default function DevicewiseFixed() {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col"><div>< DevicesIcon /></div>Applicance</th>
                    <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Quantity</th>
                    <th scope="col"><div><LocalAtmIcon /></div>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className="device-wise-tr">
                    <th scope="row">1</th>
                    <td className="device-wise-td" >Television</td>
                    <td>1</td>
                    <td>LKR : 340</td>
                </tr>
                <tr className="device-wise-tr">
                    <th scope="row">2</th>
                    <td className="device-wise-td" >Rice Cooker</td>
                    <td>2</td>
                    <td>LKR : 500</td>
                </tr>
                <tr className="device-wise-tr">
                    <th scope="row">3</th>
                    <td className="device-wise-td" >Radio</td>
                    <td>1</td>
                    <td>LKR : 100</td>
                </tr>
                <tr className="device-wise-tr">
                    <th scope="row">4</th>
                    <td className="device-wise-td" >Washing Machine</td>
                    <td>1</td>
                    <td>LKR : 700</td>
                </tr>

                <tr className="device-wise-tr">
                    <th scope="row">5</th>
                    <td className="device-wise-td" >Multi Cooker</td>
                    <td>1</td>
                    <td>LKR : 200</td>
                </tr>


            </tbody>
        </table>
    )
}
