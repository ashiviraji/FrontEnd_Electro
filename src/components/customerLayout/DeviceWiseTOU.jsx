import React from 'react';
import DevicesIcon from '@material-ui/icons/Devices';
import FormatListNumberedRtlIcon from '@material-ui/icons/FormatListNumberedRtl';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

export default function DeviceWiseTOU() {
    return (
        <table className="table table-borderless">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"><div>< DevicesIcon /></div>Applicance</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Quantity</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Peak Units</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Peak Amount</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Off-Peak Units</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Off-Peak Amount</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Day Time Units</th>
                <th scope="col"><div>< FormatListNumberedRtlIcon /></div>Day Time Amount</th>
                <th scope="col"><div><LocalAtmIcon /></div>Total Units</th>
                <th scope="col"><div><LocalAtmIcon /></div>Total Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr className="device-wise-tr">
                <th scope="row">1</th>
                <td className="device-wise-td" >Television</td>
                <td>1</td>
                <td>15</td>
                <td>LKR :250</td>
                <td>25</td>
                <td>LKR :450</td>
                <td>55</td>
                <td>LKR :850</td>
                <td>95</td>
                <td>LKR : 3240</td>
            </tr>
            <tr className="device-wise-tr">
                <th scope="row">2</th>
                <td className="device-wise-td" >Rice Cooker</td>
                <td>2</td>
                <td>15</td>
                <td>LKR :250</td>
                <td>25</td>
                <td>LKR :450</td>
                <td>55</td>
                <td>LKR :850</td>
                <td>95</td>
                <td>LKR : 3240</td>
            </tr>
            <tr className="device-wise-tr">
                <th scope="row">3</th>
                <td className="device-wise-td" >Radio</td>
                <td>1</td>
                <td>15</td>
                <td>LKR :250</td>
                <td>25</td>
                <td>LKR :450</td>
                <td>55</td>
                <td>LKR :850</td>
                <td>95</td>
                <td>LKR : 3240</td>
            </tr>
            <tr className="device-wise-tr">
                <th scope="row">4</th>
                <td className="device-wise-td" >Washing Machine</td>
                <td>1</td>
                <td>15</td>
                <td>LKR :250</td>
                <td>25</td>
                <td>LKR :450</td>
                <td>55</td>
                <td>LKR :850</td>
                <td>95</td>
                <td>LKR : 3240</td>
            </tr>

            <tr className="device-wise-tr">
                <th scope="row">5</th>
                <td className="device-wise-td" >Multi Cooker</td>
                <td>1</td>
                <td>15</td>
                <td>LKR :250</td>
                <td>25</td>
                <td>LKR :450</td>
                <td>55</td>
                <td>LKR :850</td>
                <td>95</td>
                <td>LKR : 3240</td>
            </tr>


        </tbody>
    </table>
    )
}

