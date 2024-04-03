import React, { useState } from "react";

const DateOfBirthInput = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Function to handle change in day select
  const handleDayChange = (e: any) => {
    setDay(e.target.value);
  };

  // Function to handle change in month select
  const handleMonthChange = (e: any) => {
    setMonth(e.target.value);
  };

  // Function to handle change in year select
  const handleYearChange = (e: any) => {
    setYear(e.target.value);
  };

  return (
    <div className="flex flex-row">
      <select
        className="border border-light-black  p-2 rounded-tl rounded-bl"
        value={day}
        onChange={handleDayChange}
      >
        <option value="">Day</option>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select
        className="border border-light-black  p-2 "
        value={month}
        onChange={handleMonthChange}
      >
        <option value="">Month</option>
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select
        className="border border-light-black  p-2 rounded-tr rounded-br"
        value={year}
        onChange={handleYearChange}
      >
        <option value="">Year</option>
        {Array.from(
          { length: 120 },
          (_, i) => new Date().getFullYear() - i
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateOfBirthInput;
