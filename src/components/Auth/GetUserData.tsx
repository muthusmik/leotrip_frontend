import { useState } from "react";
import { PrimaryButton } from "styles/Button";
import SuccesIcon from "../../assets/icons/Success.svg"
import { isEmail } from "components/utils/common";
import { verifyOTP } from "components/utils/fireBase";


interface GetUserdataProps {
    Back: () => void;

}
export function GetUserData({ Back }: GetUserdataProps) {


    return (
        <div className="flex flex-col bg-white rounded-lg pb-5">
            {/* <div className="flex mx-2 py-4">
                <img src={SuccesIcon} alt={''} className="w-14 " />
                <div className="text-int-grey-90 ml-4  text-2xl mt-2  w-[80%] font-poppinsBold">
                    Congratulations!
                    Account created successfully
                </div>
            </div> */}

            {/* <div className="rounded-lg bg-int-green p-2 mx-4 text-[10px]">
                We have Welcome offers for you ! Use the code <b>"LEOENTRY"</b>  and enjoy <b>upto  20%*</b> <br /> more savings on flights,hotels,bus& more.
            </div> */}
            <div className="justify-content w-full mt-[2%] items-center justify-between pb-[30%]  ">
                <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                    <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Enter FullName</div>
                    <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                    <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Enter Password</div>
                    <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                    <PrimaryButton block >Save & Proceed</PrimaryButton>
                    <div className="text-center cursor-pointer">Skip</div>
                </div>
            </div>
        </div>
    )
}