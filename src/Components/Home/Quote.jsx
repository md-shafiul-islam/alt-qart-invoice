import React from "react";

const Quote = ({
  profileUrl = "",
  title,
  name = "",
  quote = "",
  designation,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-6 pt-6">
      <div className="w-full flex flex-row items-center gap-6 px-4 ">
        <div className="w-20 h-20 items-center flex flex-col justify-center ">
          <img
            src={profileUrl}
            className="w-full h-full rounded-full "
          />
        </div>
        <div className="flex flex-col">
          <h4>{name}</h4>
          <h5>{designation}</h5>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-5">
        <h3 className="text-lg text-center">{title} </h3>
        <p className="font-medium ">{quote}</p>
      </div>
    </div>
  );
};
export default Quote;
