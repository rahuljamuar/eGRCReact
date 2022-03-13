import React from "react";

function Transction() {
  return (
    <div
      className="mt-16 pt-8 pb-8"
      style={{
        "background-image":
          "url(https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80)",
      }}
    >
      <div className="text-black text-center text-4xl mb-8 font-medium">
        Transaction Table Stats
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 p-5 text-center">
        <div className="flex-col">
          <span className="text-amber-400 text-6xl mb-8 font-medium">3</span>
          <br />
          <span className="text-gray-400 text-4xl mb-8 font-medium">
            Months
          </span>
          <br />
          <br />

          <span className="text-gray-900 text-xl mb-8 font-medium">
            Select Month
          </span>
          <br />

          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdownMonth"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Select Month{" "}
            <svg
              class="ml-2 w-4 h-4"
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
            id="dropdownMonth"
            class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Earnings</li>
              <li>Sign out</li>
            </ul>
          </div>
        </div>
        <div className="flex-col">
          <span className="text-amber-400 text-6xl mb-8 font-medium">5</span>
          <br />
          <span className="text-gray-400 text-4xl mb-8 font-medium">
            Countries
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xl mb-8 font-medium">
            Select Country
          </span>
          <br />
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdownCountry"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Select Country{" "}
            <svg
              class="ml-2 w-4 h-4"
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
            id="dropdownCountry"
            class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Earnings</li>
              <li>Sign out</li>
            </ul>
          </div>
        </div>
        <div className="flex-col">
          <span className="text-amber-400 text-6xl mb-8 font-medium">74</span>
          <br />
          <span className="text-gray-400 text-4xl mb-8 font-medium">
            Control IDs
          </span>
          <br />
          <br />
          <span className="text-gray-900 text-xl mb-8 font-medium">
            Select Process
          </span>
          <br />
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdownProcess"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Select Process{" "}
            <svg
              class="ml-2 w-4 h-4"
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
            class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Earnings</li>
              <li>Sign out</li>
            </ul>
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

export default Transction;
