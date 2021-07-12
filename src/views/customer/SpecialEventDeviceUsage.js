import React,{useState}from 'react';


import SpecialEventFixed   from "../../components/Customer/SpecialEventFixed";
import SpecialEventTOU from "../../components/Customer/SpecialEventTOU";






export default function SpecialEventDeviceUsage() {

  
  const[displayModel,setModel]=useState(
    {
      isAgree : false,
      model:"DeviceWiseFixed1",

    }
  )

  
  const handleChange = event =>{
    const target=event.target
    const name= target.name
    const value=target.value
    setModel({
      ...displayModel,
      [name]:value
    })
  }
  console.log(displayModel);

  
  return( 
  <div className="device-wise-usage">
  <div className="title-heading">
     <label className="tou-headline">DEVICE WISE USAGE</label>
        <div style={{fontSize:"20px",marginTop:"3%"}}>
            <input type="radio" style={{marginLeft:"6%"}} value="DeviceWiseFixed1" name="model"  onChange={handleChange} checked={displayModel.model==="DeviceWiseFixed1"}/>
            <b style={{color:"black",marginRight:"4%"}}>&nbsp;&nbsp;Fixed Model</b>
            <input type="radio" style={{marginLeft:"6%"}} value="DeviceWiseTOU" name="model" onChange={handleChange} checked={displayModel.model==="DeviceWiseTOU"}/>
            <b style={{color:"black",marginRight:"4%"}}>&nbsp;&nbsp;Time Of Use Model</b>

        </div>
        
      
  </div>
  {(displayModel.model === "DeviceWiseFixed1")?
    <SpecialEventFixed/>: <SpecialEventTOU/>
    }
  
         </div>
  );
        
        
   
  }
  
  
 


