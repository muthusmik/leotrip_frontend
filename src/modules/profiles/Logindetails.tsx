import tick from '../../assets/icons/tick-icon.svg';
import Profileclose from '../../assets/icons/Profileclose.svg';
import bin from '../../assets/icons/bin.svg';
import { useState } from 'react';
export default function Logindetails() {


    const data = {
        "mbl": 78855,
    }
    const email = {
        "mbl": null,
    }

    return (
        <>
            <div className="flex mb-10">
                <p className="pl-5 border-int-sandal border-l-4 py-2 mt-3"><span className="text-3xl pt-2">Login Details</span><br />
                    Manage your email address mobile number and password
                </p>
            </div>
            <div className={`flex mx-12 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg border-b-4`}>
                <p className="w-[20%]">MOBILE NUMBER</p>
                <p className="text-gray-500">{data.mbl ? data.mbl : 'E.g., Verify you are Number'}</p>
                <p>
                    <img src={data.mbl ? tick : Profileclose} alt='tick' className='ml-10' />
                </p>
                {data.mbl===null ?(
                    <p className='text-red-500'>Add mobile number</p>
                ) :  (
                <p className='text-green-500'>Verified</p>
                ) }
                <img src={bin} alt='bin' className='ml-auto' />
            </div>
            <div className={`flex mx-12 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg border-b-4`}>
                <p className="w-[20%]">EMAIL ID</p>
                <p className="text-gray-500">{email.mbl ? email.mbl : 'E.g., Verify you are Email'}</p>
                <p>
                    <img src={email.mbl ? tick : Profileclose} alt='tick' className='ml-10' />
                </p>
                {email.mbl===null ?(
                    <p className='text-red-500'>Add mobile number</p>
                ) :  (
                <p className='text-green-500'>Verified</p>
                ) }
                <img src={bin} alt='bin' className='ml-auto' />
            </div>
            <div className={`flex mx-12 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg`}>
                <p className="w-[20%]">PASSWORD</p>
                <p className="text-gray-500">{'E.g., Enter password'}</p>
                <p className='ml-auto text-primary'>Change Password ?</p>
            </div>
        </>
    );
}