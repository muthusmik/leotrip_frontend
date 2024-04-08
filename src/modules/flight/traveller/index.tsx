
import Navbar from "components/common/ListingNavbar";
import YourPageComponent from "components/common/Pages";
import CouponCode from "modules/hotel/hotelreview/CouponCode";
import FlightDetails from "./FlightDetails";
import FlightPriceSummary from "./FlightPriceSummary";
import TravellerDetails from "./TravellerDetails";
import AddressForm from "./AddressForm";
import ContactInformation from "./ContactInfomation";
import mastercard from '../../../assets/images/mastercard.png';
import rupay from '../../../assets/images/RuPay.png';
import visa from '../../../assets/images/visacard.png';
import paypal from '../../../assets/images/paypal.png';

const Traveller = () => {

    return (
        <>
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="bg-[#DEF2FF] h-full">
                    <div className="flex flex-row h-full py-2">
                        <YourPageComponent />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between ">
                        <div className="w-fit  md:w-7/12 lg:w-8/12 m-5 pb-3 text-sm">
                            <FlightDetails />
                            <TravellerDetails />
                            <div className="bg-white my-5">
                                <AddressForm />
                            </div>
                            <div className="my-5">
                                <ContactInformation />
                            </div>
                        </div>

                        <div className="w-fit md:w-5/12 lg:w-4/12 my-5 mx-auto md:mx-5">
                            <FlightPriceSummary />
                            <CouponCode />
                        </div>
                    </div>
                </div>
                <div className='flex w-full bg-gray-300 pb-2 '>
                    <img src={mastercard} alt='mastercard' className='w-10 h-6 mt-3 mr-3 lg:mr-10' />
                    <img src={visa} alt='visa' className='w-10 h-6  mt-3 mr-3 lg:mr-10' />
                    <img src={paypal} alt='paypal' className='w-10 h-6  mt-3 mr-3 lg:mr-10' />
                    <img src={rupay} alt='rupay' className='w-10 h-6  mt-3 ' />
                </div>
            </div>

        </>

    );
}
export default Traveller;  