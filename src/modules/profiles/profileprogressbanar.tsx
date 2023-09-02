import tick from '../../assets/icons/tick-icon.svg';
import plus from '../../assets/icons/plus-icon.svg';

export default function ProfileProgressBanar() {
    return (
        <>
            <div className="h-16 w-[91.5%] m-10 mb-8 bg-gray-300 flex gap-20 px-14 pt-4">
                <div className="flex">
                    <img src={tick} alt="tick" className="h-9 mr-3" />
                    <p className="mt-1">Verified Email ID</p>
                </div>
                <div className="flex">
                    <img src={tick} alt="tick" className="h-9 mr-3" />
                    <p className="mt-1">Verified mobile Number</p>
                </div>
                <div className="flex">
                    <img src={plus} alt="plus" className="h-9 mr-3" />
                    <p className="mt-1">Complete Basic Info</p>
                </div>
            </div>
        </>
    );
}