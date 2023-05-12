import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { Calendar } from "primereact/calendar";

function App() {
  const [date, setDate] = useState(null);

  // <--- foundation code for date conversion --->
  // let startDate='08/04/2023'
  // const dateArr = startDate.split('/');
  // var currentDate = new Date();
  // currentDate.setDate(dateArr[0]);
  // currentDate.setMonth(dateArr[1]-1);
  // currentDate.setFullYear(dateArr[2])

  // let endDate='10/05/2023'
  // const dateArr1 = endDate.split('/');
  // var currentDate1 = new Date();
  // currentDate1.setDate(dateArr1[0]);
  // currentDate1.setMonth(dateArr1[1]-1);
  // currentDate1.setFullYear(dateArr1[2])

  // <--- foundation code for date conversion --->

  let startDate = "08/05/2023";
  const startDateArr = startDate.split("/");
  const startYear = startDateArr[2];
  const startMonth = startDateArr[1] - 1;
  const startDay = startDateArr[0];
  const startDateObj = new Date(startYear, startMonth, startDay);

  let endDate = "10/05/2023";
  const endDateArr = endDate.split("/");
  const endYear = endDateArr[2];
  const endMonth = endDateArr[1] - 1;
  const endDay = endDateArr[0];
  const endDateObj = new Date(endYear, endMonth, endDay);

  const dateArray = [];
  const currentDate = startDateObj;

  while (currentDate <= endDateObj) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  
  return (
    <div className="App">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        disabledDates={dateArray}
        showIcon
      />
    </div>
  );
}

export default App;
