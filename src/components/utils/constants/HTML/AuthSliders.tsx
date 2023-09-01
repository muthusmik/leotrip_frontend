import Airplane from "../../../../assets/icons/airplane.svg";
import Hotel from "../../../../assets/icons/hotels.svg";
import Bus from "../../../../assets/icons/bus.svg";
import LeoWhite from "../../../../assets/icons/Leo-white.svg";


export const SlideFirst = () => {
    return (

        <div className="h-full rounded-l-lg bg-slate-950/50 text-white font-poppinsBold animate-slide-in-top">
            <div className="text-white text-2xl font-poppinsBold pt-[20%] mb-8 ml-2 text-leftanimate-slide-in-top">SignUp Now to </div>
            <div className="flex flex-row mx-2 mt-2 animate-slide-in-top">
                <div className="w-8 mx-3">
                    <img src={Airplane} alt={''} />
                </div>
                <div className="flex flex-col text-left">
                    <div className="text-white text-md font-poppinsBold ml-4">
                        FLAT 5% OFF
                    </div>
                    <div className="text-white text-sm font-poppinsRegular ml-4">
                        On Domestic Flights*
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-[5%] mt-2" />
            <div className="flex flex-row  mx-2 mt-2">
                <div className="w-8 mx-3">
                    <img src={Bus} alt={''} />
                </div>
                <div className="flex flex-col text-left">
                    <div className="text-white text-md font-poppinsBold ml-4">
                        Up To Rs.300 OFF
                    </div>
                    <div className="text-white text-sm font-poppinsRegular ml-4">
                        On Your First BusBooking
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-[5%] mt-2" />
            <div className="flex flex-row  mx-2 mt-2">
                <div className="w-8 mx-3">
                    <img src={Hotel} alt={''} />
                </div>
                <div className="flex flex-col text-left">
                    <div className="text-white text-md font-poppinsBold ml-4">
                        FLAT 20% OFF
                    </div>
                    <div className="text-white text-sm font-poppinsRegular ml-4">
                        On Your First Hotel Stay
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-[5%] mt-2" />

            <div className="text-white text-lg font-poppinsBold mt-[5%] ml-2 text-center">COUPON CODE: LEOENTRY </div>

        </div>
    )
}
export const SlideThird = () => {
    return (

        <div className="h-full rounded-l-lg bg-slate-950/50 text-white font-poppinsBold text-left items-center justify-content p-4">
            <div className=" border-2 border-int-white px-8 py-1 w-[90%] mt-[45%] mx-[5%] ">
                <div className="text-white text-2xl font-poppinsBold pt-[2%] ">Sign Up Now and Join in our</div>
                <div className="flex">
                    <div className="text-white text-[35px] font-poppinsBold mt-1">LEO Trip  </div>
                    <div className="w-10 mx-2 mt-4">
                        <img src={LeoWhite} alt={''} />
                    </div>
                </div>
                <div className="text-white text-[35px] font-poppinsBold mt-1">Community
                </div>
            </div>
        </div>
    )
}
export const SlideSecond = () => {
    return (

        <div className="h-full rounded-l-lg bg-slate-950/50 text-white font-poppinsBold   ">


            <div className="text-white text-md font-poppinsBold pt-[35%]   ml-4">Discover & Book Amazing Trips </div>
            <div className="text-white text-sm font-poppinsRegular ml-4 mt-1">On Darring Offer Prices</div>
            <hr className="w-[90%] mx-[5%] mt-2" />
            <div className="text-white text-md font-poppinsBold pt-[5%]   ml-4"> Explore Nature's Beauty</div>
            <div className="text-white text-sm font-poppinsRegular ml-4 mt-1">Immerse yourself in breathtaking landscapes and scenic views.</div>
            <hr className="w-[90%] mx-[5%] mt-2" />
            <div className="text-white text-md font-poppinsBold pt-[5%]   ml-4">Plan Your Getaway</div>
            <div className="text-white text-sm   font-poppinsRegular ml-4 mt-1">Find the best travel deals and create unforgettable memories.</div>
            <hr className="w-[90%] mx-[5%] mt-2" />

        </div>
    )
}