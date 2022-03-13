import React from "react";

function Hero() {
  return (
    <div>
      <div
        className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center"
        style={{
          "background-image":
            "url(https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

        <div className="px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl">
              <span className="text-indigo-500 font-bold">Welcome,</span> User
            </h2>
            <p className="mt-3 text-white text-xl sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
              Please complete the following controls assigned to you.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex justify-center">
              <div className="rounded-md shadow">
                <a
                  href="/signin"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-white bg-indigo-600 hover:bg-orange-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Login &#8594;
                </a>
              </div>
              <div className="rounded-md shadow">
                <a
                  href="/signup"
                  className="w-full mx-2 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-black bg-indigo-300 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:px-10"
                >
                  Register &#8594;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
