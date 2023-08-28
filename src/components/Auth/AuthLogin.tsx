import { useState } from "react";
import { PrimaryButton } from "styles/Button";


interface AuthLoginProps {
    Back: () => void;
}
export function AuthLogin({ Back }: AuthLoginProps) {
    const [IsPassword, setIsPassword] = useState(true)
    return (
        <div className="flex flex-col bg-white rounded-lg pb-5">
            <div className="text-int-dark-blue mx-5 text-left mt-5 pt-5 uppercase font-bold text-sm cursor-pointer" onClick={() => Back()}>Back</div>
            {IsPassword ? <>
                <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
                    Login With Password
                </div>
                <div className="text-int-grey-90 ml-5 text-sm">For account ragu***456@gmail.com</div>
                <div className="justify-content w-full mt-[2%] items-center justify-between  ">
                    <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                        <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Password</div>
                        <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                        <PrimaryButton block >LOGIN</PrimaryButton>
                        <div className="flex items-center justify-center relative my-8">
                            <span className="bg-white px-2 text-int-dark-blue cursor-pointer text-sm" onClick={() => setIsPassword(false)}>Or Login via OTP</span>
                        </div>
                    </div>
                </div>
            </>
                :
                <>
                    <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
                        Verify Your E-mail ID
                    </div>
                    <div className="text-int-grey-90 ml-5 text-sm">OTP has been sent to MOBILE & EMAIL</div>
                    <div className="justify-content w-full mt-[2%] items-center justify-between  ">
                        <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                            <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">OTP</div>
                            <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                            <PrimaryButton block >LOGIN</PrimaryButton>
                            <div className="flex items-center justify-center relative my-8">
                                <span className="bg-white px-2 text-int-dark-blue cursor-pointer text-sm" onClick={() => setIsPassword(true)}>Or Login via Password</span>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div className="text-xs mx-2 mb-2 pb-2 text-center mt-32">
                By proceeding, you agree to LeoTrip{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    Privacy Policy
                </a>
                ,{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    User Agreement
                </a>
                , and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                    T&Cs
                </a>
            </div>
        </div>
    )
}