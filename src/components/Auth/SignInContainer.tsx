import { Googlesignin, PrimaryButton } from "styles/Button";
import { IndicateSlider } from "components/common/IndicateSlider";
import { AuthForm } from "./AuthForm";
import { AuthLogin } from "./AuthLogin";
import { useEffect, useState } from "react";


interface SignInContainerProps {
    proceed: () => void;
    close: () => void;
    signUp: () => void;
}
function SignInContainer({ close, proceed, signUp }: SignInContainerProps) {


    return (
        <div className="flex w-full h-[550px] bg-transparent">


            <div className="w-[45%] h-[95%] my-[2%] rounded-l-2xl  "  >
                <IndicateSlider />
            </div>
            <AuthForm proceed={() => proceed()} signUp={() => signUp()} />

        </div>
    );
}

export default SignInContainer;
