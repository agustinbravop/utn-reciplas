import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ ...props }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      style={{ opacity: "50%"}}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      {...props}
    />
  );
}

export default DateInput;
