import React, { useEffect, useState} from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QuestionCard from "../../Components/QuestionCard";
import ControlInfo from "../../Components/ControlInfo";
import {
  Grid,
  styled,
  Paper,
  Slide
} from "@material-ui/core";


export default function NewOwner(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedMapping, setSelectedMapping]=useState(props.userMapping[0]);
  const [showNoControl,setShowControl]=useState(false);
  const [showDate,setShowDate]=useState(new Date());

  useEffect(()=>{
      setShowControl(true);
  },[])
  

  const filterDataList=()=>{
    setShowDate(startDate);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
    props.setMappingByDate({"month":monthNames[startDate.getMonth()],"year":startDate.getFullYear()})
  }
  
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.primary,
    padding: "10px 20px 20px 10px",
  }));
  

  const Tabs = ({ color }) => {
    return (
      <>
        <div className="flex flex-wrap">
          {(props.userMapping &&props.userMapping.length !=0)?<div className="w-full">
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
            {props.questionSets.length && <>
            <ControlInfo mappingData={props.userMapping} selectedMapping={selectedMapping}/>
            <QuestionCard questionSets={props.questionSets} selectedMapping={selectedMapping}/>
            </>}
          </div>:<Slide direction={"up"} in={showNoControl}  timeout={1000}>
            <Grid container spacing={2} >
      <Grid item xs={12} > <Item
            elevation={20}
            style={{ fontSize: "18px" }}
            
          >
           There is no further control to perform.
          </Item></Grid></Grid></Slide>}
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
            <div className="btn-filter" onClick={()=>filterDataList()}>
              <i className="fa fa-search" /> Filter
            </div>
          </div>

          <div className="main__cards">
            <div className="card-compo">
              <i
                className="fa fa-tachometer fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 1</p>
                <span className="font-bold text-title">20</span>
              </div>
            </div>

            <div className="card-1">
              <i
                className="fa fa-hdd-o fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 2</p>
                <span className="font-bold text-title">101</span>
              </div>
            </div>

            <div className="card-2">
              <i className="fa fa-th fa-2x text-white" aria-hidden="true"></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 3</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-3">
              <i
                className="fa fa-thumbs-up fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 4</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-4">
              <i
                className="fa fa-thumbs-up fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 5</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-5">
              <i
                className="fa fa-calendar fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 6</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-6">
              <i
                className="fa fa-info-circle fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 7</p>
                <span className="font-bold text-title">0</span>
              </div>
            </div>

            <div className="card-7">
              <i
                className="fa fa-info-circle fa-2x text-white"
                aria-hidden="true"
              ></i>
              <div className="card_inner">
                <p className="text-primary-p">Item 8</p>
                <span className="font-bold text-title">Warning⚠️</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="row-fluid">
              <div className="widget-box">
                <div className="widget-title bg_lg">
                  <span className="icon">
                    <i className="fa fa-signal"></i>
                  </span>
                  <h5>List of Controls for {startDate&& showDate ?showDate.toString().split(" ")[1]:""} {showDate?showDate.toString().split(" ")[3]:""} </h5>
                </div>
                <Tabs color="pink" />
              </div>
            </div>

            {/* <!--End-Chart-box--> */}
          </div>
          <div>
            
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