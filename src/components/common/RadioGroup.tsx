import React, { useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface RadioGroupProps {
  options: Option[];
  selected: string;
  type: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  type,
  options,
  selected,
  onChange,
}) => {
  return (
    <div className="mt-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={`inline-flex items-center mx-2 py-0.5  px-2 cursor-pointer rounded-full ${
            selected === option.value
              ? type === "home"
                ? "bg-int-secondary-blue font-black"
                : ""
              : ""
          }`}
        >
          <input
            type="radio"
            value={option.value}
            checked={selected === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <div className="w-4 h-4 border-2 border-int-grey-40 rounded-full flex items-center justify-center">
            <div
              className={`w-2.5 h-2.5  rounded-full ${
                selected === option.value ? "bg-int-primary-blue" : "bg-white"
              } flex items-center justify-center`}
            ></div>
          </div>
          <span
            className={` text-sm md:text-md  font-poppinsRegular ml-1 ${
              type === "home" ? "text[#fff] text-sm " : "text-white"
            }`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
