import { Googlesignin, PrimaryButton } from "styles/Button";
import { IndicateSlider } from "components/common/IndicateSlider";
import { AuthForm } from "./AuthForm";
import { AuthLogin } from "./AuthLogin";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import useHTTPService from "components/utils/http";
import jwtDecode from "jwt-decode";
import { generateUUID } from "components/utils/GenerateId";


interface AuthContainerProps {
    proceed: (isLogin: boolean, UserorEmail: string, isPassword?: boolean | undefined, OTPProps?: any) => void;
    close: () => void;

}
function AuthContainer({ close, proceed }: AuthContainerProps) {
    const http = useHTTPService();
    const OAuthSignIn = async (credentialResponse: any) => {
        console.log("credentialResponse", credentialResponse.credential, jwtDecode(credentialResponse.credential));
        const Id = generateUUID();
        const result = await http.post('user/create', { token: credentialResponse.credential, deviceId: Id.uuid });
        console.log("result", result)
        close()
    }
    return (
        <div className="flex w-full h-[550px] bg-transparent">


            <div className="w-[45%] h-[95%] my-[2%] rounded-l-2xl  "  >
                <IndicateSlider />
            </div>
            <div className="w-[55%] flex items-center justify-between flex-col bg-white rounded-lg">
                <div className="justify-content w-full mt-[5%] ">
                    <div className="mb-1 relative items-center w-[80%] mx-[10%] py-5">
                        <div className=" mb-[2%] mt-[8%] text-[lg] font-bold">Email <span className="text-sm">or</span> Mobile Number</div>
                        <AuthForm proceed={proceed} />
                        <div className="flex items-center justify-center relative my-8">
                            <hr className="border-gray-300 flex-grow" />
                            <span className="bg-white px-2 text-gray-500">Or</span>
                            <hr className="border-gray-300 flex-grow" />
                        </div>
                        <div className=" w-[10%] mx-[45%] rounded-full items-center ">
                            <GoogleOAuthProvider clientId='309517142982-tvs9ff5g07bjhijg7m1fegvhfjeh6orc.apps.googleusercontent.com'>
                                <GoogleLogin
                                    onSuccess={credentialResponse => {
                                        OAuthSignIn(credentialResponse)
                                    }}
                                    onError={() => {
                                        console.log('Login Failed');
                                    }}

                                    theme="outline"
                                    text="continue_with"
                                    logo_alignment="center"
                                    shape="circle"
                                    type="icon"

                                />
                            </GoogleOAuthProvider>
                        </div>
                    </div>
                </div>
                <div className="text-xs mb-2">
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
        </div>
    );
}

export default AuthContainer;
