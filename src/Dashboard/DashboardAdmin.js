import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import Dashboard from "./components/Dashboard";
import "./DashboardAdmin.css";

export default function DashboardAdmin(props) {
  return (
    <div className="main-container">
      <TopNav userMapping={props.userMapping}/>
      <main>
        <div className="main__container">
          <Dashboard />
        </div>
      </main>

      {/* <!-- SideNav Starts Here --> */}
      <div id="sidebar">
        <SideNav />
      </div>
    </div>
  );
}
