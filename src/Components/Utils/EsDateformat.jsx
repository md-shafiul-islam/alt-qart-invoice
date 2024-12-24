import React from "react";
import dateFormat, { masks } from "dateformat";

const EsDateformat = (date, format = "dddd, mmmm dS, yyyy") => {
  return <div>{dateFormat(date, format)}</div>;
};

export default EsDateformat;
