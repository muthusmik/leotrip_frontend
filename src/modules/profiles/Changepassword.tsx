import { useState } from "react";
import { Generateotp } from "styles/Button";

export default function Passwordpopup() {
    
    const [formData, setFormData] = useState({
        Name: '',
        Birthday: '',
        Gender: '',
        Address: '',
        MaritalStatus: '',
        State: '',
        Pincode: '',
    });

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };
    
    // Handle form input changes
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    
    return (
        <div className="bg-white p-8 rounded-md">
            <p className="text-3xl font-poppinsBold mb-5">Change Password?</p>
            <form onSubmit={handleSubmit} className="grid grid-rows-3 grid-flow-col gap-x-14 gap-y-4 mx-8">
                    <div>
                        <label htmlFor="firstName" className="text-lg font-poppinsRegular">Old Password</label><br />
                        <input
                            type="text"
                            id=""
                            name=""
                            placeholder="Enter Old Password"
                            value={formData.Name}
                            onChange={handleInputChange}
                            className={"pl-2 border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-lg font-poppinsRegular">New Password</label><br />
                        <input
                            type="text"
                            id=""
                            name=""
                            placeholder="Enter New Password"
                            value={formData.Pincode}
                            onChange={handleInputChange}
                            className={"pl-2 border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-lg font-poppinsRegular">Confirm New Password</label><br />
                        <input
                            type="text"
                            id=""
                            name=""
                            placeholder="Confirm New Password"
                            value={formData.Pincode}
                            onChange={handleInputChange}
                            className={"pl-2 border-[3px] outline-none w-[100%] h-12 rounded-md border-gray-300 focus:border-blue-300 hover:border-blue-300 focus:shadow-md shadow-int-mid-blue"}
                        />
                    </div>
                </form>
                <hr className="my-5 border-2"/>
                <div className='flex w-full justify-end'>
                    <Generateotp ok>
                        Save Password
                    </Generateotp>
                </div>

        </div>
    );
}