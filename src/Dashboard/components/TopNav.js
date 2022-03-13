import React from "react";

function TopNav(props) {
  return (
    <nav className="navbar">
      <div className="navbar__left flex">
        <a className="" href="#">
          Welcome {props && props.userMapping[0]?props.userMapping[0].control_owner:""}
        </a>
        
        <a href="#">
          <img width="25" src="assets/avatar.svg" alt="" />
        </a>
      </div>
      <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
        <input
          className="mt-1"
          type="text"
          name="box"
          placeholder="Search What You Want.."
        />
        <div className="btn mx-2">
          <a href="#">
            <i className="fa fa-search" aria-hidden="true" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
