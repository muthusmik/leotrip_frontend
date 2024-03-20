import Checkbox from "components/common/CheckBox";
import React, { useState } from "react";
import sunrise from '../../../../assets/images/sunrise.png'
import sun from '../../../../assets/images/sun.png'
import sunset from '../../../../assets/images/sunset.png'
import moon from '../../../../assets/images/moon.png'
import airindia from '../../../../assets/images/AI.png'
import indigo from '../../../../assets/images/igo.png'
import airasia from '../../../../assets/images/AA.png'
import spicejet from '../../../../assets/images/SG.png'
import Vistara from '../../../../assets/images/UK.png'
const PopularFilter: string[] = [
    'Non Stop',
    'Morning Departure',
    'Spicejet',
    'Air India',
    'Indigo',
    'AirAsia'
];
const airlines = [
    { name: 'Air India', img: airindia },
    { name: 'Indigo', img: indigo },
    { name: 'Air Asia', img: airasia },
    { name: 'Spice Jet', img: spicejet },
    { name: 'Vistara', img: Vistara }
];
const FlightFilter = () => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [showMore, setShowMore] = useState(false);
    const [displayedAirlines, setDisplayedAirlines] = useState(airlines.slice(0, 3)); // Displaying only 3 airlines initially
    const toggleFilter = (filter: string) => { // Specify the type of 'filter' parameter
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter(item => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };
    const handleShowMore = () => {
        setDisplayedAirlines(airlines); // Display all airlines
        setShowMore(true); // Hide the "show more" button
    };
    return (
        <div className="bg-white border border-black border-1 w-[80%] mx-auto font-poppinsRegular">
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
                <div>
                    <div className="w-full mt-4">
                        <input type="range" min="20" max="200" className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none" id="rangeInput" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span id="minValue" className="mr-2">20</span>
                        <span id="maxValue" className="mx-end">200</span>
                    </div>
                </div>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Stops</h1>
                <div className="flex flex-row h-16 mt-2">
                    <div className="border border-black border-1  w-1/3 flex justify-center items-center mx-1 flex flex-col">
                        <p className="text-sm">0</p>
                        <p className="text-sm">Non Stop</p>
                    </div>
                    <div className="border border-black border-1 w-1/3 flex justify-center items-center mx-1 flex flex-col">
                        <p className="text-sm">1</p>
                        <p className="text-sm">Stop</p>
                    </div>
                    <div className="border border-black border-1 w-1/3 flex justify-center items-center mx-1 flex flex-col">
                        <p className="text-sm">2+</p>
                        <p className="text-sm">Stops</p>
                    </div>
                </div>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Departure from Chennai</h1>
                <div className="flex flex-row  mt-2">
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sunrise} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sun} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sunset} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={moon} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                </div>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Departure to Coimbatore</h1>
                <div className="flex flex-row  mt-2">
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sunrise} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sun} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={sunset} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                    <div className="border border-black border-1 w-1/4 flex justify-center items-center flex flex-col">
                        <img className="h-[40%] w-[40%] border border-1 border-white mt-1" src={moon} alt="404" />
                        <p className="text-sm">Before</p>
                        <p className="text-sm">6 AM</p>
                    </div>
                </div>
            </div>
            <div className="border border-b-black border-1 p-2">
                <h1>Airlines</h1>
                <div>
                    {displayedAirlines.map((filter, index) => (
                        <div key={index} className="px-2 flex flex-row py-1">
                            {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                            <Checkbox color={'indigo'} />
                            <img src={filter.img} alt={filter.img} className="h-5 w-5 mx-3"/>
                            <label htmlFor={`filter-${index}`} className="mx-2">{filter.name}</label>
                        </div>
                    ))}
                    {!showMore && airlines.length > displayedAirlines.length &&
                        <button onClick={handleShowMore} className="text-indigo-600 hover:text-indigo-900">More +</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default FlightFilter;
