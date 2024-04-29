import React, { useState } from "react";
import car from 'assets/icons/car-nav.svg';
import arrow from 'assets/images/Arrow 45.svg';
import ModalFullHeight from "styles/ModalFullHeight";
import Rating from "../Rating";
import { Generateotp } from "styles/Button";
import { TRIPS } from "components/utils/constants/stringconstants/common";
import adult from '../../../../../assets/icons/adult.svg';
import caricon from '../../../../../assets/icons/car-icon.svg';


const Completed = ({ data }: any) => {
    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const handleClick = () => {
        setIsEditModal(true);
    };

    const travelerscount = data.travelarname.length;

    return (
        <div>
            <div className="border m-5 bg-gradient-to-b from-white via-[#6AB0DC] to-[#52A0D2] rounded-2xl">
                <div className="flex ms-5 mt-3 w-full">
                    <img src={car} alt="404" className="w-[30px] h-[30px]" />
                    <div className="flex">
                        <h4 className="font-poppinsRegular ps-[20%] mt-2">{data.from}</h4>
                        <img src={arrow} className="px-5" alt="404" />
                        <h4 className="font-poppinsRegular ps-5 mt-2">{data.to}</h4>
                    </div>
                    <div className="ml-auto mr-10 mt-2">
                        <Generateotp view>
                            View Booking
                        </Generateotp>
                    </div>
                </div>
                <p className="font-poppinsRegular text-xs ps-[11.3%] mb-2">Booking ID : {data.bookingid}</p>
                <div className="bg-[#D9D9D9] text-md ps-5 py-3 rounded-bl-[14px] rounded-br-[14px]">
                    <div className='flex gap-x-8 bg-'>
                        <div className="w-52">
                            <p><b>{TRIPS.Car.pickup}</b></p>
                            <div className="flex"><p>{data.from}</p><p>-{data.pickup}</p></div>
                            <div className="flex"><p>{data.fromdate}</p><p>{data.fromday}</p></div>
                        </div>
                        <div className="w-52">
                            <p><b>{TRIPS.Car.drop}</b></p>
                            <div className="flex"><p>{data.to}</p><p>-{data.drop}</p></div>
                            <div className="flex"><p>{data.todate}</p><p>{data.today}</p></div>
                        </div>
                        <div className="mt-3">
                            <div className="flex gap-2">
                                <img src={caricon} alt='busicon' />
                                <p>7 Seater</p>
                            </div>
                            <div className="flex gap-2">
                                <img src={adult} alt="adult" />
                                {travelerscount > 1 ? <p>{data.travelarname[0]}+ {travelerscount - 1}</p> : <p>{data.travelarname[0]}</p>}
                            </div>
                        </div>
                        <div className="mt-3">
                        <h4 className="font-poppinsRegular ml-16 text-[#0015D7] mt-6" onClick={handleClick}>Remarks</h4>
                        </div>
                    </div>
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
