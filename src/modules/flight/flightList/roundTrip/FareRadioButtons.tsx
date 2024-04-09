import React, { useState } from "react";

function FareRadioButtons({
  label,
  fareType,
  selectedFare,
  setSelectedFare,
  prices,
}: any) {
  const handleFareChange = () => {
    setSelectedFare(fareType);
  };

  return (
    <div className="flex justify-between  w-full">
      <label className="text-sm flex justify-around ">
        <input
          type="radio"
          value={fareType}
          checked={selectedFare === fareType}
          onChange={handleFareChange}
          className="mx-2"
        />
        {label}
      </label>
      <div>
        {selectedFare === fareType && (
          <span className="text-int-dark-red text-sm">
            <span>&#x20B9;</span> {prices[fareType]}
          </span>
        )}
      </div>
    </div>
  );
}

export default FareRadioButtons;
