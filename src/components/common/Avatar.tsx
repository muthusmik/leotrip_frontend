import { useRef, useState } from "react";
import AvatarIcon from "../../assets/icons/avatar.svg";
import UserIcon from "../../assets/icons/user-pascal.svg";
import TripIcon from "../../assets/icons/rolling-pascal.svg";
import HeartIcon from "../../assets/icons/heart-avatar.svg";
import SearchIcon from "../../assets/icons/search-avatar.svg";
import LogoutIcon from "../../assets/icons/logout-pascal.svg";
import useOutsideAlerter from "hooks/useOutside";
import ModalFullHeight from "styles/ModalFullHeight";
import AuthContainer from "components/Auth/AuthContainer";
import { AuthLogin } from "components/Auth/AuthLogin";
import { AuthSignUp } from "components/Auth/AuthSignUp";
import { isEmail } from "components/utils/common";
import { GetUserData } from "components/Auth/GetUserData";
import { useNavigate } from "react-router-dom";
import CommonLayout from '../../modules/profiles/CommonLayout'


export function Avatar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);
    const [isOpenLoginModal, setIsOpenLoginModal] = useState<boolean>(false);
    const [isOpenSignUpModal, setIsOpenSignUpModal] = useState<boolean>(false);
    const [isDataModal, setIsDataModal] = useState<boolean>(false);

    const [UserAuthMedium, setUserAuthMedium] = useState<string>('');
    const [verifyOTPProps, setVerifyOTPProps] = useState<any>('');
    const [isPassword, setIsPassword] = useState<any>(false);


    const [auth, setAuth] = useState(true);
    const wrapperRef = useRef(null);
    const navigate = useNavigate()
    useOutsideAlerter({ ref: wrapperRef, callback: () => setIsDropdownOpen(false) })

    const dropdownPosition = isDropdownOpen ? 'block' : 'hidden';
    const dropdownPositionX = isDropdownOpen ? '-130px' : '-1000px';
    // const handleActionClick = (type: string) => {
    //     setIsDropdownOpen(!isDropdownOpen);
    //     console.log(type)

    //     if (type === "Logout") {
    //         setAuth(false)
    //     }
    //     else if(type === "Trips")
    //     {
    //         navigate('/mytrips', { state: "Flight"})
    //     }
    //     else {
    //         navigate("/myprofile")
    //     }
    // }

    const MenuOptions = [
        {
            name: 'My Profile',
            icon: UserIcon,
            description: "Manage your profile, traveler details, login details, and password",
            onClick: () => navigate("/profile" ,{state:"Travellers"})
        },
        {
            name: 'My Trips',
            icon: TripIcon,
            description: "Details of your upcoming, completed trips and manage your trips",
            onClick: () => navigate("/profile" ,{state:"Flight"})
        },
        {
            name: 'Saved',
            icon: HeartIcon,
            description: "Manage your Favourite Travel fixtures and schedules",
            onClick: () => <CommonLayout />
        },
        {
            name: 'Offers',
            icon: SearchIcon,
            description: "Details of exciting offers particularly for you",
            onClick: () => <CommonLayout />
        },

        {
            name: 'Logout',
            icon: LogoutIcon,
            onClick: () =>setAuth(false)
        }
    ];

    const handleProceed = (isLogin: boolean, UserEmailorPhone: string, isPassword?: boolean, OTPProps?: any) => {
        setIsOpenAuthModal(false);
        setUserAuthMedium(UserEmailorPhone);
        isPassword !== undefined && setIsPassword(isPassword)
        if (!isEmail(UserEmailorPhone) && OTPProps) {
            setVerifyOTPProps(OTPProps)
        } else {
            setVerifyOTPProps(null)
        }

        isLogin ? setIsOpenLoginModal(true) : setIsOpenSignUpModal(true);
    }
    const handleLoginBack = () => {
        setIsOpenLoginModal(false);
        setIsOpenSignUpModal(false);
        setIsOpenAuthModal(true);
    }

    const openDataModal = () => {
        setIsDataModal(true);
        setIsOpenLoginModal(false);
        setIsOpenSignUpModal(false);
    }

    return (
        <div ref={wrapperRef} className=" relative mx-2 ml-[5%]">
            {!auth ? (
                <div className="border-int-dark-blue border-2 rounded-[10px] p-2 flex " onClick={() => setIsOpenAuthModal(true)}>
                    <img src={AvatarIcon} alt={''} />
                    <span className="font-poppinsRegular text-lg text-int-dark-blue pe-3 mx-2 text-center text-wrap hidden lg:flex ">Login/Register</span>
                </div>
            ) : (
                <div className="p-2 flex cursor-pointer hover:bg-int-background rounded-[10px] " onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={AvatarIcon} alt={''} className="p-1 rounded-full  border-2 md:border-0 sm:border-0 border-int-dark-blue lg:w-10 md:w-10" />
                    <span className="font-poppinsRegular text-lg md:text-lg text-black  mx-1 justify-content mt-2 text-center">Hi  <b>Leo</b></span>
                </div>
            )}
            {isDropdownOpen && (
                <div className={`absolute ${dropdownPosition} top-full left-0 right-auto shadow-top-dark mt-1 z-10 bg-white py-3 px-2 rounded-lg ${isDropdownOpen ? 'animate-slide-in-top' : 'animate-slide-out-top'}`}
                    style={{ left: dropdownPositionX, right: 'auto', minWidth: '200px', maxWidth: '400px' }}
                >
                    <div className="absolute w-5  h-5 border-[20px]   border-solid border-transparent border-b-white" style={{ top: '-28px', left: '80%', transform: 'translateX(-50%)' }}></div>
                    <div className="relative">

                        {MenuOptions.map((option, index) => (
                            <div
                                key={index}
                                className={`flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 ${index !== MenuOptions.length - 1 ? 'border-b' : ''} rounded`}
                                onClick={option.onClick}
                            >
                                <img src={option.icon} alt={''} className="w-6 h-6" />
                                <div>
                                    <span className="font-poppinsRegular text-base text-gray-700">{option.name}</span>
                                    <p className="text-[10px] text-gray-500">{option.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                // <div className={`absolute ${dropdownPosition} top-full left-0 right-auto mt-1 z-10 bg-white py-3 px-2 shadow-xl rounded-lg ${isDropdownOpen ? 'animate-slide-in-top' : 'animate-slide-out-top'}`}
                //     style={{ left: dropdownPositionX, right: 'auto', minWidth: '200px', maxWidth: '400px' }}
                // >
                //     {MenuOptions.map((option, index) => (
                //         <div
                //             key={index}
                //             className={`flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100 ${index !== MenuOptions.length - 1 ? 'border-b' : ''} rounded`}
                //             onClick={option.onClick}
                //         >
                //             <img src={option.icon} alt={''} className="w-6 h-6" />
                //             <div>
                //                 <span className="font-poppinsRegular text-base text-gray-700">{option.name}</span>
                //                 <p className="text-[10px] text-gray-500">{option.description}</p>
                //             </div>
                //         </div>
                //     ))}
                // </div>
            )}
            <ModalFullHeight
                active={isOpenAuthModal}
                closeModal={() => setIsOpenAuthModal(false)}
                width="w-[920px]"
                isSubModal={true}
                transparent={true}>
                <AuthContainer close={() => setIsOpenAuthModal(false)} proceed={handleProceed} />
            </ModalFullHeight>
            <ModalFullHeight
                active={isOpenLoginModal}
                closeModal={() => setIsOpenLoginModal(false)}
                width="w-[470px]"
                isSubModal={true}
            >
                <AuthLogin Back={handleLoginBack} UserAuthMedium={UserAuthMedium} verifyOTPProps={verifyOTPProps} isPassword={isPassword} openDataModal={openDataModal} />
            </ModalFullHeight>
            <ModalFullHeight
                active={isOpenSignUpModal}
                closeModal={() => setIsOpenSignUpModal(false)}
                width="w-[470px]"
                isSubModal={true}
            >
                <AuthSignUp Back={handleLoginBack} UserAuthMedium={UserAuthMedium} verifyOTPProps={verifyOTPProps} openDataModal={openDataModal} />
            </ModalFullHeight>
            <ModalFullHeight
                active={isDataModal}
                closeModal={() => setIsDataModal(false)}
                width="w-[470px]"
                isSubModal={true}
            >
                <GetUserData Back={handleLoginBack} />
            </ModalFullHeight>
        </div>
    );
}
