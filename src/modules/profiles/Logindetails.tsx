import tick from '../../assets/icons/tick-icon.svg';
import Profileclose from '../../assets/icons/Profileclose.svg';
import bin from '../../assets/icons/bin.svg';
import { useState } from 'react';
import ModalFullHeight from 'styles/ModalFullHeight';
import Passwordpopup from './Changepassword';
export default function Logindetails() {


    const data = {
        "mbl": 78855,
    }
    const email = {
        "mbl": null,
    }

    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsEditModal(true);
    };

    return (
        <>
            <div className="flex flex-col mb-10 md:flex-row">
                <p className="pl-5 border-int-sandal border-l-4 py-2 mt-3 text-3xl pt-2 md:w-1/2">Login Details<br />Manage your email address mobile number and password</p>
            </div>

            <div className="flex flex-wrap py-3 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg border-b-4 mx-12">
                <p className="w-full md:w-1/4">MOBILE NUMBER</p>
                <p className="text-gray-500 sm:ms-5 w-full md:w-auto md:flex-grow">{data.mbl ? data.mbl : 'E.g., Verify you are Number'}</p>
                <p><img src={data.mbl ? tick : Profileclose} alt='tick' className='ml-10' /></p>
                {data.mbl === null ? (
                    <p className='text-red-500'>Add mobile number</p>
                ) : (
                    <p className='text-green-500'>Verified</p>
                )}
                <img src={bin} alt='bin' className='ml-auto' />
            </div>

            <div className="flex flex-wrap py-3 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg border-b-4 mx-12">
                <p className="w-full md:w-1/4">EMAIL ID</p>
                <p className="text-gray-500 sm:ms-5 w-full md:w-auto md:flex-grow">{email.mbl ? email.mbl : 'E.g., Verify you are Email'}</p>
                <p><img src={email.mbl ? tick : Profileclose} alt='tick' className='ml-5' /></p>
                {email.mbl === null ? (
                    <p className='text-red-500 ml-3'>Add Email id</p>
                ) : (
                    <p className='text-green-500'>Verified</p>
                )}
                <img src={bin} alt='bin' className='ml-auto' />
            </div>

            <div className="flex flex-wrap py-3 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg  mx-12">
                <p className="w-full md:w-1/4">PASSWORD</p>
                <p className="text-gray-500 sm:ms-5 w-full md:w-auto md:flex-grow">{'E.g., Enter password'}</p>
                <p className='ml-auto text-blue-700' onClick={handleClick}>Change Password ?</p>
            </div>
            <ModalFullHeight
                active={isEditModal}
                closeModal={() => setIsEditModal(false)}
                width="w-[500px]"
                isSubModal={true}
                transparent={true}>
                <Passwordpopup />
            </ModalFullHeight>
        </>
    );
}