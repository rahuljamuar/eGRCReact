import React from "react";

function TransitDetails() {
  return (
    <div>
      <div className="text-xl font-medium underline">
        Neque porro quisquam est qui dolorem
      </div>
      <div className="text-lg font-normal pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
        aliquam neque. Morbi aliquet lectus nec sapien rhoncus tincidunt ut eget
        massa. Quisque consequat pretium est, id semper neque congue sit amet.
        Donec dignissim sed ex vel egestas. Phasellus non erat
      </div>
      <div className="text-xl font-normal pb-8">
        1. Morbi aliquet lectus nec sapien rhoncus tincidunt ut eget massa.
        Quisque consequat pretium est.
      </div>
      <div className="text-xl font-normal pb-8 flex">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdownProcess"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Select Process{" "}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdownProcess"
          className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Earnings</li>
            <li>Sign out</li>
          </ul>
        </div>
        <div className="mx-5">
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="text"
              placeholder="Enter Your Comment Here"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-xl font-normal pt-8 pb-8">
        2. Morbi aliquet lectus nec sapien rhoncus tincidunt ut eget massa.
        Quisque consequat pretium est.
      </div>
      <div className="text-xl font-normal pb-8 flex">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdownProcess"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Select Process{" "}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        <div
          id="dropdownProcess"
          className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>Dashboard</li>
            <li>Settings</li>
            <li>Earnings</li>
            <li>Sign out</li>
          </ul>
        </div>
        <div className="mx-5">
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="text"
              placeholder="Enter Your Comment Here"
              className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full pr-10"
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-36">
          Show
        </button>
      </div>
    </div>
  );
}

export default TransitDetails;
