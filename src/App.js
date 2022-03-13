import React, { useState, useReducer, useEffect } from "react";
import LandingPage from "./LandingPage/LandingPage";
import DashboardAdmin from "./Dashboard/DashboardAdmin";
import NewOwner from "./Dashboard/components/NewOwner.container";
import ViewOwner from "./Dashboard/components/ViewOwner.container";
import ViewReviewer from "./Dashboard/components/ViewrReviewer";
import ViewAdmin from "./Dashboard/components/ViewAdmin.container";
import SignUp from "./Login/SignUp/SignUp";
import SignIn from "./Login/SignIn/SignIn";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "setUserMapping":
      return { ...state, userMapping: action.payload };
    case "setQuestionSet":
      return { ...state, questionSets: action.payload };
  }
};
const user = "U_4";
function App() {
  const initialState = {
    userMapping: [],
    questionSets: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [questinSetNo, setQuestionSetNo] = useState("");
  const changeQuestionSet = (setNo) => {
    setQuestionSetNo(setNo);
  };
  const setMappingByDate=(data)=>{
    fetch(`https://egrc.azurewebsites.net/api/mapping/given/?user_id=${user}&month=${data.month}&year=${data.year}` ,{
      method: 'GET',
      headers: {
        email: "Sajith.K@unilever.com",
        token: 'test',
      }})
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setUserMapping", payload: data });
        if(data.length){
        setQuestionSetNo(data[0].set_no);
        }else{
          setQuestionSetNo("")
        }
      });
  }
  useEffect(() => {
    fetch(`https://egrc.azurewebsites.net/api/mapping/current/?user_id=${user}` ,{
      method: 'GET',
      headers: {
        email: "Sajith.K@unilever.com",
        token: 'test',
      }})
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "setUserMapping", payload: data });
        setQuestionSetNo(data[0].set_no);
      });
  }, []);

  useEffect(() => {
    if (questinSetNo) {
      fetch(
        `https://egrc.azurewebsites.net/api/question/setno/?set_no=${questinSetNo}`,{
          method: 'GET',
          headers: {
            email: "Sajith.K@unilever.com",
            token: 'test',
          }}
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "setQuestionSet", payload: data });
        });
    }else{
      dispatch({ type: "setQuestionSet", payload: [] });
    }
  }, [questinSetNo]);
  
  return (
    <div className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashboardAdmin userMapping={state.userMapping}/>} />
        <Route path="/dashboard/new-owner" element={<NewOwner userMapping={state.userMapping}
         questionSets={state.questionSets} changeQuestionSet={changeQuestionSet}
         setMappingByDate={setMappingByDate}/>} />
        <Route path="/dashboard/view-owner" element={<ViewOwner userMapping={state.userMapping}/>} />
        <Route path="/dashboard/view-reviewer" element={<ViewReviewer userMapping={state.userMapping}/>} />
        <Route path="/dashboard/view-admin" element={<ViewAdmin userMapping={state.userMapping}/>} />
      </Routes>
    </div>
  );
}

export default App;
