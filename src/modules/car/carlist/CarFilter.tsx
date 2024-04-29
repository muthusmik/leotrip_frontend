import Checkbox from "components/common/CheckBox";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const CarType: string[] = [
    "SEDAN",
    "SUV",
    "HATCHBACK",
];
const FuelType: string[] = [
    "CNG",
    "DIESEL",
    "PETROL",
];
const CarModel: string[] = [
    "Innova Crysta",
    "Toyota Innova",
];
const CarFilter = () => {

    
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

                <div className={`md:block bg-white w-[80%] mx-auto font-poppinsRegular z-50 rounded-lg ${drawerOpen ? '' : 'hidden'}`}>

                    <div className=" p-2">
                        <h1>Selected Filter</h1>
                    </div>
                    
                    <div className="p-2">
                        <h1 className="font-semibold pb-2">CarType</h1>
                        <div>
                            {CarType.map((Property, index) => (
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

                    <div className="p-2">
                        <h1 className="font-semibold pb-2">CarType</h1>
                        <div>
                            {FuelType.map((fuel, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{fuel}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-2">
                        <h1 className="font-semibold pb-2">CarType</h1>
                        <div>
                            {CarModel.map((model, index) => (
                                <div key={index} className="px-2 flex flex-row py-1">
                                    {/* <input
                                type="checkbox"
                                id={`filter-${index}`}
                                checked={selectedFilters.includes(filter)}
                                onChange={() => toggleFilter(filter)}
                                className="mx-2 p-5"
                            /> */}
                                    <Checkbox color={'indigo'} />
                                    <label htmlFor={`filter-${index}`} className="mx-2">{model}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    

                    
                </div>
            
             
        </div>

    );
};

export default CarFilter;

