import { Googlesignin, PrimaryButton } from "styles/Button";

interface AuthFormProps {
    proceed: () => void;
    signUp: () => void;
}

export function AuthForm({ proceed, signUp }: AuthFormProps) {
    const handleClick = () => {
        proceed()
    }
    return (
        <div className="w-[55%] flex items-center justify-between flex-col bg-white rounded-lg">
            <div className="justify-content w-full mt-[5%] ">
                <div className="mb-1 relative items-center w-[80%] mx-[10%] py-5">
                    <div className=" mb-[2%] mt-[10%] text-[lg] font-bold">Email <span className="text-sm">or</span> Mobile Number</div>
                    <input type="text" className="border w-full mb-5 py-2 px-3 rounded" />
                    <PrimaryButton block onClick={() => handleClick()} >Sign In</PrimaryButton>
                    <div className="flex items-center justify-center relative my-8">
                        <hr className="border-gray-300 flex-grow" />
                        <span className="bg-white px-2 text-gray-500">Or</span>
                        <hr className="border-gray-300 flex-grow" />
                    </div>
                    <Googlesignin onClick={() => signUp()} />
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
    )
}