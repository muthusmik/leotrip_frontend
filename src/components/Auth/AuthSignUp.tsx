import { useState } from "react";
import { PrimaryButton } from "styles/Button";
import SuccesIcon from "../../assets/icons/Success.svg"
import { isEmail } from "components/utils/common";
import { verifyOTP } from "components/utils/fireBase";
import offer from '../../assets/images/offer.png';


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
            setVerified(true);
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
        <div className="flex w-full h-[550px] bg-white border-8 border-gray-400">
            <div className="w-[45%] h-[100%]  rounded-l-2xl my-0"  >
                {/* <IndicateSlider /> */}
                <img src={offer} alt="offer" className="w-[100%] h-[100%]" />
            </div>
            <div className="w-[55%] h-[93%] flex flex-col items-center justify-between bg-white rounded-lg pb-5">
                <div className="justify-content w-full mt-[5%] ">
                    <div className="mb-1 relative items-center w-[80%] mx-[10%]">
                        {!verified && <>
                            {/* <div className="text-int-dark-blue mx-5 text-left mt-5 pt-5 uppercase font-bold text-sm cursor-pointer" onClick={() => Back()}>Back</div> */}
                            {/* <div id="resend-recaptcha"></div> */}
                            <h4 className='fw-bold text-center text-4xl font-poppins pb-[10%]'>Enter OTP</h4>
                            <p className='text-center text-white mb-0' style={{backgroundColor:'#059f05'}}>OTP sent again</p>

                            <div className="text-int-grey-90 text-muted   mt-2 font-poppins">
                                Mobile Number :+91{!isPhone ? 'Mobile Number' : 'Email'} <b>{UserAuthMedium}</b><br/>
                                <small className='text-muted  ps-[90%] text-lg'>Edit</small>
                            </div>
                            <div className="justify-content w-full mt-[2%] items-center justify-between pb-[10%] ">
                                <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
                                    {/* <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">Enter OTP</div> */}
                                    <input type="numeric" value={OTP} onChange={(e) => handleOTPChange(e)} maxLength={6} placeholder='Enter otp'className="border border-black w-full mb-5 py-2 px-3 rounded text-sm font-poppins" />
                                    {error && <div className="text-red-500 text-xs font-semibold mb-2 mx-1 flex">{error}</div>}
                                    <PrimaryButton block onClick={handleSubmit} >confirm</PrimaryButton>
                                </div>
                            </div>
                            <div className="countdown-text ">
                                {/* {seconds > 0 || minutes > 0 ? (
                                    <p>
                                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                                        {seconds < 10 ? `0${seconds}` : seconds}
                                    </p>
                                ) : (
                                    <p className='text-center pt-2'>Didn't recieve code?</p>
                                )} */}

                                <p className='text-center pb-[17%]'
                                    // disabled={seconds > 0 || minutes > 0}
                                    // style={{
                                    //     cursor: "pointer", color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#3A3A3A",textDecoration: "none",borderBottom: "1px solid transparent"
                                    // }}
                                    // onClick={(e) => {resendOTP(e);
                                    //     e.target.style.borderBottom = "1px solid #000"; // Add underline on click
                                    // }}
                                >
                                    resend otp
                                </p>
                                <p className='text-center pt-[5%] text-sm'>Try other way to <a className='no-underline text-sky-500'>sign in</a></p>
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
                </div>
            </div>
        </div>
    )
}