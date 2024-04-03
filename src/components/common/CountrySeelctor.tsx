import React from "react";

const CountrySelector = ({ value, onChange }: any) => {
  const countries = [
    { name: "India", code: "+91" },
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "American Samoa", code: "+1-684" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Anguilla", code: "+1-264" },
  ];

  return (
    <select
      value={value}
      onChange={onChange}
      className="rounded-[10px] h-[50px] px-2 border-light-black bg-white border-2 hover:bg-slate-100 text-light-black"
    >
      {countries.map((country) => (
        <option key={country.code} value={country.code}>
          {` ${country.name}  (${country.code})`}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
