import { useState } from "react";
import { PrimaryButton } from "styles/Button";
import SuccesIcon from "../../assets/icons/Success.svg"
import { isEmail } from "components/utils/common";
import { verifyOTP } from "components/utils/fireBase";


interface AuthSignUpProps {
    Back: () => void;
    UserAuthMedium: string;
    verifyOTPProps?: any; openDataModal: () => void;
}
export function AuthSignUp({ Back, UserAuthMedium, verifyOTPProps, openDataModal }: AuthSignUpProps) {
    const [OTP, setOTP] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [error, setError] = useState<string | null>('')
    const isPhone = isEmail(UserAuthMedium);
    const handleSubmit = async () => {
        try {
            const OTPVerified = await verifyOTP(verifyOTPProps, OTP);

            // Explicitly type OTPVerified based on the expected type
            const typedOTPVerified: {
                success: boolean;
                data: any; // Replace 'any' with the actual type of data
                error: string | null;
            } = OTPVerified as {
                success: boolean;
                data: any; // Replace 'any' with the actual type of data
                error: string | null;
            };

            if (typedOTPVerified.success === true) {
                console.log("hello");
                setVerified(true);
            } else {
                console.log("typedOTPVerified.error", typedOTPVerified.error)
                setError(typedOTPVerified.error);
                setVerified(false);
            }
        } catch (error: any) {
            console.log("Error in handleSubmit:", error);
            setError(error?.error)
            // Handle the error appropriately if needed
        }
    };


    const handleOTPChange = (e: any) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/\D/g, '');
        const limitedValue = numericValue.slice(0, 6);
        setOTP(limitedValue);
    };
    return (
        <div className="flex flex-col bg-white rounded-lg pb-5">
            {!verified && <>
                <div className="text-int-dark-blue mx-5 text-left mt-5 pt-5 uppercase font-bold text-sm cursor-pointer" onClick={() => Back()}>Back</div>

                <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
                    Enter OTP Sent to your {!isPhone ? 'Mobile Number' : "Email"} '<b>{UserAuthMedium}</b>'
                </div>
                <div className="justify-content w-full mt-[2%] items-center justify-between pb-[60%]  ">
                    <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                        <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Enter OTP</div>
                        <input type="numeric" value={OTP} onChange={(e) => handleOTPChange(e)} maxLength={6} className="border w-full mb-5 py-2 px-3 rounded" />
                        {error && <div className="text-red-500 text-xs font-semibold mb-2 mx-1 flex">{error}</div>}
                        <PrimaryButton block onClick={handleSubmit} >verify & create account</PrimaryButton>
                    </div>
                </div>
            </>
            }
            {verified &&
                <>
                    <div className="flex mx-2 py-4">
                        <img src={SuccesIcon} alt={''} className="w-14 " />
                        <div className="text-int-grey-90 ml-4  text-2xl mt-2  w-[80%] font-poppinsBold">
                            Congratulations!
                            Account created successfully
                        </div>
                    </div>

                    <div className="rounded-lg bg-int-green p-2 mx-4 text-[10px]">
                        We have Welcome offers for you ! Use the code <b>"LEOENTRY"</b>  and enjoy <b>upto  20%*</b> <br /> more savings on flights,hotels,bus& more.
                    </div>
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
                </>
            }
        </div>
    )
}