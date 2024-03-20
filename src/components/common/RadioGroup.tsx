import React, { useState } from 'react';

type Option = {
    value: string;
    label: string;
};

interface RadioGroupProps {
    options: Option[];
    selected: string;
    type:string;
    onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({type, options, selected, onChange }) => {

    return (
        <div className="mt-2">
            {options.map((option) => (
                <label key={option.value} className={`inline-flex items-center mx-2  py-1 px-2 cursor-pointer rounded-[0.5rem] ${selected === option.value ? ((type === 'home') ?'bg-orange-300' : '' ) : ''}`}>
                    <input
                        type="radio"
                        value={option.value}
                        checked={selected === option.value}
                        onChange={() => onChange(option.value)}
                        className="hidden"
                    />
                    <div className="w-6 h-6 border-2 rounded-full border-blue-500 flex items-center justify-center">
                        <div className={`w-4 h-4 rounded-full ${selected === option.value ? 'bg-blue-500' : 'bg-white'} flex items-center justify-center`}>
                            {/* Customize the selected and unselected states */}
                        </div>
                    </div>
                    <span className={` text-sm md:text-md  font-poppinsRegular ml-2 ${type === 'home' ? 'text-gray-700 lg:text-lg' : 'text-white'}`}>{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioGroup;

