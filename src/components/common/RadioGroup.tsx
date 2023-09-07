import React, { useState } from 'react';
import { IoRadioButtonOffOutline, IoRadioButtonOnOutline } from 'react-icons/io5';

type Option = {
    value: string;
    label: string;
};

interface RadioGroupProps {
    options: Option[];
    selected: string;
    onChange: (value: string) => void;
    modify: string
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options, selected, onChange, modify }) => {

    return (
        <div className="mt-2">
            {options.map((option) => (
                <label key={option.value} className={`inline-flex items-center mx-2 py-1 px-2 cursor-pointer rounded-[0.5rem]  ${modify === 'true' ? "" : selected === option.value ? 'bg-orange-300' : 'hover:bg-orange-100'}`}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selected === option.value}
                        onChange={() => onChange(option.value)}
                        className="hidden"
                    />
                    {selected === option.value ? <IoRadioButtonOnOutline size={"1.8rem"} color={modify === 'true' ? "white" : "blue"} /> : <IoRadioButtonOffOutline size={"1.8rem"} color={modify === 'true' ? "white" : "blue"} />}
                    {/* <div className="w-6 h-6 border-2 rounded-full border-blue-500 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${selected === option.value ? 'bg-blue-500' : 'bg-white'} flex items-center justify-center`}>
                           
                        </div>
                    </div> */}
                    <span className={`text-gray-700 text-xl font-poppinsRegular ml-2 ${modify === 'true' ? "text-white" : ""}`}>{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;

