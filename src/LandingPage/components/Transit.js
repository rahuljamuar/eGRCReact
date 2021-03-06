import React from "react";

function Transit() {
  return (
    <div class="w-60 h-70 pb-4 shadow-md bg-white px-1 absolute" id="sidenav">
      <ul class="relative">
        <li class="relative" id="sidenavEx1">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx1"
            aria-expanded="true"
            aria-controls="collapseSidenavEx1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Country 1</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavEx1"
            aria-labelledby="sidenavEx1"
            data-bs-parent="#sidenavExample"
          >
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="text-left">Country:</span>{" "}
                <span className="text-right font-medium">KSA</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Control:</span>{" "}
                <span className="text-right font-medium">MTD C2.9</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Location:</span>{" "}
                <span className="text-right font-medium">Factory-2</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="relative" id="sidenavEx1">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx1"
            aria-expanded="true"
            aria-controls="collapseSidenavEx1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Country 2</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavEx1"
            aria-labelledby="sidenavEx1"
            data-bs-parent="#sidenavExample"
          >
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="text-left">Country:</span>{" "}
                <span className="text-right font-medium">KSA</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Control:</span>{" "}
                <span className="text-right font-medium">MTD C2.7</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Location:</span>{" "}
                <span className="text-right font-medium">Factory-1</span>
              </div>
            </li>
          </ul>
        </li>
        <li class="relative" id="sidenavEx1">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavEx1"
            aria-expanded="true"
            aria-controls="collapseSidenavEx1"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
            <span>Country 3</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </a>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavEx1"
            aria-labelledby="sidenavEx1"
            data-bs-parent="#sidenavExample"
          >
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="text-left">Country:</span>{" "}
                <span className="text-right font-medium">KSA</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Control:</span>{" "}
                <span className="text-right font-medium">MTD C3.1</span>
              </div>
            </li>
            <li class="relative flex-row">
              <div className="flex items-center text-s py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <span className="">Location:</span>{" "}
                <span className="text-right font-medium">Factory-1</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Transit;
