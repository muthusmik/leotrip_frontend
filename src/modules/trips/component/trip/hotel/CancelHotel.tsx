import React from "react";
import hotel from 'assets/icons/hotel-nav.svg'
import { Generateotp } from "styles/Button";
import { TRIPS } from "components/utils/constants/stringconstants/common";
import adult from '../../../../../assets/icons/adult.svg';
import hotelicon from '../../../../../assets/icons/hotel-icon.svg';


const Car = ({ data }: any) => {

    const travelerscount = data.travelarname.length;

    return (
        <div>
            <div className="border m-5 bg-gradient-to-b from-white via-[#6AB0DC] to-[#52A0D2] rounded-2xl">
                <div className="flex ms-5 mt-3 w-full">
                    <img src={hotel} alt="404" className="w-[30px] h-[30px]" />
                    <div className="w-[62%]">
                        <h4 className="font-poppinsRegular ps-[10%] mt-2">{data.hotel}</h4>
                    </div>
                    <div className="ml-auto mr-10 mt-2">
                        <Generateotp view>
                            View Booking
                        </Generateotp>
                    </div>
                </div>
                <p className="font-poppinsRegular text-xs ps-[12%] mb-2">Booking ID : {data.bookingid}</p>
                <div className="bg-[#D9D9D9] text-md ps-5 py-3 rounded-bl-[14px] rounded-br-[14px]">
                    <div className='flex gap-x-5 bg-'>
                        <div className="w-52">
                            <p><b>{TRIPS.hotel.checkin}</b></p>
                            <div className="flex"><p>{data.fromdate}</p><p>-{data.fromday}</p></div>
                            <div className="text-xs">{TRIPS.hotel.checkintime}</div>
                        </div>
                        <div className="w-52">
                            <p><b>{TRIPS.hotel.checkout}</b></p>
                            <div className="flex"><p>{data.todate}</p><p>-{data.today}</p></div>
                            <div className="text-xs">{TRIPS.hotel.checkouttime}</div>
                        </div>
                        <div className="mt-3">
                            <div className="flex gap-2">
                                <img src={hotelicon} alt='busicon' />
                                <p>{data.room}</p>
                            </div>
                            <div className="flex gap-2">
                                <img src={adult} alt="adult" />
                                {travelerscount > 1 ? <p>{data.travelarname[0]}+ {travelerscount - 1}</p> : <p>{data.travelarname[0]}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Car;
