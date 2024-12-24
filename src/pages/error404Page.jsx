import React from "react";

import notFoundFile from "../assets/lottie/not-founs-404.json";
import Lottie from "lottie-react";
import HRHeader from "../Components/Layout/HRHeader";
import HRFooter from "../Components/Layout/HRFooter";

const Error404Page = () => {
  return (
    <>
      <HRHeader />
      <section>
        <div className="w-full min-h-screen flex justify-center items-center">
          <div className="card-body text-center w-full h-3/4">
            <h1 className="text-center text-3xl font-bold">Opps!</h1>
            <div className="w-full ">
              <Lottie animationData={notFoundFile} className="h-72" />
            </div>
            <p>Page not found, Please try another Or Contact administrator</p>
            <div className="pt-4 pb-4 mt-4 mb-4">
              <a
                href="/"
                className="bg-blue-800 py-2 px-4 rounded-md font-semibold text-white"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </section>
      <HRFooter />
    </>
  );
};

export default Error404Page;
