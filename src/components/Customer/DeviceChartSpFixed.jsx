import { React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceChartfixed.css";
import { Pie, Bar } from "react-chartjs-2";
import Axios from "axios";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function DeviceChartfixed() {
  
  const params = new URLSearchParams(window.location.search)
  const BillId  = params.get('bill_id');

  const [appliance, setAppliance] = useState([]);
  const [units, setUnits] = useState([]);
  const [colors, setColors] = useState([]);
  const [max,setMax] = useState(0);
  const [maxApp,setMaxApp] = useState("");

  async function getSpecialEventDeviceDetailsFixed(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
    
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-specialEvent-details-devicewise-fixed/${ParamsUserId}`, {
          newBillId: newBillId
      }, {
          headers: {
              authorization: `Token ${token}`
          }
      })
  
      return response.data.data;
  
  }
  function generateColor() {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  async function getSpData(chartData) {
    var i;
    var applianceList = [];
    let unitList = [];
    let colorList = [];

    for (i = 0; i < chartData.length; i++) {
      applianceList.push(chartData[i].appliance);
      unitList.push(chartData[i].	total_units_fixed);
      colorList.push(generateColor());
    }
    
    var maxunit = chartData[0].total_units_fixed;

    for(i=0;i< chartData.length; i++){
      if(chartData[i].total_units_fixed>maxunit){
        maxunit = chartData[i].total_units_fixed;
      }

    }

    await setAppliance(applianceList);
    await setUnits(unitList);
    await setColors(colorList);
    await setMax(maxunit);
  }

  function getMaxAppliace(chartData,max){
   
    var max_appliance;
    for(var x=0; x< chartData.length; x++ ){
      if(chartData[x].total_units_fixed==max){
        max_appliance = chartData[x].appliance;
      }
    }
    setMaxApp(max_appliance);
  }

   
  useEffect( async () => {
  
    var special_event_data_fixed = await getSpecialEventDeviceDetailsFixed(BillId);
    await getSpData(special_event_data_fixed);
    await getMaxAppliace(special_event_data_fixed,max);
  },[]);

 
  return (
    <div>
      {/* {`/special-event-fixed?bill_id=${newBillId}`} */}

<Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
  <Link underline="hover" color="blue" href="/special-event">
    Special Event
  </Link>

  <Link underline="hover" color="blue" href={`/special-fixed-device-wise?bill_id=${BillId}`}>
  {/* {`/special-fixed-device-wise?bill_id=${BillId}`} */}
    Device Wise Usage
  </Link>
 
  <Typography color="text.primary">Device Wise Chart Usage</Typography>
</Breadcrumbs>


      <h2 className="MainTitle-fixed">
        <b>DEVICE WISE USAGE - FIXED</b>
      </h2>
      <div className="row row-fixed justify-content-md-center">       
        <div className="col-sm-6 justify-content-md-center">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title text-center">Unit Usage - Device Wise (kWh)</h6>
              <div className="col-sm-12">
                <div className="card chart-fixed">
                  <div className="card-body">

                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: appliance,
                          datasets: [
                            {
                              data:units,
                              backgroundColor: colors,
                              hoverOffset: 4,
                            },
                          ],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-fixed justify-content-md-center">
        <div className="col-sm-6 justify-content-md-center">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title text-center">
                Unit Usage - Device Wise (kWh)
              </h6>
              <div className="col-sm-12">
                <div className="card chart-fixed">
                  <div className="card-body">
                    <div className="chart-devicewise">
                      <Bar
                        data={{
                          labels: appliance,
                          datasets: [
                            {
                              axis: 'y',
                              label: "Maximum Usage",
                              data: units,
                              backgroundColor: colors,
                              hoverOffset: 4,
                            },
                          ],
                        }}
                        
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
