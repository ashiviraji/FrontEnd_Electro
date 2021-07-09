import React from "react";
import "../../assets/css/Customer/deviceChart.css";
import { Pie } from "react-chartjs-2";

export default function deviceChart() {
  return (
    <div class="row devicewiseChart">
      <div class="col-sm-6">
        <div class="card cardChart">
          <div class="card-body chartbody">
            <h5 class="card-title chartTitle text-center">Cost Usage - Device Wise (LKR/month)</h5>
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
                      data: [300, 50, 100, 233, 77],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
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
      <div class="col-sm-6">
        <div class="card cardChart">
          <div class="card-body chartbody">
            <h5 class="card-title chartTitle text-center">Unit Usage - Device Wise (kWh)</h5>
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
                      data: [300, 50, 100, 233, 77],
                      backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
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
  );
}
