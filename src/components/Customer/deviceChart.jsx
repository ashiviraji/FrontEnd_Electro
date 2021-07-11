import React from "react";
import "../../assets/css/Customer/deviceChart.css";
import { Pie } from "react-chartjs-2";

export default function DeviceChart() {
  return (
    <div>
      <h4 className="chartMainTitle text-center"> Device Wise Usage - Fixed Model </h4>
    <div class="devicewiseChart">
      <h5 class="card-title chartTitle1">Cost Usage - Device Wise (LKR/month)</h5>
      <div class="col-sm-8">
        <div class="card cardChart">
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
      <h5 class="card-title chartTitle2">Unit Usage - Device Wise (kWh)</h5>
      <div class="col-sm-8">
        <div class="card cardChart">
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
                      data: [100, 25, 170, 290, 120],
                      backgroundColor: [
                        "#FF3352",
                        "#D933FF",
                        "#33FFBD",
                        "#9BFF33",
                        "#FFDC33",
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
  );
}
