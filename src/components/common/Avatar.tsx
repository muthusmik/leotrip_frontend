import { useRef, useState } from "react";
import AvatarIcon from "../../assets/icons/avatar.svg";
import UserIcon from "../../assets/icons/user-pascal.svg";
import TripIcon from "../../assets/icons/rolling-pascal.svg";
import LogoutIcon from "../../assets/icons/logout-pascal.svg";
import useOutsideAlerter from "hooks/useOutside";
import ModalFullHeight from "styles/ModalFullHeight";
import { SignInContainer } from "components/Auth/SignInContainer";



export function Avatar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false)
    const [auth, setAuth] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter({ ref: wrapperRef, callback: () => setIsDropdownOpen(false) })

    const dropdownPosition = isDropdownOpen ? 'block' : 'hidden';
    const dropdownPositionX = isDropdownOpen ? '-130px' : '-1000px';
    const handleActionClick = (type: string) => {
        setIsDropdownOpen(!isDropdownOpen);
        console.log(type)
        if (type === "Logout") {
            setAuth(false)
        }
    }

    const MenuOptions = [
        {
            name: 'My Profile',
            icon: UserIcon,
            description: "Manage your profile, traveler details, login details, and password",
            onClick: () => handleActionClick("Profile")
        },
        {
            name: 'My Trips',
            icon: TripIcon,
            description: "Details of your upcoming, completed trips and manage your trips",
            onClick: () => handleActionClick("Trips")
        },
        {
            name: 'Logout',
            icon: LogoutIcon,
            onClick: () => { handleActionClick("Logout") }
        }
    ];

    return (
        <div ref={wrapperRef} className=" relative mx-2 ml-[5%]">
            {!auth ? (
                <div className="border-int-dark-blue border-2 rounded-[10px] p-1 flex" onClick={() => setAuth(true)}>
                    <img src={AvatarIcon} alt={''} />
                    <span className="font-poppinsRegular text-lg text-int-dark-blue mx-2 text-center">Login/Register</span>
                </div>
            ) : (
                <div className="p-2 flex cursor-pointer hover:bg-int-background rounded-[10px] " onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img src={AvatarIcon} alt={''} className="p-1 rounded-full md:border-0 border-2 border-int-dark-blue mdlg:w-10 md:w-5" />
                    <span className="font-poppinsRegular text-lg md:text-lg text-black mx-1 justify-content mt-2 text-center">Hi  <b>Leo</b></span>
                </div>
            )}
            {isDropdownOpen && (
                <div className={`absolute ${dropdownPosition} top-full left-0 right-auto mt-1 z-10 bg-white py-3 px-2 shadow-xl rounded-lg ${isDropdownOpen ? 'animate-slide-in-top' : 'animate-slide-out-top'}`}
                    style={{ left: dropdownPositionX, right: 'auto', minWidth: '200px', maxWidth: '400px' }}
                >
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
            )}
            {/* <ModalFullHeight
                active={isOpenAuthModal}
                closeModal={() => setIsOpenAuthModal(false)}
                width="w-[620px]"
                isSubModal={true}>
                <SignInContainer setAuth={setAuth} close={setIsOpenAuthModal} />
            </ModalFullHeight> */}
        </div>
    );
}
