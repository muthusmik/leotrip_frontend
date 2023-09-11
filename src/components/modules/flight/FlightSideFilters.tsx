import CheckboxGroupComponent from 'components/common/CheckBoxComponent';
import PriceRangeSlider from 'components/common/PriceRangeSlider';
import { AirLinesList, options } from 'components/utils/constants/stringconstants/common';

interface FlightFilterComponentPrpos {
    setSelectedOptions: (value: []) => void
    setSelectedAirLines: (value: []) => void
    priceRange: [number, number]
    setPriceRange: (value: [number, number]) => void
}
const FlightFilterComponent = ({ setSelectedOptions, setSelectedAirLines, priceRange, setPriceRange }: FlightFilterComponentPrpos) => {

    const handleSliderChange = (newRange: [number, number]) => {
        setPriceRange(newRange);
    };
    const handleCheckboxChange = (values: any) => {
        setSelectedOptions(values);
    };
    const handleAirLineCheckboxChange = (values: any) => {
        setSelectedAirLines(values);
    };
    const DividerComponent = () => {
        return (
            <hr className='border-[1.5px] border-black/50' />
        )
    }

    return (
        <div className='w-[18%] bg-white rounded-md'>
            <h1 className='text-xl font-poppinsRegular px-4 pt-1'>Filter</h1>
            <DividerComponent />
            <CheckboxGroupComponent
                typeNeeded='normal'
                title='Popular Filters'
                options={options}
                onChange={handleCheckboxChange}
            />
            <DividerComponent />
            <PriceRangeSlider
                title={'Price Range'}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onPriceRangeChange={handleSliderChange}
            />
            <DividerComponent />
            <CheckboxGroupComponent
                typeNeeded='normal'
                title='Stops'
                options={AirLinesList}
                onChange={handleAirLineCheckboxChange}
            />
            <DividerComponent />
            <CheckboxGroupComponent
                typeNeeded='box'
                title='Departure from Chennai'
                options={AirLinesList}
                onChange={handleAirLineCheckboxChange}
            />
            <DividerComponent />
            <CheckboxGroupComponent
                typeNeeded='normal'
                title='Departure from Coimbatore'
                options={AirLinesList}
                onChange={handleAirLineCheckboxChange}
            />
            <DividerComponent />
            <CheckboxGroupComponent
                typeNeeded='normal'
                title='Airlines'
                options={AirLinesList}
                onChange={handleAirLineCheckboxChange}
            />
        </div>
    )
}

export default FlightFilterComponent;