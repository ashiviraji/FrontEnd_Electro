import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link_ from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


import DeviceWiseFixed   from "../../components/Customer/DeviceWiseFixed";



export default function DeviceWiseFixedUsageSeprate() {

  const params = new URLSearchParams(window.location.search)
  const calculatedBillId  = params.get('bill_id');
  
  return( 
  <div className="device-wise-usage">
    <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
        <Link_ underline="hover" color="blue" href="/my-bill-plans">
          My Bill Plans
        </Link_ >
        <Link_ underline="hover" color="blue" href={`/bill-comparison?bill_id=${calculatedBillId}`}>
          More Details
        </Link_ >
        <Typography color="text.primary">Suggestions</Typography>
      </Breadcrumbs>
  <div className="title-heading">
     <label className="tou-headline"> <b>FIXED MODEL USAGE</b> </label>
      
  </div>
 
    <DeviceWiseFixed/>
  
         </div>
  );
        
        
   
  }
  
  
 


