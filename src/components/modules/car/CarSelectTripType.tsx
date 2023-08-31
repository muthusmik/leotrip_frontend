import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Listbox } from '@headlessui/react';

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    onSelect: (value: string) => void;
}

const CustomSelect = forwardRef<any, CustomSelectProps>(
    ({ options, onSelect }, ref) => {
        const [selectedOption, setSelectedOption] = useState<Option | null>(null);
        const buttonRef = useRef<HTMLButtonElement | null>(null);

        useImperativeHandle(ref, () => ({
            focus: () => {
                buttonRef.current?.focus();
            }
        }));

        const handleSelect = (option: Option) => {
            setSelectedOption(option);
            onSelect(option.value);
        };

        return (
            <Listbox value={selectedOption} onChange={handleSelect}>
                <div className="absolute w-[16%]">
                    <Listbox.Button ref={buttonRef} className="w-full h-full flex justify-between items-center">
                        {selectedOption ? selectedOption.label : 'From Airport'}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-700"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            {selectedOption ? (
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 10.293a1 1 0 011.414 0L10 12.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            )}
                        </svg>
                    </Listbox.Button>
                    <Listbox.Options className="absolute w-full py-1 mt-2 bg-slate-600 text-white shadow-lg">
                        {options.map((option) => (
                            <Listbox.Option key={option.value} value={option}>
                                {({ active, selected }) => (
                                    <div
                                        className={`cursor-pointer p-2 ${active ? 'bg-gray-900' : ''
                                            } ${selected ? 'bg-gray-500' : ''}`}
                                    >
                                        {option.label}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        );
    });

export default CustomSelect;
