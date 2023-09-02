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
            <div className="flex mb-10">
                <p className="pl-5 border-int-sandal border-l-4 py-2 mt-3"><span className="text-3xl pt-2">Travelers</span><br />
                You have {'0'} Travelers</p>
                <div className="ml-[58%] mt-4"> <PrimaryButton profilebtn onClick={handleClick}>
                    <img src={pencil} alt="pencil" />
                    <p className="font-poppinsRegular ml-1">Add Traveler</p>
                </PrimaryButton></div>
            </div>

            <ModalFullHeight
                active={isEditModal}
                closeModal={() => setIsEditModal(false)}
                width="w-[650px]"
                isSubModal={true}
                transparent={true}>
                <Travelersform />
            </ModalFullHeight>
        </>
    );
}