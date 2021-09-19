import { React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceCharttou.css";
import { Pie } from "react-chartjs-2";
import Axios from "axios";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function DeviceChartSpTOU() {
  const params = new URLSearchParams(window.location.search)
  const BillId  = params.get('bill_id');

  const [appliance, setAppliance] = useState([]);
  const [colors1, setColors1] = useState([]);
  const [colors2, setColors2] = useState([]);
  const [peakUnits,setPeakUnits] = useState([]);
  const [offPeakUnits,setOffPeakUnits] = useState([]);
  const [dayUnits,setDayUnits] = useState([]);
  const [peakCost,setPeakCost] = useState([]);
  const [offPeakCost,setOffPeakCost] = useState([]);
  const [dayCost,setDayCost] = useState([]);
  const [totalCost,setTotalCost] = useState([]);
  const [totalUnits,setTotalUnits] = useState([]);
  
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

  function generateColor1() {
    var symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function generateColor2() {
    var symbols, color;
    symbols = "ABCDEF0123456789";
    color = "#";

    for (var i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getSpData(chartData) {
    var i;
    var applianceList = [];
    let colorList1 = [];
    let colorList2 = [];
    var peakUnitList = [];
    var offPeakUnitList = [];
    var dayUnitList = [];
    var peakCostList = [];
    var offPeakCostList = [];
    var dayCostList = [];
    var totalCost = [];
    var totalUnit = [];

    for (i = 0; i < chartData.length ; i++) {
      applianceList.push(chartData[i].appliance);
      colorList1.push(generateColor1());
      colorList2.push(generateColor2());
      peakUnitList.push(chartData[i].units_peak_time);
      offPeakUnitList.push(chartData[i].units_off_peak_time);
      dayUnitList.push(chartData[i].units_day_time);
      peakCostList.push(chartData[i].cost_peak_time);
      offPeakCostList.push(chartData[i].cost_off_peak_time);
      dayCostList.push(chartData[i].cost_day_time);
      totalCost.push(chartData[i].total_cost_TOU);
      totalUnit.push(chartData[i].total_units);
    }

    setAppliance(applianceList);
    setColors1(colorList1);
    setColors2(colorList2);
    setPeakUnits(peakUnitList);
    setOffPeakUnits(offPeakUnitList);
    setDayUnits(dayUnitList);
    setPeakCost(peakCostList);
    setOffPeakCost(offPeakCostList);
    setDayCost(dayCostList);
    setTotalCost(totalCost);
    setTotalUnits(totalUnit);
  }

   
  useEffect( async () => {
    var special_event_data_tou = await getSpecialEventDeviceDetailsTOU(BillId);
    await getSpData(special_event_data_tou);

  },[]);
  return (
    <div>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
  <Link underline="hover" color="blue" href="/special-event">
    Special Event
  </Link>

  <Link underline="hover" color="blue" href={`/special-tou-device-wise?bill_id=${BillId}`}>
  {/* {`/special-tou-device-wise?bill_id=${BillId}`} */}
    Device Wise Usage
  </Link>
 
  <Typography color="text.primary">Device Wise Chart Usage</Typography>
</Breadcrumbs>
      <h4 className="MainTitle-tou text-center" style={{marginBottom: '2rem'}}> Device Wise Usage - TOU </h4>
      <div class="row row-tou">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">Total Cost Usage (LKR/month)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body chartbody">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: appliance,
                          datasets: [
                            {
                              data: totalCost,
                              backgroundColor: colors1,
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
              <h6 class="card-title text-center">Total Unit Usage (kWh)</h6>
              <div class="col-sm-12">
                <div class="card chart-tou">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: appliance,
                          datasets: [
                            {
                              data: totalUnits,
                              backgroundColor: colors2,
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
                          labels: appliance,
                          datasets: [
                            {
                              data: peakCost,
                              backgroundColor: colors1,
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
                          labels: appliance,
                          datasets: [
                            {
                              data: peakUnits,
                              backgroundColor: colors2,
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
                          labels: appliance,
                          datasets: [
                            {
                              data: offPeakCost,
                              backgroundColor:colors1,
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
                          labels: appliance,
                          datasets: [
                            {
                              data: offPeakUnits,
                              backgroundColor: colors2,
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
                          labels: appliance,
                          datasets: [
                            {
                              data: dayCost,
                              backgroundColor: colors1,
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
                          labels:appliance,
                          datasets: [
                            {
                              data: dayUnits,
                              backgroundColor: colors2,
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
