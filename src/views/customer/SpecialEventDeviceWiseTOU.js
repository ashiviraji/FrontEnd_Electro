import React,{useState}from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import SpecialEventTOU from "../../components/Customer/SpecialEventTOU";

export default function SpecialEventDeviceUsage() {

  
  const[displayModel,setModel]=useState(
    {
      isAgree : false,
      model:"DeviceWiseFixed1",

    }
  )

  return( 
  <div className="device-wise-usage">
    <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
  <Link underline="hover" color="inherit" href="/special-event">
    Special Event
  </Link>
 
  <Typography color="text.primary">Device Wise Usage</Typography>
</Breadcrumbs>

  <div className="title-heading">
     <label className="tou-headline">DEVICE WISE USAGE</label>
        
        
      
  </div>
  
    <SpecialEventTOU/>
</div>
  );
        
        
   
  }
  
  
 


