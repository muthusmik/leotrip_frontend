import androidStore from '../../assets/icons/androidStore.svg';
import appleStore from '../../assets/icons/appleStore.svg';
import scanner from '../../assets/icons/scanner.svg';
import Appadd from '../../assets/images/Appadd.svg';
import tick from '../../assets/icons/tick.svg';
import starone from '../../assets/icons/starone.svg';
import startwo from '../../assets/icons/starone.svg';
import leo from '../../assets/icons/LeoLogo.svg';
import CountryFlag from 'react-country-flag';

export default function APPAdd({ value, onChange, onButtonClick }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 border-white  rounded-3xl shadow-card my-[4%] md:mx-[5%]">
            <div className="md:w-[100%] sm:w-[60%] mx-auto my-[6%]">
                <div className="flex ml-10 items-center">
                    <img src={leo} alt="er" className="w-10 h-10" />
                    <div className="font-PoppinsSemiBold ml-5">
                        <div className="text-3xl">Download App Now!</div>
                        <p className="text-sm text-light-black">Use code <span className="font-bold text-black text-base">WELCOMEMMT</span> and get <span className="font-bold text-black text-base">FLAT 12%</span> OFF* on your first domestic flight booking</p>
                    </div>
                </div>
                <div className="md:w-[100%] sm:w-[60%] mx-auto mt-10">
                    <div className="flex flex-col md:flex-row items-center md:justify-start">
                        <div className="md:ml-10 mb-2 md:mb-0"> {/* Add margin for medium screens */}
                            <div className="input-group bg-white flex border items-center pl-2">
                                <CountryFlag countryCode="IN" svg style={{ width: '20px', height: '20px' }} />
                                <span className="font-bold pl-3 w-20">+91 -</span>{/* Country code */}
                                <input
                                    type="tel"
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Enter mobile number"
                                    className="rounded-none border-0 h-10 pl-2 w-full"
                                />
                            </div>
                        </div>
                        <button onClick={onButtonClick} className="border border-blue-500 text-blue-500 px-2 h-10 rounded-r-lg mt-2 md:mt-0 md:ml-2 flex items-center"> {/* Add margin and adjust alignment for medium screens */}
                            <span className="text-sm md:text-base">Get App Link</span>
                        </button>

                    </div>

                </div>
            </div>
            <div className="md:w-full sm:w-full mx-auto">
                <div className="flex flex-row items-center justify-center mx-2 text-white mt-5 mb-3">
                    <div className="md:mr-10 mb-5 md:mb-0"> {/* Add margin for medium screens */}
                        <img src={appleStore} alt="appleStore" className="h-20 w-28" />
                        <img src={androidStore} alt="androidStore" />
                    </div>
                    <div className="ml-5 md:ml-0"> {/* Adjust margin for medium screens */}
                        <img src={scanner} alt="scanner" className="mt-8" />
                    </div>
                </div>
            </div>

        </div>

    );
}