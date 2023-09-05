import React from "react";
import book from 'assets/images/icons8-delete-ticket-96 (1) 1.svg'
import bus from 'assets/icons/bus-nav.svg'
import arrow from 'assets/images/Arrow 45.svg'
import tick from 'assets/images/icons8-clock-50 2.svg'
const Cancel = ({ data }: any) => {
    return (
        <div>
            <div className="border m-5 bg-gradient-to-b from-white via-[#6AB0DC] to-[#52A0D2] rounded-2xl">
                <div className="h-fit flex ms-5 mt-3">
                    <img src={bus} alt="404" className="w-[30px] h-[30px]" />
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
                <div className="bg-[#D9D9D9] text-md ps-5 py-3 rounded-tl-none rounded-tr-none rounded-bl-2xl rounded-br-2xl">
                    <p className="font-poppinsRegular text-sm">Date: {data.date} - {data.day}</p>
                </div>
            </div>
        </div>
    );
}

export default Cancel;
