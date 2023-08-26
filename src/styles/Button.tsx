import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import google from '../assets/icons/google.svg';

type ButtonOutlinedProps = {
    children: React.ReactNode;
};
export function ButtonOutlined({ children }: ButtonOutlinedProps) {
    return (
        <Button variant="outlined" className='flex rounded items-center px-4 py-2 space-x-4 border-sky-700 hover:border-sky-400'>
            {children}
        </Button>
    )
}


export function Generateotp({ children, ...props }: any) {
    return (
        <>
            <button
                className='flex rounded-md items-center bg-bluebtn px-5 py-2 text-white font-poppinsRegular'
            >
                {children}
            </button>
        </>
    );
}

export function Googlesignin({ children, ...props }: any) {
    return (
        <>
            <button className='flex bg-bluebtn rounded-md items-center pl-2 text-white pr-5 py-2 font-poppinsRegular'>
                <div className=' bg-white rounded-l-md'>
                    <img src={google} className='p-1' />
                </div>
                <div className='ml-3 mt-1'>
                    Sign in with Google {/*{children} */}
                </div>
            </button>
        </>
    );
}


export function PrimaryButton({ children, outlined, rounded, shadow, ...props }: any) {
    return (
        <>
            <button
                className={`flex
             ${outlined ? " bg-transparent rounded-md  border-white border-2 "
                        : rounded ? " bg-int-sandal rounded-full"
                            : " bg-int-sandal rounded-md "}
             ${shadow && " border-sandalbtnborder border-2 border-opacity-40"}
             items-center text-white px-5 py-2 font-poppinsRegular`}>
                {children}
            </button>
        </>
    );
}


const ToggleSliderButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <div className={`toggle-slider-button `}>
            <button className={`slider flex bg-white rounded-full font-PoppinsSemiBold text-lg shadow-lg`} onClick={handleToggle}>
                <span className="status">{isToggled ? (<div className="bg-bluebtn px-10 py-2 rounded-full text-white">Flight</div>) : (<div className="px-10 py-2">Flight</div>)}</span>
                <span className="status">{isToggled ? (<div className="px-10 py-2">Hotel</div>) : (<div className="bg-bluebtn px-10 py-2 rounded-full text-white">Hotel</div>)}</span>
            </button>
        </div>
    );
};
export function Slidebutton({ children, ...props }: any) {

    return (
        <div className="App">
            <ToggleSliderButton />
        </div>
    );
}



const Gender = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <div className={`toggle-slider-button `}>
            <button className={`slider flex bg-white rounded-lg font-PoppinsSemiBold text-lg`} onClick={handleToggle}>
                <span className="status">{isToggled ? (<div className="bg-Genderbut bg-opacity-40 px-6 pt-2 pb-1 rounded-l-md text-black border-b-4 border-bluebtn">Male</div>) : (<div className="px-6 py-2">Male</div>)}</span>
                <span className="status">{isToggled ? (<div className="px-6 py-2">Female</div>) : (<div className="bg-Genderbut bg-opacity-40 px-6 pt-2 pb-1 rounded-r-md text-black border-b-4 border-bluebtn">Female</div>)}</span>
            </button>
        </div>
    );
};

export function Genderbutton({ children, ...props }: any) {

    return (
        <div className="App">
            <Gender />
        </div>
    );
}