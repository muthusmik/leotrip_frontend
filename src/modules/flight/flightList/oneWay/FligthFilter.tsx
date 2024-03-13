import Checkbox from "components/common/CheckBox";
import React, { useState } from "react";

const PopularFilter: string[] = [
    'Non Stop',
    'Morning Departure',
    'Spicejet',
    'Air India',
    'Indigo',
    'AirAsia'
];

const FlightFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const toggleFilter = (filter: string) => { // Specify the type of 'filter' parameter
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(item => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    return (
        <div className="bg-white border border-black border-1 w-[80%] mx-auto ">
            <div className="border border-b-black border-1 p-2">
                <h1>FILTER</h1>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Popular Filters</h1>
                <div>
                    {PopularFilter.map((filter, index) => (
                        <div key={index} className="px-2 flex flex-row py-1">
                            {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                            <Checkbox color={'indigo'} />
                            <label htmlFor={`filter-${index}`} className="mx-2">{filter}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Price Range</h1>
                <div className="w-full">
                    <input type="range" min="20" max="200" className="w-full appearance-none  bg-gray-200 h-2 rounded-full outline-none" />
                </div>



            </div>
        </div>
    );
};

export default FlightFilter;
