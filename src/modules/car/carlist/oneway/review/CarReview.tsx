import { useLocation } from "react-router-dom";

const CarReview = (props: any) => {
    const location = useLocation();
    const car = location.state;
    console.log("car", car)
    return (
        <>
            <div className="w-[70%] mx-5 font-poppinsRegular">
                <div className='border-4 hover:border-blue-200 bg-white w-full flex flex-col md:flex-row px-5 py-7 rounded-lg mb-4'>
                    <div className='w-full md:w-[20%] flex justify-center md:justify-start'>
                        <img src={car.car_image} alt={car.car_model} className='rounded-lg' style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    </div>
                    <div className='w-full md:w-[70%] ps-2 pt-4 md:pt-0 md:pl-4'>
                        {/* <div className='flex flex-col md:flex-row items-center justify-between'> */}
                        <div className='flex items-center mt-3'>
                            <h2 className='font-bold'>{car.car_model}</h2>
                            <p><small className='border bg-gradient-to-l from-bg-blue-start to-bg-blue-end rounded-md p-1 ms-2'>{car.rating}</small> <small className='text-light-black'>({car.total_ratings} ratings)</small></p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <p className='font-semibold pe-2'>{car.body_type}</p>
                            <p>{car.features.join(', ')}</p>
                        </div>
                        {/* </div> */}
                        <h1 className='font-semibold py-3'>{car.car_type}</h1>
                        <table className='w-full'>
                            <tbody>
                                <tr className='mt-10 font-semibold'>
                                    <td className=''>Extra km Fare:</td>
                                    <td className='ps-10'>₹{car.pricing.extra_km_fare.per_km_charge}/km after {car.pricing.extra_km_fare.free_km_limit} kms</td>
                                </tr>
                                <tr className='font-semibold'>
                                    <td className=''>Fuel Type:</td>
                                    <td className='ps-10'>{car.additional_info.fuel_type}</td>
                                </tr>
                                <tr className='font-semibold'>
                                    <td className=''>Cancellation:</td>
                                    <td className='ps-10'>{car.pricing.cancellation_policy.cancellation_time_limit}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

        </>
    );
}
export default CarReview;