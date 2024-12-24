import React from "react";

const WorkStep = ({ count = 0, title, description, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-6 pt-6">
      <div className="w-full flex flex-row items-center justify-center">
        <div
          className={`uppercase flex flex-row gap-2 justify-center items-center px-4 py-1 text-white ${
            4 == count ? "bg-teal-700" : "bg-slate-400"
          }`}
        >
          <i className="fa-regular fa-square-caret-right"></i>Setep {count}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        <h3 className="text-lg text-center">{title} </h3>
        <p className="font-semibold ">{description}</p>
      </div>
    </div>
  );
};

export default WorkStep;
