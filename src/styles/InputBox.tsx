import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faEyeSlash, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import InfoBubble from "./InfoBubble";

type InputBoxProps = {
    label: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: any;
    className: string;
}

export default function InputBox({ label, type, id, name, value, onChange, error, className }: InputBoxProps) {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <label className="font-interMedium">{label}</label>
            <div className={`custom-button ${className}`}>
                <input
                    type={showPassword ? "text" : type}
                    id={id}
                    name={name}
                    className={'ms-2 w-[85%] h-full focus:outline-none '}
                    value={value}
                    onChange={onChange}
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="ms-3"
                    // className="absolute right-0 top-1/2 transform -translate-y-1/2"
                    >
                        {showPassword ? (
                            <FontAwesomeIcon icon={faEyeSlash} color={"black"} />
                        ) : (
                            <FontAwesomeIcon icon={faEye} color={"black"} />
                        )}
                    </button>
                )}
            </div>
            <div className="w-full flex items-center">
                <p className="text-red">{error}{" "}</p>
                {/* {error === "Invalid password" && (
                    <InfoBubble message={"Password should have at least 8 characters long, contains at least one uppercase letter, one lowercase letter, one digit, and one special character"} />
                )} */}
            </div>

        </>
    )
}