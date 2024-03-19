import Checkbox from "components/common/CheckBox";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const PopularFilter: string[] = [
    '5 Stars',
    'swimming Pool',
    'Breakfast & Dinner included',
    'Resorts',
    'Twin beds',
];
const GuestRating: string[] = [
    'Any',
    'Wonderful 9+',
    'Very good 8+',
    'Good 7+',
    'Bad 5+'
];
const PropertyClass: string[] = [
    '1 Star',
    '2 Star',
    '3 Star',
    '4 Star',
    '5 Star',
    'Unrated',
];
const PaymentType: string[] = [
    'Pay at Hotel',
    'Pre Pay',
    'Book Now Pay Later',
];
const PropertyType: string[] = [
    'Hotel',
    'Villa',
    'Apartment',
    'Resort',
    'Hostel',
];
const MealPlansaAvailables: string[] = [
    'Breakfast included',
    'Dinner included',
    'Lunch included',
    'All-inclusive',
];
const Amenitiess: string[] = [
    'Pool',
    'WiFi included',
    'Gym',
    'Kitchen',
    'Spa',
];
const Accessibilitys: string[] = [
    'Lift',
    'Accessible Bathrooms',
    'Wheelchair-accessible parking',
    'In-room accessibility',
    'Roll-in shower',
];

const HotelFilter = () => {

    const [showMore, setShowMore] = useState(false);
    const [displayedPopular, setDisplayedPopular] = useState(PopularFilter.slice(0, 3));
    const [displayedPropertyType, setDisplayedPropertyType] = useState(PropertyType.slice(0, 3));
    const [displayedAmenitiess, setDisplayedAmenitiess] = useState(Amenitiess.slice(0, 3));
    const [displayedAccessibilitys, setDisplayedAccessibilitys] = useState(Accessibilitys.slice(0, 3));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };
    

    const handleShowMore = (display: string) => {

        if (display === 'displayedPopular') {
            setDisplayedPopular(PopularFilter);

        }
        else if (display === "displayedPropertyType") {
            setDisplayedPropertyType(PropertyType)

        }
        else if (display === "displayedAmenitiess") {
            setDisplayedAmenitiess(Amenitiess)

        }
        else if (display === "displayedAccessibilitys") {
            setDisplayedAccessibilitys(Accessibilitys)

        }


    };
    return (
        
        <div className="">
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}

            >
              </Drawer> 
            <div className="block md:hidden">
                <Button onClick={toggleDrawer(true)}><FontAwesomeIcon icon={faBars} /></Button>
            </div>
                {/* Content of the drawer */}
                {/* You can put any filters or additional content here */}

                <div className={`md:block bg-white w-[80%] mx-auto font-poppinsRegular z-50 ${drawerOpen ? '' : 'hidden'}`}>

                    <div className=" p-2">
                        <h1>FILTER</h1>
                    </div>
                    <div className=" p-2">
                        <h1>Popular Filters</h1>
                        <div>
                            {displayedPopular.map((filter, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} name="filter" />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{filter}</label>
                                </div>
                            ))}
                            {!showMore && PopularFilter.length > displayedPopular.length &&
                                <button onClick={() => handleShowMore("displayedPopular")} className="text-indigo-600 hover:text-indigo-900 text-end">{showMore ? 'Less -' : 'More +'}</button>
                            }
                        </div>
                    </div>
                    <div className=" p-2">
                        <h1>Price per night</h1>
                        <div>
                            <div className="w-full mt-4">
                                <input type="range" min="100" max="200" className="w-full appearance-none bg-gray-200 h-2 rounded-full outline-none" id="rangeInput" />
                            </div>
                            <div className="flex justify-between items-center">
                                <span id="minValue" className="">Rs-2000 -</span>
                                <span id="maxValue" className="">Rs-4000</span>
                            </div>
                        </div>
                    </div>
                    <div className=" p-2">
                        <h1>Guest Rating</h1>
                        <div>
                            {GuestRating.map((rating, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{rating}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" p-2">
                        <h1>Property Class</h1>
                        <div>
                            {PropertyClass.map((Property, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{Property}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" p-2">
                        <h1>Payment Type</h1>
                        <div>
                            {PaymentType.map((Payment, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{Payment}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=" p-2">
                        <h1>Property Type</h1>
                        <div>
                            {displayedPropertyType.map((Property, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{Property}</label>
                                </div>
                            ))}
                            {!showMore && PropertyType.length > displayedPropertyType.length &&
                                <button onClick={() => handleShowMore("displayedPropertyType")} className="text-indigo-600 hover:text-indigo-900 text-end">More +</button>
                            }
                        </div>
                    </div>

                    <div className=" p-2">
                        <h1>Meal Plans available</h1>
                        <div>
                            {MealPlansaAvailables.map((MealPlansaAvailable, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{MealPlansaAvailable}</label>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className=" p-2">
                        <h1>Amenities</h1>
                        <div>
                            {displayedAmenitiess.map((Amenities, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{Amenities}</label>
                                </div>
                            ))}
                            {!showMore && Amenitiess.length > displayedAmenitiess.length &&
                                <button onClick={() => handleShowMore("displayedAmenitiess")} className="text-indigo-600 hover:text-indigo-900 text-end">More +</button>
                            }
                        </div>

                    </div>
                    <div className="p-2">
                        <h1>Accessibility</h1>
                        <div>
                            {displayedAccessibilitys.map((Accessibility, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{Accessibility}</label>
                                </div>
                            ))}
                            {!showMore && Accessibilitys.length > displayedAccessibilitys.length &&
                                <button onClick={() => handleShowMore("displayedAccessibilitys")} className="text-indigo-600 hover:text-indigo-900 text-end">More +</button>
                            }
                        </div>

                    </div>
                </div>
            
             
        </div>

    );
};

export default HotelFilter;

