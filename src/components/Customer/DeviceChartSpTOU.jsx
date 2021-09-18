import { React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceCharttou.css";
import { Pie } from "react-chartjs-2";
import Axios from "axios";

export default function DeviceChartSpTOU() {
  const params = new URLSearchParams(window.location.search)
  const BillId  = params.get('bill_id');

  const [appliance, setAppliance] = useState([]);
  const [colors, setColors] = useState([]);
  const [peakUnits,setPeakUnits] = useState([]);
  const [offPeakUnits,setOffPeakUnits] = useState([]);
  const [dayUnits,setDayUnits] = useState([]);
  const [peakCost,setPeakCost] = useState([]);
  const [offPeakCost,setOffPeakCost] = useState([]);
  const [dayCost,setDayCost] = useState([]);
  
  async function getSpecialEventDeviceDetailsTOU(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      // let History = useHistory();
      console.log("call device detail tou function")
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-specialEvent-details-devicewise-tou/${ParamsUserId}`, {
          newBillId: newBillId
      }, {
          headers: {
              authorization: `Token ${token}`
          }
      })
  
      console.log(response);
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
    let colorList = [];
    var peakUnitList = [];
    var offPeakUnitList = [];
    var dayUnitList = [];
    var peakCostList = [];
    var offPeakCostList = [];
    var dayCostList = [];

    for (i = 0; i < chartData.length ; i++) {
      applianceList.push(chartData[i].appliance);
      colorList.push(generateColor());
      peakUnitList.push(chartData[i].units_peak_time);
      offPeakUnitList.push(chartData[i].units_off_peak_time);
      dayUnitList.push(chartData[i].units_day_time);
      peakCostList.push(chartData[i].cost_peak_time);
      offPeakCostList.push(chartData[i].cost_off_peak_time);
      dayCostList.push(chartData[i].cost_day_time);
    }

    setAppliance(applianceList);
    setColors(colorList);
    setPeakUnits(peakUnitList);
    setOffPeakUnits(offPeakUnitList);
    setDayUnits(dayUnitList);
    setPeakCost(peakCostList);
    setOffPeakCost(offPeakCostList);
    setDayCost(dayCostList);
  }

   
  useEffect( async () => {
    var special_event_data_tou = await getSpecialEventDeviceDetailsTOU(BillId);
    await getSpData(special_event_data_tou);

  },[]);
  return (
    <div>
      <h4 className="MainTitle-tou text-center"> Device Wise Usage - TOU </h4>
      <h5 className="SubTitle-tou"> Peak Time </h5>
      <div class="row row-tou">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Cost Usage (LKR/month)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body chartbody">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Unit Usage (kWh)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
      <h5 className="SubTitle-tou"> Off Peak Time </h5>
      <div class="row row-tou">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Cost Usage (LKR/month)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body chartbody">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Unit Usage (kWh)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
      <h5 className="SubTitle-tou"> Day Time </h5>
      <div class="row row-tou">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Cost Usage (LKR/month)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body chartbody">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Unit Usage (kWh)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: [
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [1340, 500, 6100, 9700, 4200],
                              backgroundColor: [
                                "#C7FF33",
                                "#33BDFF",
                                "#FFE633",
                                "#DC33FF",
                                "#33FFBD",
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
