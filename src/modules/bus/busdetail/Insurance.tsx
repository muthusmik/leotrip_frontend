import React from "react";

const RadioButton = ({ value, selectedOption, onChange, label }: any) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={selectedOption === value}
        onChange={() => onChange(value)}
      />
      {label}
    </label>
  );
};

export default RadioButton;
