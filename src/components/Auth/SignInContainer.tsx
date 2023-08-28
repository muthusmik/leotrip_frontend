import React from "react";
import Carousel from "components/common/Carousel";
import { Googlesignin, PrimaryButton } from "styles/Button";
import Slider from "../../assets/images/slider.svg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
function SignInContainer({ setAuth, setIsOpenAuthModal }: any) {
    const handleClick = () => {
        setAuth(false);
        setIsOpenAuthModal(false);
    };

    return (
        <div className="flex w-full h-[500px] bg-transparent">
            <div className="w-[40%] h-[95%] my-[2%] rounded-l-2xl " id="popper">
                {/* <img src={Slider} alt={''} className="rounded-l-lg" /> */}
                <Slide>
                    <div className="each-slide-effect">
                        <div >
                            <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div >
                            <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div>
                            <span>Slide 3</span>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className="w-[60%] flex items-center justify-between flex-col bg-white rounded-lg" id="main">
                <div className="justify-content w-full ">
                    <div className="mb-1 relative items-center w-[80%] mx-[10%] py-5">
                        <div className=" mb-[2%] mt-[10%] text-[lg] font-bold">Email <span className="text-sm">or</span> Mobile Number</div>
                        <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                        <PrimaryButton block >Sign In</PrimaryButton>
                        <div className="flex items-center justify-center relative my-8">
                            <hr className="border-gray-300 flex-grow" />
                            <span className="bg-white px-2 text-gray-500">Or</span>
                            <hr className="border-gray-300 flex-grow" />
                        </div>
                        <Googlesignin />
                    </div>
                </div>
                <div className="text-xs mb-2">
                    By proceeding, you agree to MakeMyTrip's{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Privacy Policy
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        User Agreement
                    </a>
                    , and{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        T&Cs
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SignInContainer;
