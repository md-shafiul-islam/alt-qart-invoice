import React from "react";

const FeatureItem = ({
  url = "",
  title = "Title here",
  description = "",
  ...props
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-52  rounded-3xl">
        <img src={url} className="h-full w-full rounded-t-3xl" />
      </div>
      <div className="p-4 flex flex-col gap-5">
        <h3 className="text-lg">{title} </h3>
        <p className="font-semibold">{description}</p>
        <button className="bg-amber-600 px-4 py-2 text-white ">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default FeatureItem;
