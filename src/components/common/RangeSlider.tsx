import React, { useState } from "react";

interface RangeSliderProps {
  onChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ onChange }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const min = 500;
  const max = 3000;

  const onSlide = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue(value);
    onChange(value);
  };

  return (
    <div className="range-slider w-full">
      <div>
        <input
          type="range"
          min={min}
          max={max}
          value={sliderValue}
          onChange={onSlide}
          className="slider w-full"
          id="myRange"
        ></input>
      </div>
      <div className="flex justify-between">
        <p>Rs. {min}</p>
        <p>Rs. {sliderValue}</p>
        <p>Rs. {max}</p>
      </div>
    </div>
  );
};

export default RangeSlider;
