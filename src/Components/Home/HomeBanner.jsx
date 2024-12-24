import React from "react";

const HomeBanner = ({}) => {
  return (
    <div className="w-full grid grid-cols-2 gap-8 max-h-[640px] items-center justify-center py-8">
      <div >
        <h1 className="text-4xl font-bold py-5 border-b">Architecture Services</h1>
        <p className="font-medium text-xl py-2">
          Professionals committed to growing your business. Our team offers
          architectural services that help transform your projects, allowing you
          to achieve goals with precision and efficiency.
        </p>
      </div>
      <div>
        <img src="https://i.ibb.co.com/gPTxVX3/Untitled-design-2-1.webp" />
      </div>
    </div>
  );
};

export default HomeBanner;
