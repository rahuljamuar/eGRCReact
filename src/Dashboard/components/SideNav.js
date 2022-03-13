import { Link } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed top-6 z-50 lg:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer top-6 lg:hidden"
          fill="#fff"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[100vw] lg:w-[20rem] bg-gray-800  p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "hidden"
        }`}
      >
        <div>
          <div className="sidebar__title">
            <div className="sidebar__img">
            <img src="/assets/appLogo.svg"/>
              <h1>EGRC-Lite</h1>
            </div>
          </div>
          <Link to="/dashboard">
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-home"></i>Dashboard
              </div>
            </div>
          </Link>
          <Link to="/dashboard/new-owner">
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-signal"></i>
                New-Owner
              </div>
            </div>
          </Link>
          <Link to="/dashboard/view-owner">
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-user-o"></i>
                View-Owner
              </div>
            </div>
          </Link>
          <Link to="/dashboard/view-reviewer">
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-address-book"></i>
                View-Reviewer
              </div>
            </div>
          </Link>
          <Link to="/dashboard/view-admin">
            <div className="sidebar__menu">
              <div className="sidebar__link active_menu_link">
                <i className="fa fa-lock"></i>
                View-Admin
              </div>
            </div>
          </Link>
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="/">Log out</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
