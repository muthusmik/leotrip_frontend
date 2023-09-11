import React, { forwardRef, useImperativeHandle, useRef } from "react";
import CustomDatePicker from "./CustomdatePicker";
import dateSvg from '../../assets/icons/datesvg.svg';

type DateSelectionProps = {
    label: string,
    modify: string,
    placeholder: string,
    maxDate: any,
    minDate: any,
    defaultDate: any,
    onSelect: (value: Date) => void
}

const DateSelectionComponent = forwardRef<any, DateSelectionProps>(
    ({ label, modify, placeholder, minDate, defaultDate, maxDate, onSelect }, ref) => {

        const inputRef = useRef<HTMLInputElement | null>(null);
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current?.focus();
            },
        }));

        return (
            <div className={`w-[20%] h-[70px] ${modify === 'true' ? "" : "bg-white rounded-[10px] border-2 border-black hover:border-orange-600"} `}>
                <div className="flex flex-row rounded-[16px] h-full w-full">
                    <div className="w-[15%] h-full">
                        <p className={`font-poppinsRegular relative bottom-3 left-3 text-center ${modify === "true" ? "bg-transparent" : 'bg-white'} ${(label === 'Travel Date' || label === 'Check-Out') ? 'w-[6rem]' : 'w-[5.4rem]'} `}>{label}</p>
                        {modify === "true" ? "" : <img src={dateSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3" />}
                    </div>
                    <div className={`w-[80%] flex flex-col justify-center ps-4 ${modify === "true" ? "" : "border-l-2 border-black hover:border-orange-600"}`}>
                        <div className="flex items-center w-full h-full">
                            <CustomDatePicker
                                onSelect={(e) => onSelect(e)}
                                ref={inputRef}
                                defaultDate={defaultDate}
                                minDate={minDate}
                                maxDate={maxDate}
                                placeholder={placeholder}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
export default DateSelectionComponent;