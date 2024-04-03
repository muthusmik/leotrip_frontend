import { useState } from "react";

const CouponCode = () => {
    const [selectedCoupon, setSelectedCoupon] = useState('');
    const [couponCode, setCouponCode] = useState('');
    const [offerMessage, setOfferMessage] = useState('');
    const couponData = [
        {
            code: "SAVE10",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE11",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE12",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE13",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE15",
            offer: 'Get 10% off on your purchase!',

        },
        {
            code: "SAVE14",
            offer: 'Get 10% off on your purchase!',

        },

    ];

    const handleClear = () => {
        setSelectedCoupon('');
        setCouponCode('');
        setOfferMessage('');
    };

    const handleCheckboxChange = (event: any) => {
        const { value } = event.target;
        setCouponCode(value);
        setOfferMessage('');
    };

    const handleApplyCoupon = () => {
        const selectedCoupon = couponData.find(coupon => coupon.code === couponCode);
        console.log("xcfgjkl", selectedCoupon)
        if (selectedCoupon) {
            setOfferMessage(selectedCoupon.offer);
            console.log("x", selectedCoupon.offer)
        } else {
            setOfferMessage('Invalid coupon code.');
        }
    };

    return (
        <>
            {/* <div className='border text-sm bg-white mt-5'>
                <div className='bg-gradient-to-r from-cyan-400 to-blue-400 p-3 '>
                    <p className='text-md'>Have a coupon code</p>
                </div>
                <div className='border-b-2'>
                    <div>
                        <div className='mx-4 my-5 border-b-2'>
                            <input
                                type="text"
                                value={couponCode}
                                onChange={(e) => setCouponCode(e.target.value)}
                                placeholder="Enter Coupon Code"
                                className='border-b-2 border-black text-[#ee9c22] text-center text-lg'
                            />

                            <button onClick={handleClear} className='border px-5 py-1 ml-2 text-md rounded-lg'>Clear</button>
                            {<div className={selectedCoupon ? 'text-green-500' : 'text-red-500'}>{offerMessage}</div>}
                            <button onClick={handleApplyCoupon} className='border px-5 py-1 mx-2 my-2 text-md rounded-lg bg-[#ee9c22]'>Apply</button>
                        </div>
                        <div className='border mx-5 mb-3'>
                            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                {couponData.map(coupon => (
                                    <div key={coupon.code}>
                                        <label>
                                            <div className='flex border-b-2'>
                                                <input
                                                    type="checkbox"
                                                    value={coupon.code}
                                                    checked={couponCode === coupon.code}
                                                    onChange={handleCheckboxChange}
                                                    className='h-6 w-6 m-3'
                                                />
                                                <div className='pt-2'>
                                                    <h1 className='font-bold'>{coupon.code} </h1>
                                                    <small>{coupon.offer}</small>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            <div className='border text-sm bg-white mt-5'>
                <div className='bg-gradient-to-r from-cyan-400 to-blue-400 p-3 '>
                    <p className='text-md'>Have a coupon code</p>
                </div>
                <div className='border-b-2'>
                    <div>
                        <div className="border-b-2 px-4 my-5 ">
                            <div className='flex'>
                                <input
                                    type="text"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    placeholder="Enter Coupon Code"
                                    className='border-b-2 border-black text-[#ee9c22] text-center text-lg'
                                />

                                <button onClick={handleClear} className='border px-5 py-1 ml-2 text-md rounded-lg'>Clear</button>

                            </div>
                            {<div className={selectedCoupon ? 'text-green-500' : 'text-red-500'}>{offerMessage}</div>}
                            <button onClick={handleApplyCoupon} className='border px-5 py-1 mx-2 my-2 text-md rounded-lg bg-[#ee9c22]'>Apply</button>
                        </div>
                        <div className='border mx-5 mb-3'>
                            <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                                {couponData.map(coupon => (
                                    <div key={coupon.code}>
                                        <label>
                                            <div className='flex border-b-2'>
                                                <input
                                                    type="checkbox"
                                                    value={coupon.code}
                                                    checked={couponCode === coupon.code}
                                                    onChange={handleCheckboxChange}
                                                    className='h-6 w-6 m-3'
                                                />
                                                <div className='pt-2'>
                                                    <h1 className='font-bold'>{coupon.code} </h1>
                                                    <small>{coupon.offer}</small>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* button */}
            <div className='flex my-5'>
                <button className="bg-int-sandal mx-auto w-[200px] font-poppinsRegular text-white py-2 rounded-lg">
                    continue Booking
                </button>
            </div>
        </>
    );
}
export default CouponCode;