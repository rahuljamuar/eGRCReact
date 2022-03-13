import React from "react";
import Chart from "react-apexcharts";
import DashboradCards from "../../Components/DashboardCards";
import StatsReportCard from "../../Components/StatsReportCards";
import {series,options} from '../../DashboardChartPlots'
function dashboard() {
  

  return (
    <div>
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        <img src="assets/hello.svg" alt="" />
        <div className="main__greeting">
          <h1>Hello EGRC</h1>
          <p>Welcome to your admin dashboard</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}
      <DashboradCards/>
      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Current Month Progress</h1>
              <p>Cupertino, California, USA</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <div id="apex1">
            <Chart options={options} series={series} type="bar" height="365" />
          </div>
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h1>Stats Reports</h1>
              <p>Cupertino, California, USA</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <StatsReportCard/>
        </div>
      </div>
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  );
}

export default dashboard;
