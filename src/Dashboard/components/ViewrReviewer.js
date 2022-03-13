import React, { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ViewReviewer(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="main-container">
      <TopNav userMapping={props.userMapping}/>
      <main>
        <div className="main__container">
          <div className="widget-box-texthead">Control Filter</div>
          <div className="widget-box-filter">
            <div className="month-filter-input-box">
              <DatePicker
                placeholderText="Select Month"
                dateFormat="MMM/yyyy"
                showMonthYearPicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="btn-filter">
              <i className="fa fa-search" /> Filter
            </div>
          </div>
          <div className="main__cards">
            <div className="card-compo">
              <i
                className="fa fa-tachometer fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 1</p>
                <span className="font-bold text-title">20</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-hdd-o fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 2</p>
                <span className="font-bold text-title">101</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-th fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 3</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-thumbs-up fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 4</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-thumbs-up fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 5</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-calendar fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 6</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-info-circle fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 7</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-compo">
              <i
                className="fa fa-info-circle fa-2x text-lightblue"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 8</p>
                <span className="font-bold text-title">Warning⚠️</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- SideNav Starts Here --> */}
      <div id="sidebar">
        <SideNav />
      </div>
    </div>
  );
}
