import React from "react";
import "../styles/chart.css";
import { Pie } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <div className="chart--container">
        <div className="chart--elem--container">
          <div className="chart--heading--container">
            <div className="chart--subtitle--wrapper">
              <h4 className="chart--subtitle">Tokenomics</h4>
            </div>
            <h2 className="title">
              The GCC Token <span className="word">Distribution</span>
            </h2>
          </div>
          <div className="chart--button--container">
            <button className="btn-1">Distribution</button>
            <button className="btn-2">Funding allocation</button>
          </div>
          <div className="container pie-chart-container">
            <div className="row align-items-start">
              <div className="col-md-4 p-5">
                <div className="div1">
                  <div className="ova-progress">
                    <p className="ctyl-progress-title">Advisory board : 25%</p>
                    <div className="ova-percent-view-1">
                      <div
                        className="ova-percent-1"
                        data-percent="25"
                        style={{ width: "25%" }}
                      ></div>
                      <span className="percentage" data-show-percent="">
                        25%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="div2">
                  <div className="ova-progress">
                    <p className="ctyl-progress-title">Development : 10%</p>
                    <div className="ova-percent-view-2">
                      <div
                        className="ova-percent-2"
                        data-percent="25"
                        style={{ width: "10%" }}
                      ></div>
                      <span className="percentage" data-show-percent="">
                        10%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="div3">
                  <div className="ova-progress">
                    <p className="ctyl-progress-title">Bounties : 10%</p>
                    <div className="ova-percent-view-3">
                      <div
                        className="ova-percent-3"
                        data-percent="25"
                        style={{ width: "10%" }}
                      ></div>
                      <span className="percentage" data-show-percent="">
                        10%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 p-5">
                <div className="pie-chart">
                    Pie chart image will be Here
                </div>
              </div>

              <div className="col-md-4 p-5">
                <div className="div-right-1">
                  <div class="ova-progress-right">
                    <p class="ctyl-progress-title-right">Reserve: 10%</p>
                    <div class="ova-percent-view-right-1">
                      <div
                        class="ova-percent-right-1"
                        data-percent="10"
                        style={{ width: "10%" }}
                      ></div>
                      <span class="percentage-right" data-show-percent="">
                        10%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="div-right-2">
                  <div class="ova-progress-right">
                    <p class="ctyl-progress-title-right">Presale: 20%</p>
                    <div class="ova-percent-view-right-2">
                      <div
                        class="ova-percent-right-2"
                        data-percent="10"
                        style={{ width: "20%" }}
                      ></div>
                      <span class="percentage-right" data-show-percent="">
                        20%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="div-right-3">
                  <div class="ova-progress-right">
                    <p class="ctyl-progress-title-right">Token Sale: 25%</p>
                    <div class="ova-percent-view-right-3">
                      <div
                        class="ova-percent-right-3"
                        data-percent="10"
                        style={{ width: "25%" }}
                      ></div>
                      <span class="percentage-right" data-show-percent="">
                        25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
