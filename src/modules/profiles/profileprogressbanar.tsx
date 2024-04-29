import tick from '../../assets/icons/tick-icon.svg';
import plus from '../../assets/icons/plus-icon.svg';

export default function ProfileProgressBanar() {
    return (
        <>

            <div className="h-fit m-10 mb-8 bg-gray-300 flex flex-col md:flex-row gap-3 md:gap-5 px-5 pt-2 pb-2 text-sm sm:text-md">
                <div className="flex mb-3 md:mb-0">
                    <img src={tick} alt="tick" className="h-9 mr-3" />
                    <p className="mt-1 max-w-[calc(100%-3rem)]">Verified Email ID</p>
                </div>
                <div className="flex mb-3 md:mb-0">
                    <img src={tick} alt="tick" className="h-9 mr-3" />
                    <p className="mt-1 max-w-[calc(100%-3rem)]">Verified Mobile Number</p>
                </div>
                <div className="flex mb-3 md:mb-0">
                    <img src={plus} alt="plus" className="h-9 mr-3" />
                    <p className="mt-1 max-w-[calc(100%-3rem)]">Complete Basic Info</p>
                </div>
            </div>




        </>
    );
}