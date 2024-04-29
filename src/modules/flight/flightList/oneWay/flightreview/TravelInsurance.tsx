
import suitcase from '../../../../../assets/images/suitcase.png';
import Larrow from '../../../../../assets/icons/Arrowleft.svg';
import Rarrow from '../../../../../assets/icons/Arrowright.svg';
import { useState } from 'react';
import RadioButton from '../traveller/Insurance';
const items = [
    { image: require('../../../../../assets/images/suitcase.png'), offer: '24×7 Support', description: 'Baggage Assistance' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 50,000', description: 'Personal Accident' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 500', description: ' Loss of Checked-ln Baggage' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 50,000', description: 'Delay of Checked-in Baggage' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: '24×7 Support', description: 'Baggage Assistance' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 50,000', description: 'Personal Accident' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 500', description: ' Loss of Checked-ln Baggage' },
    { image: require('../../../../../assets/images/suitcase.png'), offer: 'Flat 50,000', description: 'Delay of Checked-in Baggage' },

];
const TravelInsurance = () => {

    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        // Adjust to show 3 previous items if possible
        setStartIndex(Math.max(0, startIndex - 3));
    };

    const handleNext = () => {
        // Adjust to show 3 next items or maximum 5 items
        setStartIndex(Math.min(items.length - 5, startIndex + 3));
    };



    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (value:any) => {
        setSelectedOption(value);
    };
    return (
        <div className="border-4 my-5">
            <div className="bg-[#e9e9e9] flex p-2">
                <img src={suitcase} alt="suitcase" className='w-10 h-10' />
                <div className='pl-3'>
                    <h1 className='text-base font-bold'>Add Travel Insurance and Secure your Trip with ACKO Travel Insurance for Rs. 199/person</h1>
                    <p className=''>(Upon Selecting Travel Insurance ,You accept the Terms and Conditions of the travel insurance policy)</p>
                </div>
            </div>
            <div className='bg-white border'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-bold text-lg pl-8 py-2'>&#x20B9;199/ <small className='font-normal text-xs'>Traveller (18% GST included)</small></h1>
                    <div className='flex items-center'>
                        <button onClick={handlePrev}><img src={Larrow} alt="" className='w-7 h-7' /></button>
                        <button onClick={handleNext}><img src={Rarrow} alt="" className='ml-2 w-7 h-7' /></button>
                    </div>
                </div>
                <div className='flex justify-around my-5 '>
                {items.slice(startIndex, startIndex + 3).map((item, index) => (
                    <div key={index} className='border rounded-lg flex items-center justify-around mx-3 px-3 w-48'>
                        <img src={item.image} alt={item.offer} className='w-5 h-5 m-auto' />
                        <div className='pl-3'>
                            <h1 className='font-bold text-blue-500'>{item.offer}</h1>
                            <p className=''>{item.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div className='border'>
                <div className="bg-int-dark-grey border p-3">
                    <div className="flex flex-col">
                        <RadioButton
                            value="Yes, I want to secure my trip with insurance."
                            selectedOption={selectedOption}
                            onChange={handleOptionChange}
                            label="Yes, I want to secure my trip with insurance."
                        />
                        <div className="flex justify-between items-center">
                            <div className="bg-int-light-sandal ms-8 w-max my-4 items-center flex ">
                                <span className="bg-int-sandal  w-1.5 h-8 inline-block"></span>
                                <span className="text-int-wood px-2">
                                    More than 36% of our customers choose to secure their trip.
                                </span>
                            </div>
                            <div></div>
                        </div>
                        <RadioButton
                            value="No, I do not want to insure my trip."
                            selectedOption={selectedOption}
                            onChange={handleOptionChange}
                            label="No, I do not want to insure my trip."
                        />
                    </div>
                </div>
                <div>
                    {/* <h2>Select an image:</h2>
                    <select value={selectedImage} onChange={handleImageChange}>
                        <option value="">Select an image</option>
                        {Object.keys(images).map((key) => (
                            <option key={key} value={key}>
                                <img src={images.image1} alt={selectedImage} />
                            </option>
                        ))}
                    </select> */}
                </div>
            </div>
        </div>
    )
}
export default TravelInsurance;