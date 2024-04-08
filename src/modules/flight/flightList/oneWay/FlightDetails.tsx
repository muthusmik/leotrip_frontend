import React from "react";
interface AuthContainerProps {
    proceed: (isLogin: boolean, UserorEmail: string, isPassword?: boolean | undefined, OTPProps?: any) => void;
    close: () => void;

}
const FlightDetails = ({ close, proceed }: AuthContainerProps) => {
    return (
        <div className="bg-white p-5 rounded-xl">
            <div className="">
                <div className="bg-white shadow-lg h-10 border border-int-red flex py-auto">
                    <h1><span className="text-int-blue">3 Fare Options</span> available for your trip</h1>
                </div>                
            </div>

        </div>
    )
}
export default FlightDetails;   