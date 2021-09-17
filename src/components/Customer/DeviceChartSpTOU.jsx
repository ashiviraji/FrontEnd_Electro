import React from "react";
import "../../assets/css/Customer/deviceCharttou.css";
import { Pie } from "react-chartjs-2";

export default function DeviceChart() {
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
