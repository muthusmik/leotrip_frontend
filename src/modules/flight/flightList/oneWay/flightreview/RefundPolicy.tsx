import { useState } from 'react';
import protect from '../../../../../assets/images/protect.png';
const RefundPolicy = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="border-4 my-5 rounded-md">
            <div className="flex p-2">
                <img src={protect} alt="protect" className='w-10 h-10'/>
                <div className='pl-3'>
                    <h1 className='text-blue-400  text-lg'>FREE Medical Refund Policy</h1>
                    <p className='text-xm'>Get full airline refund, if you cancel tickets due to illness or sickness. This  service is provided at sickness. This service is provided at <span className='font-bold'>ZERO additional charges.</span></p>
                </div>
            </div>
            <div className='bg-[#edebeb]'>
                <div className='pt-2 pl-2 text-sm'>
                    <input
                        type="radio"
                        id="yesOption"
                        name="refundPolicy"
                        value="yes"
                        checked={selectedOption === 'yes'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="yesOption">Yes, I want to add Medical Refund Policy (FREE) to this flight</label>
                </div>
                <div className='py-1 pl-2 text-sm'>
                    <input
                        type="radio"
                        id="noOption"
                        name="refundPolicy"
                        value="no"
                        checked={selectedOption === 'no'}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor="noOption">No, I don't wish to add Medical Refund Policy (FREE) to this flight</label>
                </div>
            </div>

        </div>
    );
}
export default RefundPolicy;