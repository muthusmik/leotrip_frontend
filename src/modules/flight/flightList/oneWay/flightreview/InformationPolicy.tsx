import { useState } from 'react';
import done from '../../../../../assets/icons/f-icon-9.png';
const InformationPolicy = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const flightInfo = [
        "1 PC per passenger Check-in Baggage included for your selected flight on the sector Chennai to Coimbatore.",
        "Airline Cancellation Fee is Rs 3710 per passenger for your selected flight on the sector Chennai to Coimbatore.",
        "Remember to web check-in before arriving at the airport.",
        "Face masks are advisable."
    ];
    const importantInfo = [
        "Wearing face masks is no longer compulsory. However, it’s highly advised to wear masks to stay protected from threats imposed by COVID-19.",
        "Travelers can check the detailed travel guidelines issued by the Indian government. Click here to know more."
    ];
    return (
        <>
            <div className="border-4 my-5 rounded-md">
                <div className="flex p-2 bg-gradient-to-r from-cyan-400 to-blue-400">
                    <img src={done} alt="protect" className='w-10 h-10' />
                    <div className='pl-3'>
                        <h1 className='text-lg'>Good to Know</h1>
                        <p className='text-xm'>Information you should know  </p>
                    </div>
                </div>
                <div>
                    <ul className='list-disc pl-10'>
                        {flightInfo.map((info, index) => (
                            <li key={index} className='py-2 px-2'>{info}</li>
                        ))}
                    </ul>
                </div>

            </div>
            <div>
                <div className='bg-[#8dd6ee] py-2'>
                    <h1 className='pl-2 text-lg'>Important Information</h1>
                    <ul className='list-disc pl-10'>
                        {importantInfo.map((info, index) => (
                            <li key={index} className='py-2 px-2'>{info}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default InformationPolicy;