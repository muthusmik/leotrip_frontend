import tick from '../../../assets/icons/tick.svg';
import close from '../../../assets/icons/close.png'
const CarServices = () => {
    return (
        <div className='w-[70%] mx-5 font-poppinsRegular'>
            <div className="border-4 hover:border-blue-200 bg-white w-full px-5 py-7 rounded-lg mb-4">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className='ms-4 md:border-r-2'>
                        <div className=''>
                            <div className='flex items-center'>
                                <img src={tick} alt="tick" className="me-2" />
                                <h3> <span className='font-bold text-xl'>Inclusions</span>  (Included in the Price)</h3>
                            </div>
                            <div className=''>
                                <ul className='list-inside list-disc leading-[2.5] font-semibold'>
                                    <li>Parking Charges</li>
                                    <li>State Tax</li>
                                    <li>Toll Charges</li>
                                    <li>148 Kms</li>
                                    <li>Driver Allowance</li>
                                    <li>Only One Pickup and Drop (Only one included)</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='ms-4'>
                        <div className=''>
                            <div className='flex items-center'>
                                <img src={close} alt="tick" className="me-2" />
                                <h3><span className='font-bold text-xl'>Exclusions</span> (Included in the Price)</h3>
                            </div>
                            <div className='ms-3'>
                                <ul className='list-inside list-disc leading-[2.5]'>
                                    <div className='flex items-center justify-between'>
                                        <li>Fare beyond 148 Kms</li>
                                        <p className='font-semibold'>₹ 15/K</p>
                                    </div>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarServices;