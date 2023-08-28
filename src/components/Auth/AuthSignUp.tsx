import { useState } from "react";
import { PrimaryButton } from "styles/Button";


interface AuthSignUpProps {
    Back: () => void;
}
export function AuthSignUp({ Back }: AuthSignUpProps) {
    return (
        <div className="flex flex-col bg-white rounded-lg pb-5">
            <div className="text-int-dark-blue mx-5 text-left mt-5 pt-5 uppercase font-bold text-sm cursor-pointer" onClick={() => Back()}>Back</div>
            <>
                <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
                    Enter OTP
                </div>
                <div className="justify-content w-full mt-[2%] items-center justify-between pb-[60%]  ">
                    <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                        <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Enter OTP</div>
                        <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                        <PrimaryButton block >verify & create account</PrimaryButton>
                    </div>
                </div>
            </>
        </div>
    )
}