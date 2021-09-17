import {React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceChartfixed.css";
import { Pie } from "react-chartjs-2";
import Axios from 'axios';

export default function DeviceChartfixed() {
  const params = new URLSearchParams(window.location.search)
  const calculatedBillId  = params.get('bill_id');

  console.log("________________"+calculatedBillId)

  const [chartData,setChartData] = useState([]);


  async function getDeviceDetailsFixed(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      // let History = useHistory();
      console.log("call device detail fixed function")
      console.log(ParamsUserId);
      console.log(newBillId);
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-device-wise-usage-fixed-main/${ParamsUserId}`, {
          newBillId: newBillId
      }, {
          headers: {
              authorization: `Token ${token}`
          }
      })
  
      console.log(response.data.data);
      console.log("****"+response.data.data[0].appliance);
      return response.data.data;
  
  }
  
  
    useEffect( async () => {
  
      var devices_data_fixed = await getDeviceDetailsFixed(calculatedBillId);
      setChartData(devices_data_fixed);
    },[]);

    var i;
    var applianceList = new Array(chartData.length);    
    
    for(i=0;i<chartData.length;i++){
      applianceList[i] = chartData[i].appliance;
    }

    var i;
    var unitList = new Array(chartData.length);    
    
    for(i=0;i<chartData.length;i++){
      unitList[i] = chartData[i].total_units;
    }

    console.log("++++++++++++++");

    var array = ["abc","def"];
    console.log(typeof array);
    console.log(typeof applianceList);

    console.log("TESTING");
    console.log(array);
    console.log(applianceList);

  return (
    <div>
      <h4 className="MainTitle-fixed text-center">
        DEVICE WISE USAGE - FIXED
      </h4>
      <div class="row row-fixed">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Unit Usage - Device Wise (kWh)</h6>
              <div class="col-sm-12">
                <div class="card chart-fixed">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            // chartData[0].appliance,
                            "ABC",
                            "Rice Cooker",
                          ],
                          datasets: [
                            {
                              // data: {unitList},
                              data: [123,23],
                              backgroundColor: [
                                "#C7FF33",
                                "#f5ef42",
                              ],
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
