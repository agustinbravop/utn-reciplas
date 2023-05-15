import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
    />
  );
}

export default MyComponent;