import androidStore from '../../assets/icons/androidStore.svg';
import appleStore from '../../assets/icons/appleStore.svg';
import scanner from '../../assets/icons/scanner.svg';
import Appadd from '../../assets/images/Appadd.svg';
import tick from '../../assets/icons/tick.svg';
import starone from '../../assets/icons/starone.svg';
import startwo from '../../assets/icons/starone.svg';


export default function APPAdd({ value, onChange, onButtonClick }: any) {
    return (
        <div className="flex h-96 w-[80%] mx-[10%] border-white bg-gradient-to-b from-primary to-white rounded-3xl shadow-card my-[4%]">
            <div>
                <div className='text-white text-3xl font-PoppinsSemiBold mt-5 ml-10'>ENJOY THE APP!</div>
                <div className="h-[210px] w-[320px] bg-white ml-10 rounded-xl mt-10 p-5">
                    <div className='flex'>
                        <img src={tick} alt='error' />
                        <p>Quick access</p>
                    </div>
                    <div className='flex mt-2 mb-4'>
                        <img src={tick} alt='error'/>
                        <p>Enjoy Other Stuffs</p>
                    </div>
                    <div className='grid grid-rows-1 grid-flow-col gap-4'>
                        <div className='border-r-2 border-dotted border-black font-poppinsRegular'>
                            <div className='flex'><p className='text-xl font-poppinsBold pr-2'>4.1</p><img src={starone} alt='error'/></div>
                            <p>50M+ downloads</p>
                            <p>Play Store</p>
                        </div>
                        <div className='font-poppinsRegular'>
                            <div className='flex'><p className='text-xl font-poppinsBold pr-2'>4.5</p><img src={starone} alt='error'/></div>
                            <p>50M+ downloads</p>
                            <p>Play Store</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-12'>
                <div>
                    <p className='text-white my-5 '>Get Download link on</p>
                    <div className="input-group">
                        <input
                            type="number"
                            value={value}
                            onChange={onChange}
                            placeholder="Enter mobile number"
                            className="rounded-l-lg h-10 px-2 w-[79%]"
                        />
                        <button onClick={onButtonClick} className="bg-black text-white px-2 h-10 rounded-r-lg"><span className="text-xs">Get Link</span></button>
                    </div>
                </div>
                <div className="flex gap-20 text-white mt-5 mb-3">
                    <div>
                        Scan to<br />
                        download
                        <img src={scanner} alt='scanner' className='mt-3' />
                    </div>
                    <div>
                        Download the<br />
                        App on
                        <img src={appleStore} alt='appleStore' className='my-5' />
                        <img src={androidStore} alt='androidStore' />
                    </div>
                </div>
            </div>
            <div className='w-80 flex justify-end mr-5'>
                <img src={Appadd} alt="Appadd" className='h-80 mt-8' />
            </div>
        </div>
    );
}