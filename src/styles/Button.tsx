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

export function ButtonListOutlined({ children }: ButtonOutlinedProps) {
    return (
        <Button variant="outlined" className='flex rounded items-center px-4 py-2 space-x-4 border-white text-white'>
            {children}
        </Button>
    )
}

export function Generateotp({ children,ok,cancel,view, ...props }: any) {
    return (
        <>
            <button
                className={`flex rounded-md items-center bg-bluebtn px-5 py-2 text-white font-poppinsRegular 
                    ${ok ? 'bg-bluebtn' : ''} ${cancel ? 'bg-red-400':''} ${view ? 'bg-gradient-to-r from-primary to-bluebtn h-7':''}`}
            >
                {children}
            </button>
        </>
    );
}

export function Googlesignin({ children, onClick, ...props }: any) {
    return (
        <>
            <button className='flex uppercase bg-bluebtn rounded-md items-center pl-2 text-white pr-5 py-2 font-poppinsRegular w-full text-center justify-center' onClick={() => onClick()}>
                <div className='bg-white rounded-l-md'>
                    <img src={google} className='p-1' alt='error' />
                </div>
                <div className='ml-3'>
                    <div className='text-center'>{children || "Sign in with Google"}</div>
                </div>
            </button>
        </>
    );
}

export function PrimaryButton({ children, outlined, rounded, shadow, blue, block, onClick, loading,profilebtn, ...props }: any) {
    return (
            <button
                onClick={onClick}
                className={`flex my-2 items-center justify-center
                    ${outlined ? "bg-transparent rounded-md border-white border-2 text-white"
                        : rounded ? "bg-int-sandal rounded-full text-white"
                            : ""}
                    ${shadow ? "border-int-sandal border-2 border-opacity-40 text-white" : ""}
                    ${block ? "w-[80%]" : ""}
                    ${blue ? "bg-bluebtn" : "bg-int-blue rounded text-white mx-8"}
                    ${profilebtn ? "border-primary text-primary bg-transparent border-2 rounded-full": ""}
                    text-center px-5 py-2 text-sm font-poppinsRegular uppercase`}
            disabled={loading}
        >
            {loading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.962 7.962 0 003.17 0H6z"></path>
                </svg>
            ) : (
                children
            )}
        </button>

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
                <span className="status">{isToggled ? (<div className="bg-bluebtn px-2 py-2 rounded-full text-white md:px-10 text-sm md:text-lg">Flight</div>) : (<div className="px-2 py-2 md:px-10 text-sm md:text-lg">Flight</div>)}</span>
                <span className="status">{isToggled ? (<div className="px-2 py-2 md:px-10 text-sm md:text-lg">Hotel</div>) : (<div className="bg-bluebtn px-2 py-2 rounded-full text-white md:px-10 text-sm md:text-lg">Hotel</div>)}</span>
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