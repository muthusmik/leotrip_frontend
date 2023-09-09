import timeSvg from '../../assets/icons/clock_svg.svg';

type TimeSelectionComponentProps = {
    label: string,
    modify: string,
    ref: any,
    onChange: (value: any) => void
}

const TimeSelectionComponent = ({ label, modify, ref, onChange }: TimeSelectionComponentProps) => {
    return (
        <div className={`h-[70px] min-w-[14%] max-w-[20%] ${modify === 'true' ? "" : "bg-white rounded-[10px] border-2 border-black hover:border-orange-600"}`}>
            <div className="flex flex-row rounded-[16px] h-full w-full">
                <div className="w-[15%] h-full">
                    <p className={`font-poppinsRegular relative bottom-3 left-3 ${modify === 'true' ? '' : 'bg-white'} text-center w-[6.5rem]`}>{label}</p>
                    {modify === 'true' ? "" : <img src={timeSvg} alt="error" className="w-[90px] h-[43px] relative bottom-3 px-1" />}
                </div>
                <div className={`w-[80%] flex flex-col justify-center ps-4 ${modify === 'true' ? "" : "border-l-2 border-black hover:border-orange-600"}`}>
                    <div className="flex items-center">
                        <input type="time" className={`w-full h-full outline-none ${modify === 'true' ? 'bg-white/30' : 'bg-transparent'}`} ref={ref} onChange={(e) => onChange(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeSelectionComponent;