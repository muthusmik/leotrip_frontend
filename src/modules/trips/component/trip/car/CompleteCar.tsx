import React, { useState } from "react";
import book from 'assets/images/tick.svg'
import car from 'assets/icons/car-nav.svg'
import arrow from 'assets/images/Arrow 45.svg'
import ModalFullHeight from "styles/ModalFullHeight";
import Rating from "../Rating";
const Completed = ({ data }: any) => {
    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsEditModal(true);
    };

    return (
        <div>
            <div className="border m-5 bg-gradient-to-b from-white via-[#6AB0DC] to-[#52A0D2] rounded-2xl">
                <div className="h-fit flex ms-5 mt-3">
                    <img src={car} alt="404" className="w-[30px] h-[30px]"  />
                    <h2 className="mx-5 mt-1 font-poppinsRegular">{data.travel}</h2>
                    <img src={book} className="ps-[50%]" alt="404" />
                </div>
                <div className="h-fit flex ms-5 mt-3">
                    <h4 className="font-poppinsRegular ps-[20%]">{data.from}</h4>
                    <img src={arrow} className="px-5" alt="404" />
                    <h4 className="font-poppinsRegular ps-5">{data.to}</h4>
                </div>
                <div className="h-fit flex ms-5 my-3">
                    <p className="font-poppinsRegular ps-[20%] text-sm">{data.pickup}</p>
                    <p className="font-poppinsRegular ps-[10%] text-sm">{data.drop}</p>
                </div>
                <div className="bg-[#D9D9D9] flex text-md ps-5 py-3 rounded-tl-none rounded-tr-none rounded-bl-2xl rounded-br-2xl">
                    <p className="font-poppinsRegular text-sm">Date: {data.date} - {data.day}</p>
                    <h4 className="font-poppinsRegular ps-5 text-[#0015D7] ml-auto mr-[50px]" onClick={handleClick}>Remarks</h4>
                </div>
            </div>
            <ModalFullHeight
                active={isEditModal}
                closeModal={() => setIsEditModal(false)}
                width="w-fit"
                isSubModal={true}
                transparent={true}>
                <Rating />
            </ModalFullHeight>
        </div>
    );
}

export default Completed;
