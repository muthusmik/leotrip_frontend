import { useState } from "react";
import tick from '../../../../../assets/icons/tick-icon.svg';
const PickupDrop = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event: any) => {
        setSelectedCity(event.target.value);
    };
    return (
        <>
            <div className="p-5">
                <h1 className="font-bold text-lg">Airport Pick & Drop</h1>
                <p className="pl-1 bg-[#fdd9a3] py-1 w-[70%] font-bold">Pre-book airport cabs at great prices. Now available in city near you.</p>
                <p className="py-4 font-semibold">Select cabs for New Chennai to Coimbatore Trip</p>
                <div className="flex justify-around">
                    <div className="border px-3 py-2">
                        <div className="flex justify-end me-3">
                            <button className="bg-gradient-to-t from-cyan-400 to-blue-400 text-white px-2">5 may</button>
                        </div>
                        <div className="flex">
                            <input
                                type="checkbox"
                                // checked={isNonVegChecked}
                                // onChange={handleNonVegChange}
                                className="h-5 w-5"
                            />
                            <label className='px-3'>Pick-up :</label>
                            <select
                                id="city"
                                value={selectedCity}
                                onChange={handleCityChange}
                                className="text-blue-600 font-bold"
                            >
                                <option value="">Select a city</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Mumbai">Mumbai</option>
                                {/* Add more cities as needed */}
                            </select>
                        </div>
                        <div className="ml-10">
                            <h1 className="font-bold py-1">Drop: <span className="text-light-black pe-16">Terminal 2 Chennai Airport</span></h1>
                            <small className="text-light-black py-1">Flat<span>&#x20B9;248 upto 18 Km</span></small>
                        </div>
                        <h1 className="text-lg text-end font-semibold">&#x20B9;248</h1>


                    </div>
                    <div className="border px-3 py-2">
                        <div className="flex justify-end me-3">
                            <button className="bg-gradient-to-t from-cyan-400 to-blue-400 text-white px-2 ">5 may</button>
                        </div>
                        <div className="flex">
                            <input
                                type="checkbox"
                                // checked={isNonVegChecked}
                                // onChange={handleNonVegChange}
                                className="h-5 w-5"
                            />
                            <label className='px-3'>Pick-up :</label>
                            <span className="text-light-black pe-16">Terminal 2 Chennai Airport</span>
                        </div>
                        <div className="ml-10">
                            <h1 className="font-bold py-1">Drop: <select
                                id="city"
                                value={selectedCity}
                                onChange={handleCityChange}
                                className="text-blue-600 font-bold"
                            >
                                <option value="">Select a city</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Mumbai">Mumbai</option>
                                {/* Add more cities as needed */}
                            </select></h1>
                            <small className="text-light-black py-1">Flat<span>&#x20B9;248 upto 18 Km</span></small>
                        </div>
                        <h1 className="text-lg text-end font-semibold">&#x20B9;248</h1>
                    </div>
                </div>
                <div className="flex items-center mx-2 my-3">
                        <img src={tick} alt="t" className="h-6 w-6 me-2"/>
                        <h1 className="text-base">No surge pricing, no queues</h1>
                </div>
                <ul className="bg-[#fdd9a3] pl-5 mx-3"><li className="font-semibold list-disc py-1">Exact location details will be collected post booking.</li></ul>
            </div>
        </>
    );
};
export default PickupDrop;