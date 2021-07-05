import React from "react";
import { Card } from "react-bootstrap";
import '../../assets/css/CEBEngineer/updateUnitCharge.css';
import {MdNotificationsActive} from 'react-icons/md'; 



export default function updateUnitCharges() {
      return(

        <div>
            <div id="title-heading">
            <label>FIXED BILLING MODEL (APPLICABLE FOR 60+ UNITS)</label>
            </div>

     <div id="menu-outer">
        <div class="table">
            <ul id="horizontal-list">
            <li >Category</li>
           <li id="title-unit-charge">Unit Charge(LKR/kWh)</li>
           <li id="title-fixed-charge">Fixed Charge(LKR/month)</li>
             
            </ul>
        </div>
        </div>
        <Card>
        <Card.Body>
        <ul id="horizontal-list-inside">
            <li><label className="label-list-inside" id="inside-category" >00-60</label></li>
           <li><label className="label-list-inside" id="inside-unitCharge">7.85</label></li>
           <li><label className="label-list-update inside-update" >UPDATE&nbsp;<MdNotificationsActive style={{width:'1.2rem',height:'1.2rem'}}></MdNotificationsActive></label></li>
           <li><label className="label-list-inside" id="inside-fixedCharge">N/A</label></li>
           <li><label className="label-list-update inside-update">UPDATE</label></li>
             
            </ul>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
        <ul id="horizontal-list-inside">
            <li><label className="label-list-inside" id="inside-category" >61-90</label></li>
           <li><label className="label-list-inside" id="inside-unitCharge">10.00</label></li>
           <li><label className="label-list-update inside-update" >UPDATE&nbsp;<MdNotificationsActive style={{width:'1.2rem',height:'1.2rem'}}></MdNotificationsActive></label></li>
           <li><label className="label-list-inside" id="inside-fixedCharge">90.00</label></li>
           <li><label className="label-list-update inside-update">UPDATE</label></li>
             
            </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <ul id="horizontal-list-inside">
            <li><label className="label-list-inside" id="inside-category" >91-120</label></li>
           <li><label className="label-list-inside" id="inside-unitCharge">27.75</label></li>
           <li><label className="label-list-update inside-update" >UPDATE</label></li>
           <li><label className="label-list-inside" id="inside-fixedCharge">480.00</label></li>
           <li><label className="label-list-update inside-update">UPDATE</label></li>
             
            </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <ul id="horizontal-list-inside">
            <li><label className="label-list-inside" id="inside-category" >121-180</label></li>
           <li><label className="label-list-inside" id="inside-unitCharge">32</label></li>
           <li><label className="label-list-update inside-update" >UPDATE</label></li>
           <li><label className="label-list-inside" id="inside-fixedCharge">480.00</label></li>
           <li><label className="label-list-update inside-update">UPDATE</label></li>
             
            </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <ul id="horizontal-list-inside">
            <li><label className="label-list-inside" id="inside-category" > {'>'} 180</label></li>
           <li><label className="label-list-inside" id="inside-unitCharge">45.00</label></li>
           <li><label className="label-list-update inside-update" >UPDATE</label></li>
           <li><label className="label-list-inside" id="inside-fixedCharge">540.00</label></li>
           <li><label className="label-list-update inside-update">UPDATE&nbsp;<MdNotificationsActive style={{width:'1.2rem',height:'1.2rem'}}></MdNotificationsActive></label></li>
             
            </ul>
        </Card.Body>
      </Card>
      </div>
      );

}