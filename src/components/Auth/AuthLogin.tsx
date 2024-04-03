import { useState } from "react";
import { PrimaryButton } from "styles/Button";

interface AuthLoginProps {
  Back: () => void;
  UserAuthMedium: string;
  verifyOTPProps?: any;
  isPassword: boolean;
  openDataModal: () => void;
}

export function AuthLogin({
  Back,
  UserAuthMedium,
  verifyOTPProps,
  isPassword,
  openDataModal,
}: AuthLoginProps) {
  const [defaultShowPassword, setDefaultShowPassword] = useState(true);
  const [loginPassword, setloginPassword] = useState<any>("");
  console.log(
    "props",
    Back,
    "t",
    UserAuthMedium,
    "t",
    verifyOTPProps,
    "t",
    isPassword
  );
  return (
    <div className="flex flex-col bg-white rounded-lg pb-5">
      <div
        className="text-int-dark-blue mx-5 text-left mt-5 pt-5 uppercase font-bold text-sm cursor-pointer"
        onClick={() => Back()}
      >
        Back
      </div>
      {isPassword && defaultShowPassword ? (
        <>
          <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
            Login With Password
          </div>
          <div className="text-int-grey-90 ml-5 text-sm">
            For account {UserAuthMedium}
          </div>
          <div className="justify-content w-full mt-[2%] items-center justify-between  ">
            <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
              <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">
                Password
              </div>
              <input
                type="text"
                placeholder="Enter Password"
                value={loginPassword}
                onChange={(e) => setloginPassword(e)}
                className="w-full mb-5 py-2 px-3 rounded outline-none border transition-all duration-300 focus:shadow shadow-int-mid-blue  focus:border-int-dark-blue"
              />

              <PrimaryButton block onClick={() => openDataModal()}>
                LOGIN
              </PrimaryButton>
              <div className="flex items-center justify-center relative my-8">
                <span
                  className="bg-white px-2 text-int-dark-blue cursor-pointer text-sm"
                  onClick={() => setDefaultShowPassword(false)}
                >
                  Or Login via OTP
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-int-grey-90 ml-5 text-2xl mt-2 font-poppinsBold">
            Verify Your E-mail ID
          </div>
          <div className="text-int-grey-90 ml-5 text-sm">
            OTP has been sent to MOBILE & EMAIL
          </div>
          <div className="justify-content w-full mt-[2%] items-center justify-between  ">
            <div className="mb-1 relative items-center w-[90%] mx-[5%] py-2">
              <div className=" mb-[2%] mt-[1%] text-[lg] font-bold">OTP</div>
              <input
                type="text"
                className="border w-full mb-5 py-2 px-3 rounded"
              />
              <PrimaryButton block onClick={() => openDataModal()}>
                LOGIN
              </PrimaryButton>
              {isPassword && (
                <div className="flex items-center justify-center relative my-8">
                  <span
                    className="bg-white px-2 text-int-dark-blue cursor-pointer text-sm"
                    onClick={() => setDefaultShowPassword(true)}
                  >
                    Or Login via Password
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
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
  );
}
