import Navbar from "components/common/ListingNavbar";
import Pages from "components/common/Pages";
import BookingInfo from "./BookingInfo";
import TripSecure from "./TripSecure";
import PriceSummary from "./PriceSummary";
import CouponCode from "./CouponCode";
import AddPassenger from "components/common/AdultDetails";
import AdultDetails from "components/common/AdultDetails";
import ChildDetails from "components/common/ChildDetails";
// import { useState } from "react";

const HotelReview = () => {
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>
            <Navbar />
            <div className="bg-[#DEF2FF] font-poppinsRegular">
                <Pages />
                {/* BookingInfo */}
                <div className="flex flex-col md:flex-row justify-between ">
                    <div className="w-fit  md:w-7/12 lg:w-8/12 m-5 pb-3 text-sm">
                        <BookingInfo />
                        <div className="bg-white my-5 pb-5">
                            <h1 className="pl-2 py-3 font-bold">GUEST DETAILS</h1>
                            <div className="mx-5">
                            <AdultDetails/>
                            </div>
                            <div className="mx-5">
                            <ChildDetails/>
                            </div>
                        </div>
                        
                        <TripSecure />
                    </div>
                    <div className="w-fit md:w-5/12 lg:w-4/12 my-5 mx-auto md:mx-5">
                        <PriceSummary />
                        <CouponCode />
                    </div>
                </div>
                

                {/* Model */}
                {/* <div>
                    <div className="flex flex-col md:flex-row justify-between">
                    <button onClick={() => setModalIsOpen(true)} className="block md:hidden text-end">Open Modal</button>

                        <div className="w-fit m-5 pb-3 text-sm">
                            <BookingInfo />
                            <TripSecure />
                        </div>
                        <div className="w-fit  md:w-5/12 lg:w-4/12 m-5 mx-auto md:block hidden">
                            <PriceSummary />
                            <CouponCode />
                        </div>
                    </div>
                    <ModalFullHeight active={modalIsOpen} closeModal={() => setModalIsOpen(false)}>
                        <div className="w-full md:w-auto md:w-5/12 lg:w-4/12 m-5 mx-auto">
                            <PriceSummary />
                            <CouponCode />
                        </div>
                    </ModalFullHeight>
                </div> */}

                
            </div>
        </>
    )
}
export default HotelReview;