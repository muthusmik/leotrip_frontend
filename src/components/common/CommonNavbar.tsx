import { Link } from "react-router-dom";
import { ReactComponent as Leo } from "../../assets/icons/LeoLogo.svg";
import { Avatar } from "./Avatar";
import { useState } from "react";

function CommonNavbar() {
    const [isOpenAuthModal, setIsOpenAuthModal] = useState<boolean>(false);
    console.log("isOpenAuthModal",isOpenAuthModal);

    return (
        <div className="bg-transparent">
            <div className="flex justify-between items-center">
                <Link to="/" className="">
                    <Leo className="w-10 h-auto" />
                </Link>
                <div className="">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}
export default CommonNavbar;
