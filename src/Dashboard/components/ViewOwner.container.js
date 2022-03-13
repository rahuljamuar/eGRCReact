import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import DashboradCards from "../../Components/DashboardCards";
import { Select, MenuItem } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Style/View.css";
import ViewQuestionCard from "../../Components/ViewQuestionCard";
import ControlInfo from "../../Components/ControlInfo";

export default function ViewOwner(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [countryList, setCountryList] = useState([]);
  const [controlList, setControlList] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedControl, setSelectedControl] = useState();
  const [selectedMapping, setSelectedMapping] = useState();
  const [showDate,setShowDate]=useState(new Date());


  const selectStyle = {
    width: "200px",
    backgroundColor: "rgb(231, 223, 255)",
    borderRadius: "50px",
    padding: "5px 0px 5px 14px",
  };

  useEffect(() => {
    fetch(
      `https://egrc.azurewebsites.net/api/utility/owner_dropdown/?user_id=${props.userMapping[0].user_id}`,{
        method: 'GET',
        headers: {
          email: "Sajith.K@unilever.com",
          token: 'test',
        }}
    )
      .then((data) => data.json())
      .then((data) => {
        setCountryList(data.country);
        setControlList(data.control);
        setStatusList(data.status);
      }).catch(e=>console.log(e));
  }, []);

  const filterDataList=()=>{
    setShowDate(startDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    props.setMappingByDate({"month":monthNames[startDate.getMonth()],"year":startDate.getFullYear()})
  }

  const Tabs = ({ color }) => {
    return (
      <>
        <div className="flex flex-wrap">
        <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-1 pb-3 pl-0 flex-row"
              role="tablist"
            >
              {props.userMapping&&props.userMapping.map((data)=>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (true
                    ? "text-gray-600 bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  props.changeQuestionSet(data.set_no);
                  setSelectedMapping(data);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {data.control_id}
              </a>
            </li>)}
            </ul>
            {props.questionSets &&props.questionSets.length&&<>
            <ControlInfo mappingData={props.userMapping} selectedMapping={selectedMapping}/>
            <ViewQuestionCard questionSets={props.questionSets}/>
            </>}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="main-container">
      <TopNav userMapping={props.userMapping}/>
      <main>
        <div className="main__container">
        <div className="">Control Filter</div>
          <div>
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
              <div className="country-filter-input-box col-xs-4">
                <Select
                  style={selectStyle}
                  value={selectedCountry}
                  defaultValue="Country"
                  label="Select Country"
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {!!countryList?.length &&
                    countryList.map((country) => (
                      <MenuItem
                        key={country.country_id}
                        value={country.country_name}
                      >
                        {country.country_name}
                      </MenuItem>
                    ))}
                </Select>
              </div>
              <div className="country-filter-input-box col-xs-4">
                <Select
                  style={selectStyle}
                  value={selectedControl}
                  defaultValue="Control"
                  placeholder="Control"
                  onChange={(e) => setSelectedControl(e.target.value)}
                >
                  {!!controlList?.length &&
                    controlList.map((value) => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                </Select>
              </div>
              <div className="country-filter-input-box">
                <Select
                  style={selectStyle}
                  value={selectedStatus}
                  defaultValue="Status"
                  placeholder="Status"
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {!!statusList?.length &&
                    statusList.map((value) => (
                      <MenuItem key={value.status_id} value={value.control_owner_desc}>
                        {value.control_owner_desc}
                      </MenuItem>
                    ))}
                </Select>
              </div>
              <div className="btn-filter" onClick={()=>filterDataList()}>
                <i className="fa fa-search" /> Filter
              </div>
            </div>
            <DashboradCards />
            <div className="w-full">
              <div className="row-fluid">
                <div className="widget-box">
                  <div className="widget-title bg_lg">
                    <span className="icon">
                      <i className="fa fa-signal"></i>
                    </span>
                    <h5>List of Controls for {startDate&& showDate ?showDate.toString().split(" ")[1]:""} {showDate?showDate.toString().split(" ")[3]:""} </h5>
                  </div>
                </div>
              </div>

              {/* <!--End-Chart-box--> */}
            </div>
            <div>
              <Tabs color="pink" />
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
