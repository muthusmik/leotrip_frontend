import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Generateotp } from 'styles/Button';

export default function Myprofileform() {

    const [formData, setFormData] = useState({
        Name: '',
        Birthday: '',
        Gender: '',
        Address: '',
        MaritalStatus: '',
        State: '',
        Pincode: '',
    });

    // Handle form input changes
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Perform form submission logic here, e.g., sending data to a server
        console.log('Form data:', formData);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date:any) => {
        setSelectedDate(date);
    };
    
    return (
        <>
            <div className="bg-white p-10 rounded-md">
                <p className="text-3xl font-poppinsBold mb-5">Edit Profile</p>
                <form onSubmit={handleSubmit} className="grid grid-rows-4 grid-flow-col gap-x-14 gap-y-4 mx-8">
                    <div>
                        <label htmlFor="firstName" className="text-xl font-poppinsRegular">Full Name</label><br />
                        <input
                            type="text"
                            id=""
                            name=""
                            value={formData.Name}
                            onChange={handleInputChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="text-xl font-poppinsRegular">Birthday</label><br />
                        <DatePicker
                            id="datePicker"
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy" // Optional: Specify the date format
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">Gender</label><br />
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        >
                            <option value="Male" className="font-poppinsRegular">Male</option>
                            <option value="Female" className="font-poppinsRegular">Female</option>
                            <option value="Others" className="font-poppinsRegular">Others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">City</label><br />
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        >
                            <option value="chennai" className="font-poppinsRegular">chennai</option>
                            <option value="Madurai" className="font-poppinsRegular">Madurai</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">Marital Status</label><br />
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        >
                            <option value="Single" className="font-poppinsRegular">Single</option>
                            <option value="Married" className="font-poppinsRegular">Married</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">State</label><br />
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        >
                            <option value="Single" className="font-poppinsRegular">chennai</option>
                            <option value="Married" className="font-poppinsRegular">Madurai</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">Pincode</label><br />
                        <input
                            type="text"
                            id=""
                            name=""
                            value={formData.Pincode}
                            onChange={handleInputChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xl font-poppinsRegular">Nationality</label><br />
                        <select
                            id=""
                            name=""
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        >
                            <option value="India" className="font-poppinsRegular">India</option>
                            <option value="USA" className="font-poppinsRegular">USA</option>
                        </select>
                    </div>
                </form>
                <hr className="my-10 border-2"/>
                <div className='flex w-full gap-5 justify-end'>
                    <Generateotp cancel>
                        Cancel
                    </Generateotp>
                    <Generateotp ok>
                        Save
                    </Generateotp>
                </div>
            </div>
        </>
    );
}