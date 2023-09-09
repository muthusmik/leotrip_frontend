import React from 'react';
import CustomSelect from './CarSelectTripType';

type TripSelectionComponentProps = {
    label: string,
    modify: string,
    tripType: string,
    onChange: (value: any) => void,
    ref: any
}

const selectTripType = [
    { value: 'fromAirport', label: 'From Airport' },
    { value: 'toAirport', label: 'To Airport' },
]

const optionTextColor = 'text-black'

const TripSelectionComponent = ({ label, modify, tripType, onChange, ref }: TripSelectionComponentProps) => {
    return (
        <div className={`${modify === 'true' ? "" : "bg-white rounded-[10px] border-2 border-black hover:border-orange-600"} min-w-[20%] max-w-[26%] h-[70px]`}>
            <div className="flex flex-row rounded-[16px] h-full px-2 w-full">
                <div className="w-[5%]">
                    <p className={`font-poppinsRegular relative bottom-3 ${modify === "true" ? "" : "bg-white"} text-center w-[140px]`}>{label}</p>
                </div>
                <div className={`w-[100%] flex flex-col justify-center px-2`}>
                    <div className="flex items-center">
                        <select name="" id="" defaultValue={tripType} className={`w-full h-full outline-none text-white font-poppinsRegular text-lg cursor-pointer ${modify === 'true' ? "bg-white/30" : ""}`} onChange={(e) => onChange(e.target.value)} ref={ref}>
                            <option value="fromAirport" className={optionTextColor}>From Airport</option>
                            <option value="toAirport" className={optionTextColor}>To Airport</option>
                        </select>
                    </div>
                    {/* <CustomSelect options={selectTripType} onSelect={handleSelectValue} ref={selectRef} /> */}
                </div>
            </div>
        </div>
    )
}

export default TripSelectionComponent;