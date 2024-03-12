import { PrimaryButton } from "styles/Button";
import pencil from '../../assets/icons/pencil.svg';
import { useState } from "react";
import ModalFullHeight from "styles/ModalFullHeight";
import Travelersform from "./Travelersform";

export default function Travelers() {

    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const handleClick = () => {
        setIsEditModal(true);
    };

    return (
        <>
            <div className="h-fit flex mb-10">
                <p className="pl-5 border-int-sandal border-l-4 py-2 mt-3"><span className="text-3xl pt-2">Travelers</span><br />
                You have {'0'} Travelers</p>
                <div className="sm:ml-[10%] md:ml-[30%] lg:ml-[50%] mt-4 "> <PrimaryButton profilebtn onClick={handleClick}>
                    <img src={pencil} alt="pencil" />
                    <p className="font-poppinsRegular text-blue-600">Add Traveler</p>
                </PrimaryButton></div>
            </div>

            <ModalFullHeight
                active={isEditModal}
                closeModal={() => setIsEditModal(false)}
                width="w-fit"
                isSubModal={true}
                transparent={true}>
                <Travelersform />
            </ModalFullHeight>

            <div className={`flex mx-8 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg border-b-4`}>
                <p className="w-[40%]">{'Gowtham'}</p>
                <p className="w-[40%]">{'27'}</p>
                <p>{'Male'}</p>
            </div>
            <div className={`flex mx-8 py-3 px-2 hover:bg-gradient-to-r from-white via-white to-blue-200 text-lg `}>
                 <p className="w-[40%]">{'Buusha'}</p>
                 <p className="w-[40%]">{'25'}</p>
                 <p>{'Male'}</p>
            </div>
        </>
    );
}