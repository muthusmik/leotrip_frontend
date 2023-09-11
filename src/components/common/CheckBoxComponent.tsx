import React, { useState } from "react";

interface CheckboxGroupComponentProps {
    typeNeeded: string
    title: string
    options: string[];
    onChange: (selectedValues: string[]) => void;
}

const CheckboxGroupComponent: React.FC<CheckboxGroupComponentProps> = ({ typeNeeded, title, options, onChange }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const toggleCheckbox = (value: string) => {
        const updatedValues = [...selectedValues];
        if (updatedValues.includes(value)) {
            updatedValues.splice(updatedValues.indexOf(value), 1);
        } else {
            updatedValues.push(value);
        }
        setSelectedValues(updatedValues);
        onChange(updatedValues);
    };
    
    if (typeNeeded === 'normal') {
        return (
            <div className="py-1 px-4">
                <h1 className='text-lg font-poppinsRegular'>{title}</h1>
                {options.map((option) => (
                    <div className="mt-1 flex items-center">
                        <label key={option} className="cursor-pointer font-poppinsRegular">
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedValues.includes(option)}
                                onChange={() => toggleCheckbox(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        );
    }
    else if (typeNeeded === 'box') {
        return (
            <div className="py-1 px-4">
                <h1 className='text-lg font-poppinsRegular'>{title}</h1>
                {options.map((option) => (
                    <div className="mt-1 flex items-center">
                        <label key={option} className="cursor-pointer font-poppinsRegular">
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedValues.includes(option)}
                                onChange={() => toggleCheckbox(option)}
                                className="mr-2 hidden"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        )
    }
    else {
        return (
            <div className="py-1 px-4">
                <h1 className='text-lg font-poppinsRegular'>{title}</h1>
                {options.map((option) => (
                    <div className="mt-1 flex items-center">
                        <label key={option} className="cursor-pointer font-poppinsRegular">
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedValues.includes(option)}
                                onChange={() => toggleCheckbox(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        )
    }
};

export default CheckboxGroupComponent;
