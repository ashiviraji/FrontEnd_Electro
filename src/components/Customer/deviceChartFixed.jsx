import React from "react";
import "../../assets/css/Customer/deviceChartfixed.css";
import { Pie } from "react-chartjs-2";

export default function DeviceChartfixed() {
  return (
    <div>
      <h4 className="MainTitle-fixed text-center">
        DEVICE WISE USAGE - FIXED
      </h4>
      <div class="row row-fixed">       
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h6 class="card-title text-center"> Cost Usage - Device Wise (LKR/month)</h6>
              <div class="col-sm-12">
                <div class="card chart-fixed">
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
                            "Television",
                            "Rice Cooker",
                            "Radio",
                            "Washing Machine",
                            "Multi Cooker",
                          ],
                          datasets: [
                            {
                              data: [180, 200, 60, 800, 320],
                              backgroundColor: [
                                "#C7FF33",
                                "#f5ef42",
                                "#42f5ef",
                                "#f5424e",
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
