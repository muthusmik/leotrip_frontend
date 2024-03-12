import React, { useState } from "react";
import { PrimaryButton } from "styles/Button";
import PhoneInput, { CountryData } from "react-phone-input-2";
import 'react-phone-input-2/lib/bootstrap.css';
import Error from "../../assets/icons/error-indicator.svg";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "firebaseConfig";
import User from "components/common/About/User";
import { FirebaseSendOTP } from "components/utils/fireBase";
import useHTTPService from "components/utils/http";
import { Countries } from "libphonenumber-js/types";
import { isEmail, isMobile } from "components/utils/common";

interface AuthFormProps {
    proceed: (isLogin: boolean, UserorEmail: string, isPassword?: boolean | undefined, OTPProps?: any) => void;
}


export function AuthForm({ proceed }: AuthFormProps) {
    const [UserEmailorPhone, setUserEmailorPhone] = useState<any>('');
    const [error, setError] = useState<string>('');
    const [loader, setLoader] = useState<boolean>(false);
    const http = useHTTPService();

    //Verify API call
    const VerifyRegister = async (body: any) => {
        return await http.post('user/verify-register', body);
    }
    //OnSubmit UserEmailorPhone && verify Register and proceed as result .
    const handleClick = async () => {
        setError("");
        setLoader(true);
        console.log(isMobile(UserEmailorPhone), isEmail(UserEmailorPhone))
        if (isMobile(UserEmailorPhone)) {
            const recaptchaContainer = document.getElementById("recaptcha-container");
            if (recaptchaContainer) {
                const IsLoginOrSignUp = await VerifyRegister({ "phoneNo": UserEmailorPhone });
                const SentOtp = await FirebaseSendOTP(auth, UserEmailorPhone, recaptchaContainer)
                if (SentOtp) {
                    setLoader(false)
                    if (IsLoginOrSignUp.statusCode === 201) {
                        proceed(IsLoginOrSignUp.data.existingUser, UserEmailorPhone, undefined, SentOtp)
                    } else if (IsLoginOrSignUp.statusCode === 200) {
                        proceed(IsLoginOrSignUp.data.existingUser, UserEmailorPhone, IsLoginOrSignUp.data.isPassword, SentOtp)
                    }
                } else {
                    setLoader(false);
                    setError("Unable to Send OTP")
                }
            } else { setLoader(false); setError("Something Went Wrong! Please Try Again"); }

        } else if (isEmail(UserEmailorPhone)) {

            const IsLoginOrSignUp = await VerifyRegister({ "email": UserEmailorPhone });
            if (IsLoginOrSignUp.statusCode === 201) {
                proceed(IsLoginOrSignUp.data.existingUser, UserEmailorPhone, undefined)
            } else if (IsLoginOrSignUp.statusCode === 200) {
                proceed(IsLoginOrSignUp.data.existingUser, UserEmailorPhone, IsLoginOrSignUp.data.isPassword)
            }

        }
        else {
            setLoader(false)
            setError("Invalid Email or Mobile Number");
        }
    };
    //Onchange UserEmailorPhone
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: any = e.target.value;
        if (inputValue.length > 4 && /^\d+$/.test(inputValue)) {
            setUserEmailorPhone(`+91${inputValue}`);
        } else if (inputValue.length < 5 && e.target.name === "phone") { setUserEmailorPhone('') }
        else { setUserEmailorPhone(inputValue); }
    };


    return (
        <div>
            {UserEmailorPhone.length > 4 && !isNaN(UserEmailorPhone.substr(0, 4)) ? (

                <PhoneInput
                    value={UserEmailorPhone}
                    inputProps={{
                        autoFocus: true,
                        name: 'phone',
                        placeholder: '',
                        type: 'phone',
                        alwaysDefaultMask: true,
                        onChange: handleInputChange,


                    }}
                    
                    inputStyle={{ width: "100%", fontSize: "18px"}}
                    containerStyle={{ width: "100%", marginBottom: "1%",}}
                />
            ) : (
                <input
                    name="Email"
                    type="email"
                    placeholder="Enter Email or Mobile"
                    value={UserEmailorPhone}
                    onChange={handleInputChange}
                    className="w-full h-[50px] mb-1 py-2 px-3 rounded outline-none border transition-all duration-300 focus:shadow shadow-int-mid-blue focus:border-int-dark-blue"

                />
            )}
            <div  id="recaptcha-container"></div>
            {error && <div className="text-red-500 text-xs font-semibold mb-2 mx-1 flex">
                <img src={Error} alt={''} className='w-4 mx-1' />
                {error}</div>}
            <PrimaryButton block onClick={handleClick} loading={loader}>GENERATE OTP (One Time Password)</PrimaryButton>
        </div>
    );
}
