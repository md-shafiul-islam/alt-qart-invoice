/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CstDatePicker = ({ onDateChange, ...props }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    onDateChange(startDate);
  }, [startDate]);

  return (
    <DatePicker
      {...props}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default CstDatePicker;
