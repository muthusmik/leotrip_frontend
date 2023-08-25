import Arrowright from '../../assets/icons/Arrowright.svg';

export function Box ({ offer }: any) {
    return (
        <div className="h-[175px] border my-[3%] mx-[2%] rounded-2xl shadow-xl">
            <div className="flex font-poppinsRegular w-[340px]">
                <img src={offer.image} alt={offer.title} className="h-32 w-32" />
                <div className="mt-4 w-full">
                    <span className="font-PoppinsSemiBold text-[22px]">{offer.title}<br /></span>
                    <span className="text-sm">{offer.description}</span>
                </div>
            </div>
            <div className="border-t-2 border-dashed border-gray-300 w-full">
                <div className="mx-auto text-center grid grid-flow-row-1 grid-flow-col gap-0 w-36 mt-1">
                    <p className="text-lg py-1 font-poppinsRegular text-int-brown">Book Now </p>
                    <img src={Arrowright} alt="arrow" className="mt-3 h-3" />
                </div>
            </div>
        </div>
    );
};

