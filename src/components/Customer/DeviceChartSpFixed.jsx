import { React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceChartfixed.css";
import { Pie } from "react-chartjs-2";
import Axios from "axios";

export default function DeviceChartfixed() {
  
  const params = new URLSearchParams(window.location.search)
  const BillId  = params.get('bill_id');
  console.log("+++++"+BillId);

  const [appliance, setAppliance] = useState([]);
  const [units, setUnits] = useState([]);
  const [colors, setColors] = useState([]);

  async function getSpecialEventDeviceDetailsFixed(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      // let History = useHistory();
      console.log("call special event device detail fixed function")
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-specialEvent-details-devicewise-fixed/${ParamsUserId}`, {
          newBillId: newBillId
      }, {
          headers: {
              authorization: `Token ${token}`
          }
      })
  
      console.log(response.data.data);
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

  function getSpData(chartData) {
    var i;
    var applianceList = [];
    let unitList = [];
    let colorList = [];

    for (i = 0; i < 2; i++) {
      applianceList.push(chartData[i].appliance);
      unitList.push(chartData[i].	total_units_fixed);
      colorList.push(generateColor());
    }

    setAppliance(applianceList);
    setUnits(unitList);
    setColors(colorList);
  }
   
  useEffect( async () => {
  
    var special_event_data_fixed = await getSpecialEventDeviceDetailsFixed(BillId);
    await getSpData(special_event_data_fixed);
  },[]);

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
    </div>
    
  );
}
