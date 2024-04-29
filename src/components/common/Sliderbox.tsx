import Arrowright from '../../assets/icons/Arrowright.svg';

export function Box ({ offer }: any) {
    return (
        <div className="h-[175px] border my-[3%] mx-[2%] rounded-2xl shadow-xl p-3">
            <div className="flex font-poppinsRegular w-[400px]  ">
                <img src={offer.image} alt= {offer.title} className="h-24 w-24 md:h-32 md:w-32 rounded-lg" />
                

                <div className="w-full pl-2">
                    <p className='text-xs text-light-black text-end'>T&C's Apply</p>
                    <span className="font-PoppinsSemiBold text-xs md:text-sm">{offer.title}<br /></span>
                    <p className='w-[15%] border border-int-red my-2'></p>
                    <span className=" text-sm sm:text-base md:text-lg font-bold">{offer.description}</span>
                </div>
            </div>
            {/* <div className="border-t-2 border-dashed border-gray-300 w-full">
                <div className="mx-auto text-center grid grid-flow-row-1 grid-flow-col gap-0 w-36 mt-1"> */}
                    <div className="text-base sm:text-lg md:text-xl py-1 font-poppinsRegular text-int-blue text-end pe-2 ">Book Now</div>
                    {/* <img src={Arrowright} alt="arrow" className="mt-3 h-3" /> */}
                </div>
        //     </div>
        // </div>
    );
};

