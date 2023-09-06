import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Generateotp } from 'styles/Button';

export default function Travelersform() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    // Handle form input changes
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Perform form submission logic here, e.g., sending data to a server
        console.log('Form data:', formData);
    };

    const [selectedOption, setSelectedOption] = useState('');

    // Handle dropdown selection changes
    const handleSelectChange = (e: any) => {
        setSelectedOption(e.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date: any) => {
        setSelectedDate(date);
    };

    

    return (
        <>
            <div className="bg-white p-10 rounded-md">
                <p className="text-3xl font-poppinsBold mb-5">Edit Profile</p>
                <Tabs className="font-poppinsRegular">
                    <TabList>
                        <Tab>Basic Info</Tab>
                        <Tab>Passport</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='text-xl font-poppinsBold mt-5'>Basic Information</div>
                        <p className='text-sm font-poppinsRegular mb-5'>Basic info, like your email and number that you use on Personal Profile</p>
                        <form onSubmit={handleSubmit} className="grid grid-rows-3 grid-flow-col gap-x-14 gap-y-4 mx-8">
                            <div>
                                <label htmlFor="firstName" className="text-xl font-poppinsRegular">Full Name</label><br />
                                <input
                                    type="text"
                                    id=""
                                    name="FullName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="text-xl font-poppinsRegular">Email ID</label><br />
                                <input
                                    type="email"
                                    id=""
                                    name="EmailID"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                            <div>
                                <label htmlFor="datePicker" className="text-xl font-poppinsRegular">Birthday</label><br />
                                <DatePicker
                                    id="datePicker"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="MM/dd/yyyy" // Optional: Specify the date format
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                            <div>
                                <label htmlFor="dropdown" className="text-xl font-poppinsRegular">Gender</label><br />
                                <select
                                    id=""
                                    name="Gender"
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
                                <label htmlFor="email" className="text-xl font-poppinsRegular">Phone No</label><br />
                                <input
                                    type="number"
                                    id=""
                                    name="PhoneNo"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                        </form>
                        <hr className="my-10 border-2" />
                        <div className='flex w-full gap-5 justify-end'>
                            <Generateotp cancel>
                                Cancel
                            </Generateotp>
                            <Generateotp ok>
                                Save
                            </Generateotp>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='text-xl font-poppinsBold mt-5'>Passport Details</div>
                        <p className='text-sm font-poppinsRegular mb-5'>Add your Passport details for a faster flight booking experience</p>
                        <form onSubmit={handleSubmit} className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-4 mx-8">
                            <div>
                                <label htmlFor="firstName" className="text-xl font-poppinsRegular">Passport Number</label><br />
                                <input
                                    type="text"
                                    id=""
                                    name="FullName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                            <div>
                                <label htmlFor="datePicker" className="text-xl font-poppinsRegular">Expiry Date</label><br />
                                <DatePicker
                                    id="datePicker"
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    dateFormat="MM/dd/yyyy" // Optional: Specify the date format
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                />
                            </div>
                            <div className='w-52'>
                                <label htmlFor="dropdown" className="text-xl font-poppinsRegular">Issuing Country</label><br />
                                <select
                                    id=""
                                    name="Country"
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    className={"border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                                >
                                    <option value="Male" className="font-poppinsRegular">India</option>
                                    <option value="Female" className="font-poppinsRegular">country1</option>
                                    <option value="Others" className="font-poppinsRegular">country3</option>
                                </select>
                            </div>
                        </form>
                        <hr className="my-10 border-2" />
                        <div className='flex w-full gap-5 justify-end'>
                            <Generateotp cancel>
                                Cancel
                            </Generateotp>
                            <Generateotp ok>
                                Save
                            </Generateotp>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    );
}
