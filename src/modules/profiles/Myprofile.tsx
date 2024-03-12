import { PrimaryButton } from "styles/Button";
import pencil from '../../assets/icons/pencil.svg';
import ModalFullHeight from "styles/ModalFullHeight";
import { useState } from "react";
import Myprofileform from "./Myprofileform";

export default function MyProfile({ MyProfileKey, lastItem }: any) {
    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsEditModal(true);
    };

    return (
        <>
            <div className="h-fit flex mb-10">
                <p className="pl-5 border-int-sandal border-l-4 py-2 mt-3"><span className="text-3xl pt-2">My Profile</span><br />
                    Basic info, for a faster booking experience</p>
                <div className="sm:ml-[10%] md:ml-[40%] lg:ml-[50%] mt-4 rounded"> <PrimaryButton profilebtn onClick={handleClick}>
                    <img src={pencil} alt="pencil" />
                    <p className="font-poppinsRegular ml-1 text-blue-600">Edit</p>
                </PrimaryButton></div>
            </div>
            {MyProfileKey.map((item: any) => {
                return (
                    <>
                        <div className={`flex mx-12 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg 
                                        ${item.title === lastItem.title ? 'mb-5' : 'border-b-4'}`}>
                            <p className="w-[20%]">{item.title}</p>
                            <p className="text-gray-500 ml-[30%]">{item.placeholder}</p>
                        </div>
                    </>)
            })
            }
            <ModalFullHeight
                active={isEditModal}
                closeModal={() => setIsEditModal(false)}
                width="w-fit"
                isSubModal={true}
                transparent={true}>
                <Myprofileform />
            </ModalFullHeight>
        </>
    );
}