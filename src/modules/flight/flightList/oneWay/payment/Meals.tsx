import burger from '../../../../../assets/images/burger.jpg';
import arrow from "../../../../../assets/icons/Arrowtick.svg";
import cake from '../../../../../assets/images/cake.png';
import cooldricks from '../../../../../assets/images/cooldricks.png';
import { useState } from 'react';
const foodData = [
    { image: cake, name: 'Tomato Cucumber Cheese Lettuce Sandwich', price: 500, "isVeg": true },
    { image: cooldricks, name: 'Orange juice', price: 200, "isVeg": true },
    { image: burger, name: 'Burger', price: 400, "isVeg": false },
    // Add more food items as needed
];
const Meals = () => {
    const [isVegChecked, setIsVegChecked] = useState(false);
  const [isNonVegChecked, setIsNonVegChecked] = useState(false);

  const handleVegChange = () => {
    setIsVegChecked(!isVegChecked);
  };

  const handleNonVegChange = () => {
    setIsNonVegChecked(!isNonVegChecked);
  };

  // Filter food items based on the selected checkboxes
  const filteredFoodData = foodData.filter(item => {
    if (isVegChecked && isNonVegChecked) {
      return true; // If both checkboxes are checked, return all items
    } else if (isVegChecked) {
      return item.isVeg; // Return only veg items if veg checkbox is checked
    } else if (isNonVegChecked) {
      return !item.isVeg; // Return only non-veg items if non-veg checkbox is checked
    } else {
      return true; // If no checkbox is checked, return all items
    }
  });
    return (
        <>
            <div className="bg-white pt-2">
                <div className="flex justify-between">
                    <div className='flex border-blue-300 border-b-2 ml-4'>
                        <img src={burger} alt="b" className='w-11 h-7' />
                        <h1 className='font-semibold text-lg pl-1'>Meals</h1>
                    </div>
                    <button className='text-blue-700 pe-2'>Skip and continue</button>
                </div>
                <div className='bg-[#f0eeee] p-5'>
                    <div className='bg-[#aee9fd] p-2'>
                        <p className='pl-2 text-xs'>How about a nice hot breakfast to charge you up during an early morning flight? Choose from the variety of meal options available!</p>
                    </div>
                    {/* <div className='border my-2 bg-white w-[70%]'>
                        <div className='flex justify-between'>
                            <div className="border-l-2 border-[#ec8e03] pl-2">
                                <div className='flex items-center'>
                                    <h1 className="text-base">Chennai</h1>
                                    <img src={arrow} alt="arrow" className="h-3 px-5" />
                                    <h1 className="text-base">Coimbature</h1>
                                </div>
                                <p className='text-light-black text-xs'>0 of 1  Meal(s) selected</p>
                            </div>
                            <div className='flex items-center'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isVegChecked}
                                        onChange={handleVegChange}
                                    />
                                    Veg
                                </label>
                                <br />
                                <label className='px-3'>
                                    <input
                                        type="checkbox"
                                        checked={isNonVegChecked}
                                        onChange={handleNonVegChange}
                                    />
                                    Non-Veg
                                </label>
                                <br />
                            </div>
                        </div>
                        <div className='border bg-white'>
                            
                            {foodData.map((item, index) => (
                                <div key={index} className='flex justify-between border-b-4'>
                                    <div className='flex items-center'>
                                        <img src={item.image} alt={item.name} className='h-10 w-12 m-5' />
                                        <div>
                                            <h1>{item.name}</h1>
                                            <h1>&#x20B9;{item.price}</h1>
                                        </div>
                                    </div>
                                    <div className='me-3 my-auto'>
                                        <button className='border rounded-md shadow-lg px-10 py-1 text-blue-600'>Add</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className='border my-2 bg-white w-[70%]'>
                        <div className='flex justify-between'>
                            <div className="border-l-2 border-[#ec8e03] pl-2">
                                <div className='flex items-center'>
                                    <h1 className="text-base">Chennai</h1>
                                    <img src={arrow} alt="arrow" className="h-3 px-5" />
                                    <h1 className="text-base">Coimbatore</h1>
                                </div>
                                <p className='text-light-black text-xs'>0 of 1  Meal(s) selected</p>
                            </div>
                            <div className='flex items-center'>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={isVegChecked}
                                        onChange={handleVegChange}
                                    />
                                    Veg
                                </label>
                                <br />
                                <label className='px-3'>
                                    <input
                                        type="checkbox"
                                        checked={isNonVegChecked}
                                        onChange={handleNonVegChange}
                                    />
                                    Non-Veg
                                </label>
                                <br />
                            </div>
                        </div>
                        <div className='border bg-white'>
                            {filteredFoodData.map((item, index) => (
                                <div key={index} className='flex justify-between border-b-4'>
                                    <div className='flex items-center'>
                                        <img src={item.image} alt={item.name} className='h-10 w-12 m-5' />
                                        <div>
                                            <h1>{item.name}</h1>
                                            <h1>&#x20B9;{item.price}</h1>
                                        </div>
                                    </div>
                                    <div className='me-3 my-auto'>
                                        <button className='border rounded-md shadow-lg px-10 py-1 text-blue-600'>Add</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Meals;