import React from 'react';


import TOUDeviceWise  from "../../components/Customer/TOUDeviceWiseUsage";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../assets/css/breadcrumb.css"


export default function DeviceWiseFixedUsageSeprate() {
  
  return( 
  <div className="device-wise-usage">
    <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/manage-bill">Manage Bill</Breadcrumb.Item>
        <Breadcrumb.Item href="/bill-comparison">Bill Comparison</Breadcrumb.Item>
        <Breadcrumb.Item active>TOU Usage</Breadcrumb.Item>
      </Breadcrumb>
  <div className="title-heading">
     <label className="tou-headline">TIME OF USE USAGE</label>
      
  </div>
 
    <TOUDeviceWise/>
  
         </div>
  );
        
        
   
  }
  
  
 


