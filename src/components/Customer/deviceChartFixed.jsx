import { React, useState, useEffect } from "react";
import "../../assets/css/Customer/deviceChartfixed.css";
import { Pie, Bar } from "react-chartjs-2";
import Axios from "axios";

export default function DeviceChartfixed() {
  const params = new URLSearchParams(window.location.search);
  const calculatedBillId = params.get("bill_id");

  //const [chartData,setChartData] = useState([]);
  const [appliance, setAppliance] = useState([]);
  const [units, setUnits] = useState([]);
  const [colors, setColors] = useState([]);
  const [max,setMax] = useState(0);
  const [maxApp,setMaxApp] = useState("");

  async function getDeviceDetailsFixed(newBillId) {
    var ParamsUserId = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      ).userId;

    var token = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      ).token;

    const response = await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/get-device-wise-usage-fixed-main/${ParamsUserId}`,
      {
        newBillId: newBillId,
      },
      {
        headers: {
          authorization: `Token ${token}`,
        },
      }
    );

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

  async function getData(chartData) {
    var i;
    var applianceList = [];
    let unitList = [];
    let colorList = [];

    for (i = 0; i < chartData.length; i++) {
      applianceList.push(chartData[i].appliance);
      unitList.push(chartData[i].total_units);
      colorList.push(generateColor());
    }

    var maxunit = chartData[0].total_units

    for(i=0;i< chartData.length; i++){
      if(chartData[i].total_units>maxunit){
        maxunit = chartData[i].total_units;
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
      if(chartData[x].total_units==max){
        max_appliance = chartData[x].appliance;
      }
    }
    // return max_appliance;
    setMaxApp(max_appliance);
    return max_appliance;
  }

  useEffect(async () => {
    var devices_data_fixed = await getDeviceDetailsFixed(calculatedBillId);
    await getData(devices_data_fixed);
    const maxAppl = await getMaxAppliace(devices_data_fixed,max);
    setMaxApp(maxAppl);
    console.log(maxAppl);

  }, []);

  return (
    <div>
      <h4 className="MainTitle-fixed text-center">DEVICE WISE USAGE - FIXED</h4>
      <div class="row row-fixed">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">
                Unit Usage - Device Wise (kWh)
              </h6>
              <div class="col-sm-12">
                <div class="card chart-fixed">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Pie
                        data={{
                          labels: appliance,
                          datasets: [
                            {
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
      <div class="row row-fixed">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center">
                Unit Usage - Device Wise (kWh)
              </h6>
              <div class="col-sm-12">
                <div class="card chart-fixed">
                  <div class="card-body">
                    <div className="chart-devicewise">
                      <Bar
                        data={{
                          labels: appliance,
                          datasets: [
                            {
                              label: "Max Usage",
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
