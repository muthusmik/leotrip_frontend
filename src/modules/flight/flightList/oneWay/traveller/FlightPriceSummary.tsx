import { useState } from "react";
import adults from '../../../../../assets/icons/adult.svg';
import child from '../../../../../assets/icons/child.png';
import baby from '../../../../../assets/icons/icons8-crawling-baby-skin-type-3-48.png';

const FlightPriceSummary = () => {
    // price summary
    const [showCharity, setShowCharity] = useState(true);
    const handleToggleCharity = () => {
        setShowCharity(!showCharity);
    };

    const [Charity, setCharity] = useState(true);

    const handleRemoveCharity = () => {
        setCharity(!Charity);
    };

    const handleAddCharity = () => {
        setCharity(true);
    };
    return (

        <>
            <div className='border text-sm bg-white'>
                <div className='flex justify-between bg-gradient-to-r from-cyan-400 to-blue-400 p-3'>
                    <p className='text-md'>Price Summary</p>
                    <div className='flex items-center me-5'>
                        <img src={adults} alt="Adults" className='w-8 h-7' /><span className='pl-2'>1</span>
                        <img src={child} alt="Child" className='w-5 h-5 mt-2 ml-3' /><span className='pl-2'>0</span>
                        <img src={baby} alt="Child" className='w-5 h-5 mt-2 ml-3' /><span className='pl-2'>0</span>
                    </div>
                </div>
                <div className=' border-b-2 flex justify-between p-3'>
                    <p>Adult*1</p>
                    <h1 className='font-bold'>&#x20B9;<span className='pl-2'>8040</span></h1>
                </div>
                <div className='border-b-2 flex justify-between p-3'>
                    <p>child*0</p>
                    <h1 className='font-bold'>&#x20B9;<span className='pl-2'>0</span></h1>
                </div>
                <div className='border-b-2 flex justify-between p-3'>
                    <p>Infant*0</p>
                    <h1 className='font-bold'>&#x20B9;<span className='pl-2'>0</span></h1>
                </div>
                <div>
                    <button className="w-5 h-5 rounded-full border border-black mt-1 ml-3" onClick={handleToggleCharity}>
                        {showCharity ? "-" : "+"}
                    </button>
                    {showCharity && (
                        <div className='border-b-2  pt-2 pl-7 pb-5'>
                            <div className='flex justify-between'>
                                <p>Other Services</p>
                                <h1 className='font-bold pe-2'>&#x20B9;<span className='pl-2'>300</span></h1>
                            </div>
                            <div className='flex justify-between pt-2'>
                                <p>Total Tax</p>
                                <small className='pe-2'>&#x20B9;<span className='pl-2'>290</span></small>
                            </div>
                            <div className=''>
                                {Charity ? (
                                    <div className="flex justify-between">
                                        <p>Charity <button className="text-blue-500" onClick={handleRemoveCharity}>Remove</button></p>
                                        <small className='pe-2'>&#x20B9;<span className='pl-2'>10</span></small>
                                    </div>
                                ) : (
                                    <div>
                                        <p>Charity <button className="text-blue-500" onClick={handleAddCharity}>Add</button></p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex justify-between p-3'>
                    <h1 className='text-[#ef9d25] text-lg'>Grand Total</h1>
                    <h1 className='text-[#c61e1e] font-bold text-lg'>&#x20B9;<span className='pl-2'>8040</span></h1>
                </div>
            </div>

        </>
    );
}
export default FlightPriceSummary;